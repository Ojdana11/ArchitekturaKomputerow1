import React from "react";
import {Route} from "react-router-dom";


export default props =>
    <Route
        path={props.href}
        exact
        children={({history}) =>
            <div
                onClick={(e) => {
                    e.preventDefault();
                    history.push(props.href);
                }}
                {...props}
            >
                {props.children}
            </div>}
    />;