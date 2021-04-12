import { Hidden, Modal } from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services/api";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

const VacanciesListEdit = (props) => {
  const [token] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    if (!localToken) {
      return "";
    }
    return JSON.parse(localToken);
  });
  console.log(props);

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
      <button onClick={handleOpen}>Editar vaga</button>

      <Modal open={open} onClose={handleClose}>
        <>
          <div>id: {props.dados.id}</div>
          <div>vaga: </div>
          <div>index:</div>

          <form onSubmit={handleSubmit(handleData)}>
            {/* <input type="hidden" defaultValue={props.item.id}></input> */}
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
