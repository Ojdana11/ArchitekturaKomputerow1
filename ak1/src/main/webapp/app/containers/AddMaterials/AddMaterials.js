import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Card, {CardActions, CardContent} from 'material-ui/Card';
import Button from 'material-ui/Button';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPaperPlane from '@fortawesome/fontawesome-free-solid/faPaperPlane'
import {Input} from "material-ui";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    menu: {
        width: 200,
    },
    palette: {
        type: 'dark',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
        color: theme.palette.text.secondary,
    },
    pos: {
        marginBottom: 12,
        color: theme.palette.text.secondary,
    },
    icon: {
        marginRight: '5px',
        marginBottom: '3px'
    }
});

class AddMaterials extends React.Component {

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    submit = () => {
        console.log(this.state.file);
    };

    constructor(props) {
        super(props);
        this.state = {
            file: ''
        };
    }

    render() {
        const {classes} = this.props;

        return (
            <div className='LoginForm'>
                <Card className='Card'>
                    <CardContent>
                        <form className='Inputs' noValidate autoComplete='off'>
                            <Input
                                type='file'
                                label='Dodaj zasób'
                                className={classes.textField}
                                margin='normal'
                                onChange={this.handleChange('file')}
                            />
                        </form>
                    </CardContent>
                    <CardActions className='Action'>
                        <Button className='Button' variant='raised' size='small' onClick={this.submit}>
                            <FontAwesomeIcon className={classes.icon} icon={faPaperPlane}/>Prześlij
                        </Button>
                    </CardActions>
                </Card>
            </div>

        );
    }
}

AddMaterials.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddMaterials);
