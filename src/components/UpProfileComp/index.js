import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services/api";
import { useState } from "react";
import { User } from "../../providers/UserProvider";

import {InputProfile, BtnAtt, Label} from '../../stylesGlobal'

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
      <h1>Empresa</h1>
          <form onSubmit={handleSubmit(handleUpdate)}>
              <div>
                <InputProfile placeholder="Enter your new name here" {...register("name")} />
                {/* <p>{errors.name?.message}</p> */}
              </div>
              <div>
                <InputProfile placeholder="Enter your new city here" {...register("city")} />
              </div>
              <div>
                <InputProfile
                  placeholder="Enter your social medias here"
                  {...register("social_medias")}
                  />
              </div>
              <div>
                <InputProfile
                  placeholder="Enter a descripton here"
                  {...register("description")}
                  />
              </div>
                  <p>Está aceitando vagas?</p>
                  <p>
                  <input type="radio" {...register("vacancies")} value="true"  checked='true'  />
                  <Label>Sim!</Label>
                  <input {...register("vacancies")} type="radio" value="false" />
                  <Label>Não!</Label>            
                  </p>
          <BtnAtt type="submit">Atualizar</BtnAtt>
        </form>
    </div>
  );
};

export default UpProfileComp;
