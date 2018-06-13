import React from "react";
import {Route, Switch} from "react-router-dom";
import AppliedRoute from "./appliedRoute.jsx";
import PrivateRoute from "./privateRoute.jsx"
import Home from "../containers/Home/Home";
import Login from "../containers/Login/Login";
import SingUp from "../containers/SingUp/SingUp";
import Feedback from "../containers/Feedback/Feedback";
import Calculator from "../containers/Calculator/Calculator";
import Materials from "../containers/Materials/Materials";
import Exercises from "../containers/Exercises/Exercises";
import Converter from "../containers/Converter/Converter";
import AddTasks from "../containers/AddTasks/AddTasks";
import AddMaterials from "../containers/AddMaterials/AddMaterials";
import UserFeedback from "../containers/UserFeedback/UserFeedback";
import NotFound from "../containers/NotFound/NotFound";

export default ({model}) =>
    <Switch>
        <AppliedRoute path="/" exact component={Home} props={model}/>
        <AppliedRoute path="/login" exact component={Login} props={model}/>
        <AppliedRoute path="/singup" exact component={SingUp}/>
        <PrivateRoute path="/materials" excat component={Materials} model={model}/>
        <PrivateRoute path="/exercises" excat component={Exercises} model={model}/>
        <PrivateRoute path="/feedback" excat component={Feedback} model={model}/>
        <PrivateRoute path="/calculator" excat component={Calculator} model={model}/>
        <PrivateRoute path="/converter" excat component={Converter} model={model}/>
        <PrivateRoute path="/addTasks" excat component={AddTasks} model={model}/>
        <PrivateRoute path="/addMaterials" excat component={AddMaterials} model={model}/>
        <PrivateRoute path="/userFeedback" excat component={UserFeedback} model={model}/>
        <Route component={NotFound}/>
    </Switch>
;