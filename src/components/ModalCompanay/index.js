import api from "../../services/api";
import { useEffect, useState } from "react";

const ModalCompanay = ({ user }) => {
  const [dados, setDados] = useState();
  const [token] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    if (!localToken) {
      return "";
    }
    return JSON.parse(localToken);
  });

  useEffect(() => {
    api
      .get(`/vacancies/?idUser=${user.id}`)
      .then((res) => {
        console.log(res);
        setDados(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  console.log("props user" + JSON.stringify(user));

  return <>{dados && dados.map((vagas) => <>{vagas.nome}</>)}</>;
};

export default ModalCompanay;
