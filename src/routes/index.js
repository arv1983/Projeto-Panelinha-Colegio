import { Switch, Route } from "react-router-dom";
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
    </Switch>
  );
};

export default Routes;
