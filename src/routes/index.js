import { Switch, Route } from "react-router-dom";
import PageHome from "../pages/PageHome";
import PageLogReg from "../pages/PageLogReg";
import PagePesquisa from "../pages/PagePesquisa";
import PageProfileComp from "../pages/PageProfileCompany";
import PageProfileUsers from "../pages/PageProfileUsers";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <PageLogReg />
      </Route>
      <Route exact path="/home">
        <PageHome/>
      </Route>
      <Route exact path="/users/comp">
        <GetAllComp />
        <GetOneDev />
        <UpProfileComp/>
        <GetOneCompany />
        <Vacancies />
      </Route>
      <Route exact path="/users/dev">
        <PageProfileUsers/>
      </Route>
      <Route exact path="/pesquisa">
        <PagePesquisa/>
      </Route>
      <Route exact path="/up">
      <UpProfileComp />
      </Route>
    </Switch>
  );
};

export default Routes;
