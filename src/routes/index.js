import { Switch, Route } from "react-router-dom";
import UpProfileComp from "../components/UpProfileComp";
import UpProfileDev from "../components/UpProfileDev";
import PageLogReg from "../pages/PageLogReg";
// import GetallCompanys from "../components/GetOneCompany";
// import UpProfileComp from "../components/UpProfileComp";
// import UpProfileDev from "../components/UpProfileDev";
// import GetAllUsersCompany from "../components/GetAllUsersCompany";
import GetOneCompany from "../components/GetOneCompany";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <PageLogReg/>
      </Route>
      <Route exact path="/users">
        <UpProfileComp />
        <UpProfileDev />
        <GetOneCompany/>
      </Route>
    
    </Switch>
  );
};

export default Routes;
