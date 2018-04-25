import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Card, {CardActions, CardContent} from 'material-ui/Card';
import Button from 'material-ui/Button';
import './Login.css';
import singUpService from "../SingUp/singUpService";

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
const defaultEmailText = 'Wprowadz adres email';
const wrongEmailFormatText = 'Niepoporawny format email';
const defaultPasswordText = 'Przynajmniej 8 znaków';
const wrongPasswordText = 'Haslo ma mniej niz 8 znakow';

class Login extends React.Component {

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    submit = () => {
        const invalidateEmail = !singUpService.isValidateEmail(this.state.email);
        const emailText = invalidateEmail ? wrongEmailFormatText : defaultEmailText;

        const isPasswordWrong = !singUpService.isPassworLengthRequired(this.state.password);
        const passwordText = isPasswordWrong ? wrongPasswordText : defaultPasswordText;

        this.setState({
            emailHelperText: emailText,
            passwordHelperText: passwordText,
            isWrongEmail: invalidateEmail,
            isPasswordWrong
        });

        //TO DO: call API
        if (!invalidateEmail && !isPasswordWrong) {
            singUpService.singin({
                password: this.state.password,
                email: this.state.email,
            }, (loggedIn, t) => {
                if (!loggedIn)
                    this.setState({error: true, message: message});
                else {
                    this.props.history.push('/');
                    this.props.userHasAuthenticated(true);
                }

            });

        }

        if (!invalidateEmail && !isPasswordWrong) {

        }

    };

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            repeatedPassword: '',
            emailHelperText: defaultEmailText,
            passwordHelperText: defaultPasswordText,
            isWrongEmail: false,
            isPasswordWrong: false
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
                                label='Haslo'
                                required
                                className={classes.textField}
                                error={this.state.isPasswordWrong}
                                type='password'
                                autoComplete='current-password'
                                helperText={this.state.passwordHelperText}
                                margin='normal'
                                onChange={this.handleChange('password')}
                            />
                        </form>
                    </CardContent>
                    <CardActions className='Action'>
                        <Button className='Button' variant='raised' size='small' onClick={this.submit}>Zaloguj</Button>
                    </CardActions>
                </Card>
            </div>

        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
