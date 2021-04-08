import { Switch, Route } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import UpProfileComp from "../components/UpProfileComp";
import UpProfileDev from "../components/UpProfileDev";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Register />
        <Login />
      </Route>
      <Route exact path="/users">
        <UpProfileComp />
        <UpProfileDev />
      </Route>
    </Switch>
  );
};

export default Routes;
