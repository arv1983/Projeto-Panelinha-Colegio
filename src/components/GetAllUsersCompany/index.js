import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import api from "../../services/api";

const GetOneCompany = () => {
  const token = JSON.parse(localStorage.getItem("token"));

  console.log(token);
  const location = useLocation();
  const [dados, setDados] = useState([]);

  const handleData = (e) => {
    e.preventDefault();
    console.log(e.target.busca.value);

    api
      .get(`/users?type=Company&name=${e.target.busca.value}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setDados(res.data);
      })
      .catch((e) => console.log(e));
  };
  console.log(dados);
  return (
    <>
      <form onSubmit={(e) => handleData(e)}>
        <input name="busca" type="text"></input>
        <button type="submit">procurar</button>
      </form>

      {dados && dados.map((item) => <>{item.email}</>)}
    </>
  );
};

export default GetOneCompany;
