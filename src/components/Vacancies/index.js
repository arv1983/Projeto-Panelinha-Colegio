import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { User } from "../../providers/UserProvider";
import api from "../../services/api";
import { useState, useEffect } from "react";
import VacanciesList from "../VacanciesList";

const Vacancies = () => {
  const [lista, setLista] = useState();
  const [token] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    if (!localToken) {
      return "";
    }
    return JSON.parse(localToken);
  });

  const { id } = User();

  useEffect(() => {
    api
      .get(`/vacancies?idUser=${id}`)
      .then((response) => {
        setLista(response.data);
      })
      .catch((e) => console.log(e));
  }, [id]);

  const handleData = (dados) => {
    console.log("testeteste");
    api
      .post(
        "/vacancies",
        {
          idUser: id,
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
        // gambiarra emergencial
        api
          .get(`/vacancies?idUser=${id}`)
          .then((response) => {
            setLista(response.data);
          })
          .catch((e) => console.log(e));
      })
      .catch((e) => {
        console.log("deu merda2");
        console.log(e);
      });
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

  return (
    <>
      <form onSubmit={handleSubmit(handleData)}>
        <input type="text" placeholder="nome" {...register("nome")} />
        <input type="text" placeholder="descricao" {...register("descricao")} />
        <input
          type="text"
          placeholder="presencial"
          {...register("presencial")}
        />
        <input
          type="text"
          placeholder="beneficios"
          {...register("beneficios")}
        />
        <input type="text" placeholder="local" {...register("local")} />
        <input type="text" placeholder="data" {...register("data")} />
        <button type="submit">cadastro</button>
      </form>

      <VacanciesList lista={lista} />
    </>
  );
};

export default Vacancies;
