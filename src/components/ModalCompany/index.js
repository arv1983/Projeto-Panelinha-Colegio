import api from "../../services/api";
import { useEffect, useState } from "react";
import { Principa } from "./style";
const ModalCompany = ({ user }) => {
  const [dados, setDados] = useState([]);

  const [vacDados, setVacDados] = useState([]);

  useEffect(() => {
    api
      .get(`/users?id=${user.id}`)
      .then((res) => {
        setDados(res.data);
      })
      .catch((e) => console.log(e));
  }, [user.id]);

  useEffect(() => {
    api
      .get(`/vacancies/?idUser=${user.id}`)
      .then((res) => {
        setVacDados(res.data);
      })
      .catch((e) => console.log(e));
  }, [user.id]);

  console.log(dados);
  return (
    <Principa>
      <div>
        <h4 style={{ display: "inline" }}>Nome: </h4>
        {dados[0]?.name}
      </div>

      <div>
        <h4 style={{ display: "inline" }}>Descrição:</h4>{" "}
        {dados[0]?.description ? dados[0]?.description : ""}
      </div>
      <div>
        <h4 style={{ display: "inline" }}>Quarter:</h4>{" "}
        {dados[0]?.city ? dados[0]?.city : ""}
      </div>
      <div>
        <h4 style={{ display: "inline" }}>Midia: </h4>
        {dados[0]?.social_medias ? dados[0]?.social_medias : ""}
      </div>
      <div style={{ display: "inline" }}>
        <h4>Vagas Anunciadas:</h4>
        {vacDados.map((vagas, i) => (
          <ul key={i} style={{ listStyle: "none" }}>
            <li>-{vagas.nome}</li>
          </ul>
        ))}
      </div>
    </Principa>
  );
};

export default ModalCompany;
