import { Switch, Route } from "react-router-dom";
import GetallCompanys from "../components/getOneCompany";
import Login from "../components/Login";
import UpProfileComp from "../components/UpProfileComp";
import UpProfileDev from "../components/UpProfileDev";
import PageRegister from "../pages";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <PageRegister/>
        
      </Route>
      <Route exact path="/users">
        <UpProfileComp />
        <UpProfileDev />
      </Route>
      <Route exact path="/all">
        <GetallCompanys/>
      </Route>
    </Switch>
  );
};

export default Routes;
