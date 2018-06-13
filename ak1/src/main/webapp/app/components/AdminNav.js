import React from 'react';
import faBook from "@fortawesome/fontawesome-free-solid/faBook";
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import RouteNavItem from '../routers/routeNavItem.jsx';
import faTasks from "@fortawesome/fontawesome-free-solid/faTasks";
import faEnvelopeOpen from "@fortawesome/fontawesome-free-solid/faEnvelopeOpen";
import {withStyles} from "material-ui/styles/index";
import {Button} from "material-ui";

const styles = {
    icon: {
        marginRight: '5px'
    }
};

class AdminNav extends React.Component {
    state = {};

    handleMenu = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleClose = () => {
        this.setState({anchorEl: null});
    };

    toggleMenu = () => {
        this.setState({toggledMenu: !this.state.toggledMenu});
    };

    handleClickOpen = () => {
        this.setState({openModal: true});
    };

    render() {
        const {classes} = this.props;

        const AddTasks = props => <RouteNavItem href='/addTasks' {...props}/>;
        const AddMaterials = props => <RouteNavItem href='/addMaterials' {...props}/>;
        const UserFeedback = props => <RouteNavItem href='/userFeedback'  {...props}/>;

        return (
            < div>
                <Button color="inherit" component={AddTasks}>
                    <FontAwesomeIcon className={classes.icon} icon={faTasks}/>Dodaj zdania
                </Button>
                <Button color="inherit" component={AddMaterials}>
                    <FontAwesomeIcon className={classes.icon} icon={faBook}/>Dodaj materiały
                </Button>
                <Button color="inherit" component={UserFeedback}>
                    <FontAwesomeIcon className={classes.icon} icon={faEnvelopeOpen}/>Opinie
                </Button>
            </div>
        );
    }
}

AdminNav.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminNav);
