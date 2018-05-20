import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Routes from '../routers/routers.jsx';
import RouteNavItem from '../routers/routeNavItem.jsx';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class MenuAppBar extends React.Component {
    state = {
        anchorEl: null,
        isAuthenticated: false,
        toggledMenu: true
    };

    handleChange = (event, checked) => {
        this.setState({isAuthenticated: false});
    };

    handleMenu = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleClose = () => {
        this.setState({anchorEl: null});
    };

    userHasAuthenticated = authenticated => {
        this.setState({isAuthenticated: authenticated});
    };

    logOut = () => {
        this.setState({isAuthenticated: false});
    };

    toggleMenu = () => {
        this.setState({toggledMenu: !this.state.toggledMenu});
    };

    render() {
        const {classes} = this.props;
        const {isAuthenticated, anchorEl} = this.state;

        const childProps = {
            isAuthenticated: this.state.isAuthenticated,
            userHasAuthenticated: this.userHasAuthenticated,
            toggledMenu: this.state.toggledMenu
        };

        const HomePage = props => <RouteNavItem href='/' {...props}/>;
        const LoginPage = props => <RouteNavItem href='/login' model={childProps}  {...props}/>;
        const SingupPage = props => <RouteNavItem href='/singup' {...props}/>;
        const Materials = props => <RouteNavItem href='/materials' model={childProps} {...props}/>;
        const Exercises = props => <RouteNavItem href='/exercises' model={childProps} {...props}/>;
        const Feedback = props => <RouteNavItem href='/feedback' model={childProps} {...props}/>;
        const Calculator = props => <RouteNavItem href='/calculator' model={childProps} {...props}/>;
        const Converter = props => <RouteNavItem href='/converter' model={childProps} {...props}/>;

        return (
            <div className={classes.root}>
                <AppBar position='static'>
                    <Toolbar>
                        {isAuthenticated &&
                        <IconButton onClick={this.toggleMenu} className={classes.menuButton} color='inherit'
                                    aria-label='Menu'>
                            <MenuIcon/>
                        </IconButton>}
                        <Typography variant="title" color="inherit" className={classes.flex} component={HomePage}>ARCHITEKTURA
                            KOMPUTEROW</Typography>
                        {!isAuthenticated && <div><Button color="inherit" component={LoginPage}>Logowanie</Button>
                            <Button color="inherit" component={SingupPage}>Rejestracja</Button></div>}
                        {isAuthenticated && <div>
                            <Button color="inherit" component={Calculator}>Kalkulator</Button>
                            <Button color="inherit" component={Converter}>Konwerter</Button>
                            <Button color="inherit" component={Exercises}>Zadania</Button>
                            <Button color="inherit" component={Materials}>Materiały</Button>
                            <Button color="inherit" component={Feedback}>Prześlij opinie</Button>
                            <Button color="inherit" onClick={this.logOut}>Wyloguj</Button>
                        </div>}
                    </Toolbar>
                </AppBar>
                <Routes model={childProps}/>
            </div>
        );
    }
}

MenuAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);