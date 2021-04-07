import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Container } from "./styles";
import api from "../../services/api";
import { User } from "../../providers/UserProvider";

const CreateProfileDev = () => {
  const { id } = User();
  const token = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    if (!localToken) {
      return "";
    }
    console.log(localToken)
    return JSON.parse(localToken);

  });

  const schema = yup.object().shape({
    name: yup.string().max(100).required(),
    city: yup.string().max(20).required(),
    have_job: yup
      .boolean("The value must be boolean")
      .required("Required field")
      .nullable(),
    avaliable_job: yup
      .boolean("The value must be boolean")
      .required("Required field")
      .nullable(),
    quarter: yup.string().max(1),
    social_medias: yup.string().max(25),
    cellPhone: yup.string().max(12).required(),
    softSkills: yup.string(),
    description: yup.string().max(400).required(),
    is_coach: yup
      .boolean("The value must be boolean")
      .required("Required field")
      .nullable(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleCreate = (data) => {
    api
      .patch(`/users/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res)).catch((e) => console.log(e));
    
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(handleCreate)}>
        <div>
          <input {...register("name")} placeholder="Nome" />
        </div>

        <div>
          <input {...register("city")} placeholder="Cidade" />
        </div>

        <input
          {...register("have_job")}
          type="radio"
          value={true}
          defaultChecked
        />
        <label>Empregado</label>
        <input {...register("have_job")} type="radio" value={false} />
        <label>Desempregado</label>

        <input
          {...register("avaliable_job")}
          type="radio"
          value={true}
          defaultChecked
        />
        <label>Disponível</label>
        <input {...register("avaliable_job")} type="radio" value={false} />
        <label>Não Disponível</label>

        <div>
          <input {...register("quarter")} placeholder="Período" />
        </div>

        <div>
          <input {...register("social_medias")} placeholder="Midia Social" />
        </div>

        <div>
          <input {...register("cellPhone")} placeholder="Celular" />
        </div>

        <div>
          <input {...register("softSkills")} placeholder="SoftSkills" />
        </div>

        <div>
          <input {...register("description")} placeholder="Descrição" />
        </div>

        <input
          {...register("is_coach")}
          type="radio"
          value={true}
          defaultChecked
        />
        <label>Sim</label>
        <input {...register("is_coach")} type="radio" value={false} />
        <label>Não</label>

        <div>
          <button type="submit">Enviar </button>
        </div>
      </form>
    </Container>
  );
};

export default CreateProfileDev;
