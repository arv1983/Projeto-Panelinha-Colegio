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

  const schema = yup.object().shape({
    name: yup.string().required("Required field"),
    city: yup.string().required("Required field"),
    vacancies: yup
      .boolean("The value must be boolean")
      .required("Required field")
      .nullable(),
    social_medias: yup.string().required("Required field"),
    description: yup.string().required("Required field"),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
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

    reset();
  };

  return (
    <div>
      <p>Atualizar perfil Dev</p>

      <form onSubmit={handleSubmit(handleUpdate)}>
        <div>
          <input placeholder="Enter your new name here" {...register("name")} />
          {/* <p>{errors.name?.message}</p> */}
        </div>

        <div>
          <input placeholder="Enter your new city here" {...register("city")} />
          {/* <p>{errors.city?.message}</p> */}
        </div>

        <div>
          <span>Está aceitando vagas?</span>
          <input type="radio" {...register("vacancies")} value="true" />
          <label>Sim!</label>
          <input {...register("vacancies")} type="radio" value="false" />
          <label>Ainda não!</label>
          {/* <p>{errors.vacancies?.message}</p> */}
        </div>

        <div>
          <input
            placeholder="Enter your social medias here"
            {...register("social_medias")}
          />
          {/* <p>{errors.social_medias?.message}</p> */}
        </div>

        <div>
          <input
            placeholder="Enter a descripton here"
            {...register("description")}
          />
          {/* <p>{errors.description?.message}</p> */}
        </div>

        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
};

export default UpProfileComp;
