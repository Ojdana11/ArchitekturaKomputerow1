import React from 'react';
import faRetweet from "@fortawesome/fontawesome-free-solid/faRetweet";
import faBook from "@fortawesome/fontawesome-free-solid/faBook";
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import RouteNavItem from '../routers/routeNavItem.jsx';
import faCalculator from "@fortawesome/fontawesome-free-solid/faCalculator";
import faTasks from "@fortawesome/fontawesome-free-solid/faTasks";
import faEnvelopeOpen from "@fortawesome/fontawesome-free-solid/faEnvelopeOpen";
import {withStyles} from "material-ui/styles/index";
import {Button} from "material-ui";

const styles = {
    icon: {
        marginRight: '5px'
    }
};

class UserNav extends React.Component {
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

        const Materials = props => <RouteNavItem href='/materials' {...props}/>;
        const Exercises = props => <RouteNavItem href='/exercises' {...props}/>;
        const Feedback = props => <RouteNavItem href='/feedback'  {...props}/>;
        const Calculator = props => <RouteNavItem href='/calculator' {...props}/>;
        const Converter = props => <RouteNavItem href='/converter'  {...props}/>;

        return (
            < div>
                < Button color="inherit" component={Calculator}>
                    <FontAwesomeIcon className={classes.icon} icon={faCalculator}/>Kalkulator
                </Button>
                <Button color="inherit" component={Converter}>
                    <FontAwesomeIcon className={classes.icon} icon={faRetweet}/>Konwerter
                </Button>
                <Button color="inherit" component={Exercises}>
                    <FontAwesomeIcon className={classes.icon} icon={faTasks}/>Zadania
                </Button>
                <Button color="inherit" component={Materials}>
                    <FontAwesomeIcon className={classes.icon} icon={faBook}/>Materiały
                </Button>
                <Button color="inherit" component={Feedback}>
                    <FontAwesomeIcon className={classes.icon} icon={faEnvelopeOpen}/>Prześlij opinie
                </Button>
            </div>
        );
    }
}

UserNav.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserNav);
