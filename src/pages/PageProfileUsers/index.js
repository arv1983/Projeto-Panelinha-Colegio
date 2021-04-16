import { useHistory } from "react-router-dom";
import AlteraHead from "../../components/AlterHead";
import UpProfileDev from "../../components/UpProfileDev";
import { User } from "../../providers/UserProvider";
import { DivComp, DivAvatar, DivProfile } from "../../stylesGlobal";

const PageProfileUsers = () => {
  const history = useHistory();

  const { loggedUser } = User();

  if (loggedUser.type === "pj") {
    history.push("/users/comp");
  }

  return (
    <div>
      <AlteraHead />
      <DivProfile>
        <DivAvatar>
          <img src="" alt=""></img>
        </DivAvatar>
        <DivComp>
          <UpProfileDev />
        </DivComp>
      </DivProfile>
    </div>
  );
};
export default PageProfileUsers;
