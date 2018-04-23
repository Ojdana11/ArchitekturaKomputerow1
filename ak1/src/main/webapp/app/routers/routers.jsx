import React from "react";
import {Route, Switch} from "react-router-dom";
import AppliedRoute from "./appliedRoute.jsx";
import PrivateRoute from "./privateRoute.jsx"
import Home from "../containers/Home/Home";
import Login from "../containers/Login/Login";
import SingUp from "../containers/SingUp/SingUp";
import Materials from "../containers/Materials/Materials";
import NotFound from "../containers/NotFound/NotFound";

export default ({model}) =>
    <Switch>
        <AppliedRoute path="/" exact component={Home} props={model}/>
        <AppliedRoute path="/login" exact component={Login} props={model}/>
        <AppliedRoute path="/singup" exact component={SingUp}/>
        <PrivateRoute path="/materials" excat component={Materials} model={model}/>
        <Route component={NotFound}/>
    </Switch>
;