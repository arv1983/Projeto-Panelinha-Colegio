import { Switch, Route } from "react-router-dom";
import GetallCompanys from "../components/GetOneCompany";
import Login from "../components/Login";
import UpProfileComp from "../components/UpProfileComp";
import UpProfileDev from "../components/UpProfileDev";
import GetAllUsersCompany from "../components/GetAllUsersCompany";
import PageRegister from "../pages";
import GetOneCompany from "../components/GetOneCompany";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <PageRegister />
      </Route>
      <Route exact path="/users/comp">
        <UpProfileComp />
      </Route>
      <Route exact path="/users/dev">
        <UpProfileDev />
        <GetOneCompany/>
      </Route>
    
    </Switch>
  );
};

export default Routes;
