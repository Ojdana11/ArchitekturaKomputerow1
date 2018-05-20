import React, {Component} from "react";
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Card, {CardActions, CardContent} from 'material-ui/Card';
import Button from 'material-ui/Button';

import {withStyles} from "material-ui/styles/index";
import $ from "jquery";

const styles = theme => ({
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        marginRight: '50px'
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
                            <Button className='Button' variant='raised' size='small' onClick={this.submit}>Przelicz</Button>
                            <Button className='Button' variant='raised' size='small' onClick={this.clear}>Wyczysc</Button>
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