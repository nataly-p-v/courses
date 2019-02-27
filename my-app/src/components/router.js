import React from 'react';
import Login from './login/login';
import Courses from './courses/courses';
import { Switch, Route} from 'react-router-dom';


const Main = () => (
    <Switch>
        <Route exact path={"/courses"} component={Courses} />
        <Route exact path={"/login"} component={Login} />
    </Switch>
);
export default Main;
