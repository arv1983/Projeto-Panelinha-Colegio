import { useState, useEffect } from "react";
import { Rotate } from "react-awesome-reveal";
import CardVagas from "../CardVagas/index.js";
import VacanciesListEdit from "./edit.js";

import { DivVaga } from "./style";

const VacanciesList = (props) => {
  return (
    <div>
<<<<<<< HEAD
      <h1 style={{margin: "10px", padding: "20px"}}>Vagas Cadastradas</h1>
      <div style={{display:  "flex", flexWrap: "wrap"}}>
=======
      <h1 style={{ margin: "10px" }}>Vagas Cadastradas</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
>>>>>>> 62214db504dd999daa1ef871cde484459b63d371
        {props.lista &&
          props.lista.map((item, i) => (
            <div key={i}>
              <Rotate>
                <DivVaga>
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
