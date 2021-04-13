import { Hidden, Modal } from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services/api";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

import { User } from "../../providers/UserProvider";
import { Vac } from "../../providers/VacancieProvider";

const VacanciesListEdit = (props) => {
  const { id } = User();
   const {vacCountClick, setVacCountClick} = Vac();
  const [token] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    if (!localToken) {
      return "";
    }
    return JSON.parse(localToken);
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
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
    api
      .patch(
        `/vacancies/${props.dados.id}`,
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
        setVacCountClick(vacCountClick + 1)
        if (response.status === 200) {
          api
            .get(`/vacancies?idUser=${id}`)
            .then((response) => {
              props.setLista(response.data);
              setVacCountClick(vacCountClick + 1)
            })
            .catch((e) => console.log(e));
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <button onClick={handleOpen}>Editar vaga</button>

      <Modal open={open} onClose={handleClose}>
        <>
          <div>id: {props.dados.id}</div>
          <div>vaga: </div>
          <div>index:</div>

          <form onSubmit={handleSubmit(handleData)}>
            <div>
              <input
                type="text"
                defaultValue={props.dados.nome}
                placeholder="nome"
                {...register("nome")}
              />
            </div>
            <div>
              <input
                type="text"
                defaultValue={props.dados.descricao}
                placeholder="descricao"
                {...register("descricao")}
              />
            </div>
            <div>
              <input
                type="text"
                defaultValue={props.dados.presencial}
                placeholder="presencial"
                {...register("presencial")}
              />
            </div>
            <div>
              <input
                type="text"
                defaultValue={props.dados.beneficios}
                placeholder="beneficios"
                {...register("beneficios")}
              />
            </div>
            <div>
              <input
                type="text"
                defaultValue={props.dados.local}
                placeholder="local"
                {...register("local")}
              />
            </div>
            <div>
              <input
                type="text"
                defaultValue={props.dados.data}
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
    </>
  );
};

export default VacanciesListEdit;
