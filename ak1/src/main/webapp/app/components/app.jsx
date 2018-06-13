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
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faSignInAlt from '@fortawesome/fontawesome-free-solid/faSignInAlt'
import faUserPlus from '@fortawesome/fontawesome-free-solid/faUserPlus'
import UserNav from './UserNav'
import AdminNav from './AdminNav'

import faSignOutAlt from "@fortawesome/fontawesome-free-solid/faSignOutAlt";


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
    icon: {
        marginRight: '5px'
    }
};

class MenuAppBar extends React.Component {
    state = {
        anchorEl: null,
        isAuthenticated: false,
        toggledMenu: true,
        openModal: false,
        isAdmin: false
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

    isAdmin = value => {
        this.setState({isAdmin: value});
    };

    logOut = () => {
        this.setState({isAuthenticated: false});
    };

    toggleMenu = () => {
        this.setState({toggledMenu: !this.state.toggledMenu});
    };

    handleClickOpen = () => {
        this.setState({openModal: true});
    };

    render() {
        const {classes} = this.props;
        const {isAuthenticated, isAdmin} = this.state;

        const childProps = {
            isAuthenticated: this.state.isAuthenticated,
            userHasAuthenticated: this.userHasAuthenticated,
            toggledMenu: this.state.toggledMenu,
            isAdmin: this.isAdmin
        };

        const HomePage = props => <RouteNavItem href='/' {...props}/>;
        const LoginPage = props => <RouteNavItem href='/login' model={childProps}  {...props}/>;
        const SingupPage = props => <RouteNavItem href='/singup' {...props}/>;

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
                            KOMPUTEROW
                        </Typography>
                        {!isAuthenticated && <div><Button color="inherit" component={LoginPage}>
                            <FontAwesomeIcon className={classes.icon} icon={faSignInAlt}/>Logowanie
                        </Button>
                            <Button color="inherit" component={SingupPage}>
                                <FontAwesomeIcon className={classes.icon} icon={faUserPlus}/>Rejestracja
                            </Button>
                        </div>}
                        {isAuthenticated && !isAdmin && <div>
                            <UserNav/>
                        </div>}
                        {isAuthenticated && isAdmin && <div>
                            <AdminNav/>
                        </div>}
                        {isAuthenticated && <Button color="inherit" onClick={this.logOut}>
                            <FontAwesomeIcon className={classes.icon} icon={faSignOutAlt}/>Wyloguj
                        </Button>}
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