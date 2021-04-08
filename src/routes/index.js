import { Switch, Route } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import UpProfileComp from "../components/UpProfileComp";
import UpProfileDev from "../components/UpProfileDev";
import GetAllUsersCompany from "../components/GetAllUsersCompany";

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
      <Route exact path="/search">
        <GetAllUsersCompany />
      </Route>
    </Switch>
  );
};

export default Routes;
