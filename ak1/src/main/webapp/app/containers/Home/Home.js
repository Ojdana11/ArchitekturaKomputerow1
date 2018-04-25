import React, {Component} from "react";
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import "./Home.css";

export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="lander">
                    <Paper elevation={25}>
                        <Typography variant="headline" component="h3">
                           Applikacja do wspomagania nauki przedmiotu AK1
                        </Typography>
                    </Paper>
                </div>
            </div>
        );
    }
}