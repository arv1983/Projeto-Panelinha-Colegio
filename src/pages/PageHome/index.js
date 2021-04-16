import AlteraHead from "../../components/AlterHead";
import TabPesquisa from "../../components/TabPesquisa";
import { User } from "../../providers/UserProvider";
import { useEffect, useState } from "react";
import api from "../../services/api";

const PageHome = () => {
  const { id } = User();
  const [vagas, setVagas] = useState([]);
  const [candi, setCandi] = useState([]);

  useEffect(() => {
    carrega();
  }, []);

  // INICIO NAO FUÇAR... CODIGO DOS DEUSES
  const carrega = () => {
    api
      .get(`/vacancies?idUsers=${id}`)
      .then((res) => {
        setVagas(res.data);

        let arr = [];
        res.data.map((pesq_id) =>
          pesq_id.cad.map((add) => arr.push("&id=" + add))
        );
        arr = Array.from(new Set(arr));
        arr = arr.join("");
        if (arr) {
          api.get(`/users/?${arr}`).then((response) => {
            setCandi(response.data);
          });
        }
      })
      .catch((e) => console.log(e));
  };
  // FIM NAO FUÇAR... CODIGO DOS DEUSES

  return (
    <>
      <AlteraHead />
      id: {id}
      Voce tem {vagas.length} anunciada
      {vagas &&
        vagas.map((dados) => (
          <h1>
            {dados.nome}
            Essa vaga tem {dados.cad.length} candidatos
            <br />
            {dados.cad &&
              dados.cad.map((candidatos, i) => (
                <>
                  nomes
                  <br />
                  {candidatos}
                  {
                    candi.find((element) => element.id === Number(candidatos))
                      ?.name
                  }{" "}
                  AQUI VEM LINK PARA VER PERFIL
                </>
              ))}
          </h1>
        ))}
    </>
  );
};

export default PageHome;
