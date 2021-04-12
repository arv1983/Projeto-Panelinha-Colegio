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

  function deleta(numero) {
    console.log(numero);
    api
      .delete(`/vacancies/${numero}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => console.log(e));
  }

  const [open, setOpen] = useState(false);
  const handleOpen = (e) => {
    console.log(e);
    setOpen(true);
  };
  const handleClose = (e) => {
    console.log(e.target);
    setOpen(false);
  };

  const schema = yup.object().shape({
    nome: yup.string().required("Campo obrigatorio"),
    descricao: yup.string().required("Campo obrigatorio"),
    presencial: yup.string().required("Campo obrigatorio"),
    beneficios: yup.string().required("Campo obrigatorio"),
    local: yup.string().required("Campo obrigatorio"),
    data: yup.string().required("Campo obrigatorio"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleData = (dados) => {
    console.log(dados);
    api
      .post(
        "/vacancies",
        {
          nome: dados.nome,
          descricao: dados.descricao,
          presencial: dados.presencial,
          beneficios: dados.beneficios,
          local: dados.local,
          data: dados.data,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      {props.lista &&
        props.lista.map((item, i) => (
          <div key={i}>
            id: {item.id} vaga: {item.nome}
            <button onClick={() => deleta(item.id)}> Delete</button>
            {/* <div><button onClick={handleOpen} key={i}>
                Editar vaaaga
              </button>  */}
            <VacanciesListEdit dados={item} />
            {/* <Modal open={open} onClose={handleClose}>
                <>
                  <div>id: {item.id}</div>
                  <div>vaga: {item.nome}</div>
                  <div>index: {i}</div>

                  <form onSubmit={handleSubmit(handleData)}>
                    <input type="hidden" defaultValue={item.id}></input>
                    <div>
                      <input
                        type="text"
                        defaultValue={item.nome}
                        placeholder="nome"
                        {...register("nome")}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        defaultValue={item.descricao}
                        placeholder="descricao"
                        {...register("descricao")}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        defaultValue={item.presencial}
                        placeholder="presencial"
                        {...register("presencial")}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        defaultValue={item.beneficios}
                        placeholder="beneficios"
                        {...register("beneficios")}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        defaultValue={item.local}
                        placeholder="local"
                        {...register("local")}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        defaultValue={item.data}
                        placeholder="data"
                        {...register("data")}
                      />
                    </div>
                    <div>
                      <button type="submit">editar</button>
                    </div>
                  </form>
                </>
              </Modal>
            </div> */}
          </div>
        ))}
    </>
  );
};

export default VacanciesList;
