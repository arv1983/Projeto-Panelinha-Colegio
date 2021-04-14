import { Switch, Route, useHistory } from "react-router-dom";
import PageHome from "../pages/PageHome";
import PageLogReg from "../pages/PageLogReg";
import PagePesquisa from "../pages/PagePesquisa";
import PageProfileComp from "../pages/PageProfileCompany";
import PageProfileUsers from "../pages/PageProfileUsers";
import Vacancies from "../components/Vacancies";
import JoinVancacie from "../components/JoinVacancie";
import Error404 from "../pages/Error";
import { Token } from "../providers/TokenProvider";
import { User } from "../providers/UserProvider";

const Routes = () => {
  const { id, loggedUser } = User();

  const { token } = Token();

  const history = useHistory();

  if (loggedUser.type === "pj") {
    history.push("/home");
  }

  if (!token) {
    history.push("/");
  }

  return (
    <Switch>
      <Route exact path="/">
        <PageLogReg />
      </Route>
      <Route exact path="/home">
        <PageHome />
      </Route>
      <Route exact path="/users/comp">
        <PageProfileComp />
      </Route>

      <Route exact path="/vagas">
        <Vacancies />
        <JoinVancacie />
      </Route>

      <Route exact path="/users/dev">
        <PageProfileUsers />
      </Route>
      <Route exact path="/pesquisa">
        <PagePesquisa />
      </Route>

      <Route>
        <Error404 />
      </Route>
    </Switch>
  );
};

export default Routes;
