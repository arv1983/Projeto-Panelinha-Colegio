import { Switch, Route } from "react-router-dom";
import UpProfileComp from "../components/UpProfileComp";
import UpProfileDev from "../components/UpProfileDev";
import PageLogReg from "../pages/PageLogReg";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <PageLogReg/>
      </Route>
      <Route exact path="/users">
        <UpProfileComp />
        <UpProfileDev />
      </Route>
    </Switch>
  );
};

export default Routes;
