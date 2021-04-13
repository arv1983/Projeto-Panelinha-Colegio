import { Hidden, Modal } from "@material-ui/core";
import api from "../../services/api";
import { useState, useEffect } from "react";
import { User } from "../../providers/UserProvider";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import VacanciesListEdit from "./edit.js";

import * as yup from "yup";

const VacanciesList = (props) => {
  const [token] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    if (!localToken) {
      return "";
    }
    return JSON.parse(localToken);
  });

  return (
    <>
      {props.lista &&
        props.lista.map((item, i) => (
          <div key={i}>
            id: {item.id} vagas: {item.nome}
            <button onClick={() => props.deleta(item.id)}> Delete</button>
            <VacanciesListEdit dados={item} setLista={props.setLista} />
          </div>
        ))}
    </>
  );
};

export default VacanciesList;
