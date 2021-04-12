import { useHistory } from "react-router-dom";
import { User } from "../../providers/UserProvider";

const Logout = () => {
  const { setId } = User();

  const history = useHistory();

  const logoutUser = () => {
    localStorage.removeItem("token");
    setId(false);
    history.push("/");
  };

  return <button onClick={logoutUser}>Logout</button>;
};

export default Logout;
