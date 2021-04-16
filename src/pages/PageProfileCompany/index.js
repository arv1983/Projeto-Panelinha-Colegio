import { useHistory } from "react-router-dom";
import AlteraHead from "../../components/AlterHead";
import Navegation from "../../components/Navegation";
import UpProfileComp from "../../components/UpProfileComp";
import Vacancies from "../../components/Vacancies";
import { User } from "../../providers/UserProvider";

import { DivComp, DivAvatar, DivProfile } from "../../stylesGlobal";

const PageProfileComp = () => {
  const { loggedUser } = User();

  const history = useHistory();
  if (loggedUser.type === "pf") {
    history.push("/users/dev");
  }

  return (
    <>
      <AlteraHead />
      <DivProfile>
        <DivAvatar>
          <img src="" alt=""></img>
        </DivAvatar>
        <DivComp className="divCOmp">
          <UpProfileComp />
        </DivComp>
      </DivProfile>
      <div
        style={{
          border: "1px solid white",
          width: "99%",
          height: "auto",
          margin: "30px auto",
          textAlign: "center",
        }}
      >
        <h1> Anuncia Vagas</h1>
        <Vacancies />
      </div>
    </>
  );
};
export default PageProfileComp;
