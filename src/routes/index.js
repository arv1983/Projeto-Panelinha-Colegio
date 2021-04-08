import { Switch, Route } from "react-router-dom";
import Login from "../components/Login";
import UpProfileComp from "../components/UpProfileComp";
import UpProfileDev from "../components/UpProfileDev";
import GetAllUsersCompany from "../components/GetAllUsersCompany";
import PageRegister from "../pages";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <PageRegister />
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
