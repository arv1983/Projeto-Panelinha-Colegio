import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import api from "../../services/api";
import { User } from "../../providers/UserProvider";

import {InputProfile, BtnAtt, Label, DivOption} from '../../stylesGlobal';

const UpProfileDev = () => {
  const { id } = User();

  const [token] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    if (!localToken) {
      return "";
    }
    return JSON.parse(localToken);
  });

  const schema = yup.object().shape({
    name: yup.string().max(40).required(),
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
    reset,
  } = useForm({
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
    <>
      <div>
        <form onSubmit={handleSubmit(handleUpdate)}>
          <div>
            <InputProfile {...register("name")} placeholder="Nome" />
          </div>

          <div>
            <InputProfile {...register("city")} placeholder="Cidade" />
          </div>
          
          <div>
            <InputProfile {...register("quarter")} placeholder="Período" />
          </div>

          <div>
            <InputProfile {...register("social_medias")} placeholder="Midia Social" />
          </div>

          <div>
            <InputProfile {...register("cellPhone")} placeholder="Celular" />
          </div>

          <div>
            <InputProfile {...register("softSkills")} placeholder="SoftSkills" />
          </div>

          <div>
            <InputProfile {...register("description")} placeholder="Descrição" />
          </div>
<DivOption>

          <div>
            <p><h4>Você é coach? </h4></p>
            <p>
              <input {...register("is_coach")} type="radio" value="false" />
              <Label>Sou coach</Label>
              <input {...register("is_coach")} type="radio" value="true"  checked='true'  />
              <Label>Não sou coach</Label>
            </p>
          </div>

          <div>
            <p><h4>Você possui emprego? </h4></p>
            <p>
              <input {...register("have_job")} type="radio" value="true"/>
              <Label>Empregado</Label>
              <input {...register("have_job")} type="radio" value="false"  checked='true'  />
              <Label>Desempregado</Label>
            </p>
          </div>

          <div>
            <p><h4>Você está disponível para trabalhar?</h4></p>
            <p>
              <input {...register("avaliable_job")} type="radio" value="true"   checked='true' />
              <Label>Disponível</Label>
              <input {...register("avaliable_job")} type="radio" value="false" />
              <Label>Não Disponível</Label>
            </p>
          </div>
</DivOption>

          <div>
            <BtnAtt type="submit">Enviar </BtnAtt>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpProfileDev;
