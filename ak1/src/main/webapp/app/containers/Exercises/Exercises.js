import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import List, {ListItem, ListItemText,} from 'material-ui/List';
import Grid from 'material-ui/Grid';
import './Exercises.css';
import exercies from './exerciesSources'
import ExpansionPanel from 'material-ui/ExpansionPanel';
import ExpansionPanelDetails from 'material-ui/ExpansionPanel/ExpansionPanelDetails';
import ExpansionPanelSummary from 'material-ui/ExpansionPanel/ExpansionPanelSummary';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui/Icon';
import Button from 'material-ui/Button';
import Input from 'material-ui/Input';
import InputAdornment from 'material-ui/Input/InputAdornment';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        minWidth: 0, // So the Typography noWrap worka
        padding: 0
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
    },
    toolbar: theme.mixins.toolbar,
    comments: {
        display: 'flex',
        flexDirection: 'column'
    },
    addButton: {
        float: 'right'
    }
});

class ClippedDrawer extends React.Component {
    changeCategory = (index) => {
        return () => {
            this.setState({
                exercies: exercies[index],
                comment: '',
                expanded: false
            });
        };

    };
    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    addComment = () => {
        console.log(this.state.comment);
    };

    saveComment = event => {
        this.setState({
            comment: event.target.value,
        });
    };


    constructor(props) {
        super(props);
        this.state = {
            expanded: null,
            exercies: exercies[0],
            comment: ''
        };

        this.changeCategory = this.changeCategory.bind(this);
    }

    render() {
        const {classes} = this.props;
        const toggledMenu = this.props.model.toggledMenu;
        const {expanded} = this.state;

        return <div className={classes.root}>
            {toggledMenu && <Drawer
                variant="persistent"
                open={toggledMenu}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Grid item>
                    <div className={classes.demo}>
                        <List>
                            {exercies.map((exercise, index) => {
                                return (
                                    <ListItem button key={index}>
                                        <ListItemText onClick={this.changeCategory(index)}
                                                      primary={exercise.category}/>
                                    </ListItem>
                                )
                            })}
                        </List>
                    </div>
                </Grid>
                <Divider/>
            </Drawer>}

            <main className={classes.content}>
                {this.state.exercies.tasks.map((task, index) => {
                    return (

                        <ExpansionPanel expanded={expanded === index} onChange={this.handleChange(index)}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                <Typography className={classes.heading}> {task.content}</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails className={classes.comments}>
                                <Input
                                    multiline={1}
                                    placeholder={'Dodaj komentarz'}
                                    onChange={this.saveComment}
                                    endAdornment={
                                        <InputAdornment position="start">
                                            <Button aria-label="add" size='small' onClick={this.addComment}
                                                    className={classes.addButton}>Dodaj</Button>
                                        </InputAdornment>
                                    }
                                />
                                <div>
                                    {/*TO DO: Fill with comments*/}
                                    <Typography className={classes.heading}> </Typography>
                                </div>

                            </ExpansionPanelDetails>


                        </ExpansionPanel>
                    )
                })}
            </main>
        </div>;
    }
}

ClippedDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClippedDrawer);