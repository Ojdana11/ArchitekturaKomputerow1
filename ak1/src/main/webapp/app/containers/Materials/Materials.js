import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import List, {ListItem, ListItemText,} from 'material-ui/List';
import Grid from 'material-ui/Grid';
import './Materials.css';
import materials from './materialSources'

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
    changeMaterialSource = (material) => {
        return () => {
            this.setState({
                materialSource: `https://docs.google.com/gview?url=${material.path}&embedded=true`
            });
        };

    };

    constructor(props) {
        super(props);
        this.state = {
            materialSource: `https://docs.google.com/gview?url=${materials[0].path}&embedded=true`
        };
        this.changeMaterialSource = this.changeMaterialSource.bind(this);

    }

    render() {
        const {classes} = this.props;
        const toggledMenu = this.props.model.toggledMenu;

        return (
            <div className={classes.root}>
                {toggledMenu && <Drawer
                    variant="persistent"
                    open={toggledMenu}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <Grid item>
                        {/*<Typography variant="title" className={classes.title}>*/}
                        {/*</Typography>*/}
                        <div className={classes.demo}>
                            <List>
                                {materials.map((material) => {
                                    return (
                                        <ListItem button>
                                            <ListItemText onClick={this.changeMaterialSource(material)}
                                                          primary={material.title}/>
                                        </ListItem>
                                    )
                                })}
                            </List>
                        </div>
                    </Grid>
                    <Divider/>
                </Drawer>}

                <main className={classes.content}>
                    <iframe className='FrameMaterial'
                            src={this.state.materialSource}
                            frameBorder="0" ></iframe>

                </main>
            </div>
        );
    }
}

ClippedDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClippedDrawer);