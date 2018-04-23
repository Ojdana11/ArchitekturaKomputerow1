import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Card, {CardActions, CardContent} from 'material-ui/Card';
import Button from 'material-ui/Button';
import './SingUp.css';
import singUpService from './singUpService';

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
});

const defaultEmailText = 'Enter your email';
const wrongEmailFormatText = 'Wrong email format';
const defaultPasswordText = 'At least 8 characters';
const wrongPasswordText = 'Password has less than 8 characters';
const defaultRepeatedPasswordText = 'Type password once again';
const wrongRepeatedPasswordText = 'Passwords are different';
const defaultFistnameText = 'Enter your firstname';
const wrongFistnameText = 'Firstname should contains at least 1 character';
const defaultLastnameText = 'Enter your lastname';
const wrongLastnameText = 'Firstname should contains at least 1 character';

class SingUp extends React.Component {

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    submit = () => {
        const invalidateFirstname = !this.state.firstname.length >= 1;
        const firstnameHelperText = invalidateFirstname ? wrongFistnameText : defaultFistnameText;

        const invalidateLastname = !this.state.lastname.length >= 1;
        const lastnameHelperText = invalidateLastname ? wrongLastnameText : defaultLastnameText;

        const invalidateEmail = !singUpService.isValidateEmail(this.state.email);
        const emailText = invalidateEmail ? wrongEmailFormatText : defaultEmailText;

        const isPasswordWrong = !singUpService.isPassworLengthRequired(this.state.password);
        const passwordText = isPasswordWrong ? wrongPasswordText : defaultPasswordText;

        const isRepeatedPasswordWrong = !singUpService.areTheSamePasswords(this.state.password, this.state.repeatedPassword);
        const repeatedPasswordText = isRepeatedPasswordWrong ? wrongRepeatedPasswordText : defaultRepeatedPasswordText;


        this.setState({
            emailHelperText: emailText,
            passwordHelperText: passwordText,
            firstnameHelperText,
            lastnameHelperText,
            repeatedPasswordHelperText: repeatedPasswordText,
            isWrongEmail: invalidateEmail,
            isPasswordWrong,
            isRepeatedPasswordWrong,
            invalidateFirstname,
            invalidateLastname
        });

        if (!invalidateEmail && !isPasswordWrong && !isRepeatedPasswordWrong)
            this.props.history.push('/login');
    };

    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            repeatedPassword: '',
            emailHelperText: defaultEmailText,
            passwordHelperText: defaultPasswordText,
            repeatedPasswordHelperText: defaultRepeatedPasswordText,
            firstnameHelperText: defaultFistnameText,
            lastnameHelperText: defaultLastnameText,
            isWrongEmail: false,
            isPasswordWrong: false,
            isRepeatedPasswordWrong: false,
            invalidateFirsttname: false,
            invalidateLastname: false
        };
    }

    render() {
        const {classes} = this.props;

        return (
            <div className='LoginForm'>
                <Card className='Card'>
                    <CardContent>
                        <form className='Inputs' noValidate autoComplete='off'>
                            <TextField
                                id='firstname'
                                label='Firstname'
                                required
                                error={this.state.invalidateFirstname}
                                placeholder='Jhon'
                                className={classes.textField}
                                helperText={this.state.firstnameHelperText}
                                margin='normal'
                                onChange={this.handleChange('firstname')}
                            />
                            <TextField
                                id='lastname'
                                label='Lastname'
                                required
                                error={this.state.invalidateLastname}
                                placeholder='Doe'
                                className={classes.textField}
                                helperText={this.state.lastnameHelperText}
                                margin='normal'
                                onChange={this.handleChange('lastname')}
                            />
                            <TextField
                                id='email'
                                label='Email'
                                required
                                error={this.state.isWrongEmail}
                                placeholder='name@example.com'
                                className={classes.textField}
                                helperText={this.state.emailHelperText}
                                margin='normal'
                                onChange={this.handleChange('email')}
                            />
                            <TextField
                                id='password'
                                label='Password'
                                required
                                className={classes.textField}
                                error={this.state.isPasswordWrong}
                                type='password'
                                autoComplete='current-password'
                                helperText={this.state.passwordHelperText}
                                margin='normal'
                                onChange={this.handleChange('password')}
                            />
                            <TextField
                                id='repeatedPassword'
                                label='Repeat password'
                                required
                                error={this.state.isRepeatedPasswordWrong}
                                className={classes.textField}
                                type='password'
                                helperText={this.state.repeatedPasswordHelperText}
                                autoComplete='current-password'
                                margin='normal'
                                onChange={this.handleChange('repeatedPassword')}
                            />
                        </form>
                    </CardContent>
                    <CardActions className='Action'>
                        <Button className='Button' variant='raised' size='small' onClick={this.submit}>Submit</Button>
                    </CardActions>
                </Card>
            </div>

        );
    }
}

SingUp.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingUp);
