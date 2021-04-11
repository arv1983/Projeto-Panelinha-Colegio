import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services/api";
import { useState } from "react";
import { User } from "../../providers/UserProvider";

const UpProfileComp = () => {
  const { id, loggedUser } = User();

  const [token] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    if (!localToken) {
      return "";
    }
    return JSON.parse(localToken);
  });

  // const schema = yup.object().shape({
  //   name: yup.string().required("Required field"),
  //   city: yup.string().required("Required field"),
  //   vacancies: yup
  //     .boolean("The value must be boolean")
  //     .required("Required field")
  //     .nullable(),
  //   social_medias: yup.string().required("Required field"),
  //   description: yup.string().required("Required field"),
  // });

  const { register, handleSubmit, errors } = useForm({
    // resolver: yupResolver(schema),
  });

  const handleUpdate = (data) => {
    api
      .patch(`/users/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <h2>Atualizar perfil Comp</h2>

      <form onSubmit={handleSubmit(handleUpdate)}>
        <div>
          <input
            placeholder="Nome"
            {...register("name")}
            defaultValue={loggedUser.name}
          />
          {/* <p>{errors.name?.message}</p> */}
        </div>

        <div>
          <input
            placeholder="Cidade"
            {...register("city")}
            defaultValue={loggedUser.city}
          />
          {/* <p>{errors.city?.message}</p> */}
        </div>

        <div>
          <span>Está aceitando vagas?</span>
          <input
            type="radio"
            {...register("have_vacancies")}
            value="true"
            defaultChecked={loggedUser.have_vacancies}
          />
          <label>Sim!</label>
          <input
            {...register("have_vacancies")}
            type="radio"
            value="false"
            defaultChecked={loggedUser.have_vacancies}
          />
          <label>Ainda não!</label>
          {/* <p>{errors.vacancies?.message}</p> */}
        </div>

        <div>
          <input
            placeholder="Redes Sociais"
            {...register("social_medias")}
            defaultValue={loggedUser.social_medias}
          />
          {/* <p>{errors.social_medias?.message}</p> */}
        </div>

        <div>
          <input
            placeholder="Descrição"
            {...register("description")}
            defaultValue={loggedUser.description}
          />
          {/* <p>{errors.description?.message}</p> */}
        </div>

        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
};

export default UpProfileComp;
