import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import api from "../../services/api";

const GetOneCompany = () => {
  const token = JSON.parse(localStorage.getItem("token"));

  console.log(token);
  const location = useLocation();

  const handleData = () => {
    api
      .get(`/users/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e));
  };

  return (
    <form>
      <input name="busca" type="text"></input>
      <button type="submit">procurar</button>
    </form>
  );
};

export default GetOneCompany;
