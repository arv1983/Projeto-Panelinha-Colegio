import { useState, useEffect } from "react";
import { Rotate } from "react-awesome-reveal";
import CardVagas from "../CardVagas/index.js";
import VacanciesListEdit from "./edit.js";

import { DivVaga} from './style'

const VacanciesList = (props) => {
  const [token] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    if (!localToken) {
      return "";
    }
    return JSON.parse(localToken);
  });

  return (
    <div>
      <h1 style={{margin: "10px", padding: "20px"}}>Vagas Cadastradas</h1>
      <div style={{display:  "flex", flexWrap: "wrap"}}>
        {props.lista &&
          props.lista.map((item, i) => (
            <div key={i}>
              <Rotate>
                  <DivVaga >
                  <CardVagas item={item} />
                  <button onClick={() => props.deleta(item.id)}> Delete</button>
                  <VacanciesListEdit dados={item} setLista={props.setLista} />
                </DivVaga>
              </Rotate>
            </div>
          ))}
      </div>
    </div>
  );
};

export default VacanciesList;
