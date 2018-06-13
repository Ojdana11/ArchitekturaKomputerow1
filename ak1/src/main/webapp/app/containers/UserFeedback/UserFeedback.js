import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import {Card} from 'material-ui';

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

class UserFeedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userFeedback: []
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                userFeedback: [
                    {content: 'Bardzo fajna apka. Dzieki'},
                    {content: 'To jest to czego nam brakowało!'}
                ]
            });
        },0)

    }

    render() {
        return (
            <div>
                {this.state.userFeedback.length && this.state.userFeedback.map((feedback) => {
                    return <Card> {feedback.content}</Card>
                })}
            </div>
        );
    }
}

UserFeedback.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserFeedback);
