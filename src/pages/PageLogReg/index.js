import { useState } from "react";
import Login from "../../components/Login";
import Register from "../../components/Register";

import { DivPai, TextForm, TextContent } from "./style";

import { Rotate } from "react-awesome-reveal";
import Navegation from "../../components/Navegation";

import { LogReg } from "../../providers/LogRegProvider";

const PageLogReg = () => {
  const { status, setStatus } = LogReg();
  return (
    <>
      <Navegation />
      <DivPai>
        <div className="divHead">aaaaaaa</div>
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
              Ao Kenzi Recrutamento, onde voce podera encontrar as Empresas
              Parceiras e nossos Devs.
            </p>
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
