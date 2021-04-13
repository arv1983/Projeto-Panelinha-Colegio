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

  const pegaLista = () => {
    api
      .get(`/vacancies?idUser=${id}`)
      .then((response) => {
        setLista(response.data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    pegaLista();
  }, [id]);

  const handleData = (dados) => {
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
        if (response.status === 201) {
          pegaLista();
        }
      })
      .catch((e) => {
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
        console.log(response.status);
        if (response.status === 200) {
          pegaLista();
        }
      })
      .catch((e) => console.log(e));
  }

  return (
    <>
      <h2>Anunciar vaga de emprego</h2>
      <form onSubmit={handleSubmit(handleData)}>
        <div>
          <input type="text" placeholder="nome" {...register("nome")} />
        </div>
        <div>
          <input
            type="text"
            placeholder="descricao"
            {...register("descricao")}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="presencial"
            {...register("presencial")}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="beneficios"
            {...register("beneficios")}
          />
        </div>
        <div>
          <input type="text" placeholder="local" {...register("local")} />
        </div>
        <div>
          <input type="text" placeholder="data" {...register("data")} />
        </div>
        <div>
          <button type="submit">Anunciar vaga</button>
        </div>
      </form>

      <VacanciesList lista={lista} setLista={setLista} deleta={deleta} />
    </>
  );
};

export default Vacancies;
