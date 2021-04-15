import Login from "../../components/Login";
import Register from "../../components/Register";
import kenzie from "../../img/kenzie.png"

import { DivPai, TextForm, TextContent } from "./style";

import { Rotate } from "react-awesome-reveal";

import { LogReg } from "../../providers/LogRegProvider";
import AlteraHead from '../../components/AlterHead'

const PageLogReg = () => {
  const { status, setStatus } = LogReg();
  return (
    <>      
    <AlteraHead/>
      <DivPai>
        <div className="divHead">
          <img src={kenzie} alt="kenzie"/>
          <h1>Recrutamento</h1>
        </div>
        <div className="divContent">
          <TextForm>
            {status ? (
              <Rotate direction="bottom-left">
                <Register />
              </Rotate>
            ) : (
              <Rotate direction="bottom-right">
                <Login />
              </Rotate>
            )}
            <button className="btn-Comp" onClick={() => setStatus(!status)}>
              {status ? "Login" : "Register"}
            </button>
          </TextForm>
          <TextContent>
            <h3>Bem - Vindo</h3>
            <p>
              Ao Kenzie Recrutamento, onde voce podera encontrar as Empresas
              Parceiras e nossos Devs.
            </p>
            <br></br>
            <p>
              As parceiras terão acesso as tecnologias, ideias, projetos e
              perfil dos Devs, já nos Devs terão acesso para conhecer um pouco
              das empresas, as vagas disponiveis das empresas, é melhor colocar
              seu desejo em estar trabalhando com uma empresa parceira
            </p>
          </TextContent>
        </div>
      </DivPai>
    </>
  );
};

export default PageLogReg;
