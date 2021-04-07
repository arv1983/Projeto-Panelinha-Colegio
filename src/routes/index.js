import { Switch, Route } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import UpdateUserComp from "../components/UpdateUserComp";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Register />
        <Login />
      </Route>
      <Route exact path="/users">
        <UpdateUserComp />
      </Route>
    </Switch>
  );
};

export default Routes;
