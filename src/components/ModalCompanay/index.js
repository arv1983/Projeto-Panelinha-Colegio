import api from "../../services/api";
import { useEffect, useState } from "react";
import {DivPai} from './syle'

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
        setDados(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      {dados === []? 
        <DivPai>
          {dados.map((vagas) => 
            <>
              <h4>Nome:</h4>{vagas.nome}
            </>)}
        </DivPai>: 
        <DivPai>
          Não tem Vagas Cadastradas
        </DivPai>}
    </div>
  )
};

export default ModalCompanay;
