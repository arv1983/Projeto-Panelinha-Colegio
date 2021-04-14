import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import { User } from "../../providers/UserProvider";
import { Vac } from "../../providers/VacancieProvider";
import api from "../../services/api";
const JoinVancacie = () => {
  const { id, loggedUser } = User();
  const history = useHistory();
  const [token] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    if (!localToken) {
      return "";
    }
    return JSON.parse(localToken);
  });
  const [vacancies, setVacancies] = useState([]);
  const { vacCountClick, setVacCountClick } = Vac();
  const [cad, setCad] = useState([]);
  useEffect(() => {
    api
      .get(`/vacancies`)
      .then((res) => setVacancies(res.data))
      .catch((e) => console.log(e));
  }, [vacCountClick]);

  const subscribe = (vac_id) => {
    console.log(vac_id);
    console.log("teste");
    // setCad([...3])
    api
      .patch(
        `/vacancies/1`,
        { cadId: [1, 3] },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => setVacCountClick(vacCountClick + 1))
      .catch((e) => console.log(e));
  };
  const unSubscribe = (vac_id) => {
    api
      .patch(
        `/vacancies/${vac_id}`,
        { cadId: [] },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => setVacCountClick(vacCountClick + 1))
      .catch((e) => console.log(e));
  };
  return (
    <>
      {vacancies &&
        vacancies.map((vac) => {
          return (
            <>
              <h1>nome vaga: {vac.nome}</h1>
              <h2>id vaga:{vac.id}</h2>
              <button onClick={() => subscribe(vac.id)}>Candidatar</button>
            </>
          );
        })}
      {console.log(cad)}
      {vacancies &&
        vacancies
          .filter((item) => item.cadId[0] === id)
          .map((item) => (
            <>
              <h1>{item.nome}</h1>
              <h2>{item.id}</h2>
              <button onClick={() => unSubscribe(item.id)}>remover</button>
            </>
          ))}
    </>
  );
};
export default JoinVancacie;
