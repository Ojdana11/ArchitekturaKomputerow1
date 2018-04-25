import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import List, {ListItem, ListItemText,} from 'material-ui/List';
import Grid from 'material-ui/Grid';
import './Exercises.css';
import exercies from './exerciesSources'
import Card, {CardContent} from 'material-ui/Card';
import Typography from 'material-ui/Typography';

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
});

class ClippedDrawer extends React.Component {
    changeCategory = (index) => {
        return () => {
            this.setState({
                exercies: exercies[index]
            });
        };

    };

    constructor(props) {
        super(props);
        this.state = {
            exercies: exercies[0]
        };

        this.changeCategory = this.changeCategory.bind(this);

    }

    render() {
        const {classes} = this.props;
        const toggledMenu = this.props.model.toggledMenu;

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
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary">
                                    {index + 1}
                                </Typography>
                                <Typography component="p">
                                    {task.content}
                                </Typography>
                            </CardContent>
                        </Card>
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