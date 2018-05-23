import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import List from 'material-ui/List';
import Radio from 'material-ui/Radio';
import RadioGroup from 'material-ui/Radio/RadioGroup';
import FormControlLabel from 'material-ui/Form/FormControlLabel';
import FormControl from 'material-ui/Form/FormControl';
import FormLabel from 'material-ui/Form/FormLabel';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import {isBinValid, isHexValid, isOctValid} from './validators'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faEquals from "@fortawesome/fontawesome-free-solid/faEquals";
import faTrash from "@fortawesome/fontawesome-free-solid/faTrash";


import $ from "jquery";
import _ from 'lodash';

const drawerWidth = 240;

const styles = theme => ({
        root: {
            flexGrow: 1,
            zIndex: 1,
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
        },
        drawerPaper: {
            position: 'relative',
            width: drawerWidth
        },
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            minWidth: 0, // So the Typography noWrap worka
            padding: 0
        },
        demo: {
            backgroundColor: theme.palette.background.paper,
        },
        title: {
            margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
        },
        toolbar: theme.mixins.toolbar,
        operation: {
            display: 'flex',
            flexDirection: 'column'
        },
        operandInputs: {
            display: 'flex',
            flexDirection: 'row',
        },
        operationSymbol: {
            padding: '50px',
            paddingTop: '40px'
        },
        equalButton: {
            padding: '30px'
        },
        firstOperand: {
            paddingLeft: '30px'
        },
        options: {
            marginLeft: '10px'
        },
        icon: {
            marginRight: '5px',
            marginBottom: '3px'
        }
    }
);

const operations = {
    addition: {sign: '+', polishName: 'Dodawanie'},
    subtraction: {sign: '-', polishName: 'Odejmowanie'},
    multiplication: {sign: '*', polishName: 'Mnożenie'},
    division: {sign: '/', polishName: 'Dzielenie'}
};

const systems = {
    2: {validator: isBinValid},
    8: {validator: isOctValid},
    16: {validator: isHexValid},
};

const hexMapping = {
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15
};

class ClippedDrawer extends React.Component {
    changeOperation = event => {
        const operationName = Object.keys(operations).find((operationName) => operations[operationName].polishName === event.target.defaultValue);
        this.setState({
            operation: operations[operationName],
            operationName
        });
    };

    changeBase = event => {
        const validator = systems[event.target.value].validator;
        const firstWrong = !validator(this.state.first);
        const secondWrong = !validator(this.state.second);

        this.setState({
            base: event.target.value,
            firstWrong,
            secondWrong
        });

        // this.setState({isOperationDisabled: this.isOperationDisabled()});
    };

    changeSystem = event => {
        this.setState({
            system: event.target.defaultValue,
        });
    };

    submit = () => {
        this.setState({
            isOperationDisabled: true
        });
        let {argA, argB} = this.normalize();

        const operation = {
            argA,
            argB,
            operation: this.state.operationName,
            base: this.state.base,
            whichSystem: this.state.system
        };

        $.ajax({
            type: 'POST',
            url: `http://localhost:8080/compute`,
            contentType: 'application/json',
            data: JSON.stringify(operation),
            success: ({result}) => {
                this.setState({
                    result: this.convert(result),
                    isOperationDisabled: false
                });
            },
            error: (xhr, status, err) => {
                this.setState({
                    isOperationDisabled: false
                });
            }
        });

    };

    isOperationDisabled = () => {
        return this.state.firstWrong || this.state.secondWrong || !this.state.first || !this.state.second;
    };

    updateOperand = name => event => {
        const validator = systems[this.state.base].validator;
        const operandState = `${name}Wrong`;
        const isValid = !validator(event.target.value);

        this.setState({
            [name]: event.target.value,
            [operandState]: isValid,
        });

        // this.setState({isOperationDisabled: this.isOperationDisabled()});
    };
    clear = () => {
        this.setState({
            result: '',
            first: '',
            second: '',
            firstWrong: false,
            secondWrong: false,
            isOperationDisabled: true
        })
    };

    constructor(props) {
        super(props);
        this.state = {
            expanded: null,
            operation: operations.addition,
            base: '2',
            result: '',
            operationName: 'addition',
            firstWrong: false,
            secondWrong: false,
            isOperationDisabled: false,
            system: 'naturalny'
        };
    }

    convert(result) {
        const regex = /[\d|\+]+/g;
        return result
            .match(regex)
            .map(((number) => {
                if (number.length === 2)
                    return _.invert(hexMapping)[number];
                return number;
            }))
            .join('');
    }

    normalize() {
        let first = this.state.first.split('');
        let second = this.state.second.split('');

        if (this.state.base === '16') {
            first = replace(first);
            second = replace(second);
        }

        const lentgthDiff = first.length - second.length;
        if (lentgthDiff > 0 && (this.state.operationName === 'addition' || this.state.operationName === 'subtraction')) {
            for (let i = 0; i < lentgthDiff; i++) {
                second.unshift('0')
            }
        }

        if (lentgthDiff < 0 && (this.state.operationName === 'addition' || this.state.operationName === 'subtraction')) {
            for (let i = 0; i < Math.abs(lentgthDiff); i++) {
                first.unshift('0')
            }
        }

        const argA = first.map((sign) => parseInt(sign));
        const argB = second.map((sign) => parseInt(sign));

        return {argA, argB};

        function replace(hexValue) {
            return hexValue.map((sign) => {
                if (hexMapping[sign.toUpperCase()])
                    return hexMapping[sign.toUpperCase()];
                return sign;
            });
        };
    }

    render() {
        const {classes} = this.props;
        const toggledMenu = this.props.model.toggledMenu;

        const polishOperationNames = Object.values(operations).map(value => value.polishName);
        const bases = ['2', '8', '16'];
        const systems = ['naturalny', 'uzupelnieniowy'];

        return <div className={classes.root}>
            {toggledMenu && <Drawer
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}>
                <List className={classes.options}><FormLabel component="legend">Operacja</FormLabel>
                    {polishOperationNames.map((operation, index) => {
                        return (
                            <FormControl component="fieldset" required className={classes.operation} key={index}>
                                <RadioGroup
                                    className={classes.group}
                                    value={this.state.operation.polishName}
                                    onChange={this.changeOperation}
                                >
                                    <FormControlLabel value={operation} control={<Radio/>}
                                                      label={operation}/>
                                </RadioGroup>
                            </FormControl>
                        );
                    })}
                </List>
                <Divider/>
                <List className={classes.options}><FormLabel component="legend">Podstawa</FormLabel>
                    {bases.map((base, index) => {
                        return (
                            <FormControl component="fieldset" required className={classes.formControl} key={index}>
                                <RadioGroup
                                    className={classes.group}
                                    value={this.state.base}
                                    onChange={this.changeBase}>
                                    <FormControlLabel value={base} control={<Radio/>} label={base}/>
                                </RadioGroup>
                            </FormControl>
                        );
                    })}
                </List>
                <Divider/>
                <List className={classes.options}><FormLabel component="legend">System</FormLabel>
                    {systems.map((system, index) => {
                        return (
                            <FormControl component="fieldset" required className={classes.formControl} key={index}>
                                <RadioGroup
                                    className={classes.group}
                                    value={this.state.system}
                                    onChange={this.changeSystem}
                                >
                                    <FormControlLabel value={system} control={<Radio/>} label={system}/>
                                </RadioGroup>
                            </FormControl>
                        );
                    })}
                </List>
            </Drawer>}
            <main className={classes.operandInputs}>
                <div className={classes.firstOperand}>
                    <TextField
                        label="Pierwszy operand"
                        className={classes.textField}
                        margin="normal"
                        value={this.state.first}
                        error={this.state.firstWrong}
                        onChange={this.updateOperand('first')}
                    />
                </div>

                <div className={classes.operationSymbol}>
                    {this.state.operation.sign}
                </div>
                <TextField
                    label="Drugi operand"
                    className={classes.textField}
                    margin="normal"
                    value={this.state.second}
                    error={this.state.secondWrong}
                    onChange={this.updateOperand('second')}
                />
                <div className={classes.equalButton}>
                    <Button className='Button' variant='raised' size='small'
                        disabled={this.state.isOperationDisabled}
                            onClick={this.submit}>
                        <FontAwesomeIcon icon={faEquals}/>
                    </Button>
                </div>
                <TextField
                    label="Wynik"
                    className={classes.textField}
                    margin="normal"
                    value={this.state.result}
                    disabled
                    onChange={this.updateOperand('second')}
                />

                <div className={classes.equalButton}><Button className='Button' variant='raised' size='small'
                                                             onClick={this.clear}>
                    <FontAwesomeIcon className={classes.icon} icon={faTrash}/>Wyczysc
                </Button>
                </div>
            </main>
        </div>;
    }
}

ClippedDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ClippedDrawer);