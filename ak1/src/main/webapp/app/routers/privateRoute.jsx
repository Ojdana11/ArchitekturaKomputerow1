import React from "react";
import {Redirect, Route} from "react-router-dom";

export default ({component: Component, isAuthenticated, model, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            model.isAuthenticated ? (
                <Component model={model} {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: {from: props.location}
                    }}
                />
            )
        }
    />
);