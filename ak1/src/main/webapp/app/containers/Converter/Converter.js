import React, {Component} from "react";
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Card, {CardActions, CardContent} from 'material-ui/Card';
import Button from 'material-ui/Button';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faExchangeAlt from '@fortawesome/fontawesome-free-solid/faExchangeAlt'
import faTrash from '@fortawesome/fontawesome-free-solid/faTrash'

import {withStyles} from "material-ui/styles/index";
import $ from "jquery";

const styles = theme => ({
    buttons: {
        display: 'flex',
        flexDirection: 'row'
    },
    convertButton: {
        marginLeft: '50px'
    },
    clearButton: {
        marginRight: '50px'
    },
    icon: {
        marginRight: '5px',
        marginBottom: '3px'
    }
});

class Converter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            valueToConvert: '',
            convertedValue: ''
        };
    }

    submit = () => {
        $.ajax({
            type: 'POST',
            url: `http://localhost:8080/convertieee`,
            contentType: 'application/json',
            data: JSON.stringify({value: this.state.valueToConvert}),
            success: ({result}) => {
                this.setState({
                    convertedValue: result
                });
            },
            error: (xhr, status, err) => {
                console.error(status, err.toString());
            }
        });
    };

    handleChange = event => {
        this.setState({valueToConvert: event.target.value});
    };

    clear = () => {
        this.setState({
            valueToConvert: '',
            convertedValue: ''
        });
    };

    render() {
        const {classes} = this.props;
        return (
            <div className='LoginForm'>
                <Card className='Card'>
                    <CardContent>
                        <form className='Inputs' noValidate autoComplete='off'>
                            <TextField
                                label='Liczba'
                                className={classes.textField}
                                margin='normal'
                                value={this.state.valueToConvert}
                                onChange={this.handleChange}
                            />
                            <TextField
                                label='Wynik'
                                className={classes.textField}
                                margin='normal'
                                value={this.state.convertedValue}
                                disabled
                            />
                        </form>
                    </CardContent>
                    <CardActions className='Action'>
                        <div className={classes.buttons}>
                            <div className={classes.clearButton}>
                                <Button className='Button' variant='raised' size='small'
                                        onClick={this.clear}>
                                    <FontAwesomeIcon className={classes.icon} icon={faTrash}/>Wyczyść
                                </Button>
                            </div>
                            <div className={classes.convertButton}>
                                <Button className='Button' variant='raised' size='small'
                                        onClick={this.submit}>
                                    <FontAwesomeIcon className={classes.icon} icon={faExchangeAlt}/>Przelicz
                                </Button>
                            </div>
                        </div>

                    </CardActions>
                </Card>
            </div>

        );
    }
}

Converter.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Converter);