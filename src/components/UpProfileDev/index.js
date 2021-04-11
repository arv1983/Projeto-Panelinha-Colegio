import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Container } from "./styles";
import api from "../../services/api";
import { User } from "../../providers/UserProvider";

const UpProfileDev = () => {
  const { id, loggedUser } = User();

  const [checked, setChecked] = useState(false);

  const [token] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    if (!localToken) {
      return "";
    }
    return JSON.parse(localToken);
  });

  // const schema = yup.object().shape({
  //   city: yup.string().max(20),
  //   have_job: yup.boolean("The value must be boolean").nullable(),
  //   avaliable_job: yup.boolean("The value must be boolean").nullable(),
  //   quarter: yup.string().max(1),
  //   social_medias: yup.string().max(25),
  //   cellPhone: yup.string().max(12),
  //   softSkills: yup.string(),
  //   description: yup.string().max(400),
  //   is_coach: yup.boolean("The value must be boolean").nullable(),
  // });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    // resolver: yupResolver(schema),
  });

  // const handleCount = () => {
  //   setUserCountClick(userCountClick + 1);
  // };

  const handleUpdate = (data) => {
    // if (data.name === "") {
    //   data.name = loggedUser.name;
    // }
    // if (data.city === "") {
    //   data.city = loggedUser.city;
    // }
    // if (data.have_job === null) {
    //   data.have_job = loggedUser.have_job;
    // }
    // if (data.avaliable_job === null) {
    // }
    // if (data.quarter === "") {
    //   data.quarter = loggedUser.quarter;
    // }
    // if (data.social_medias === "") {
    //   data.social_medias = loggedUser.social_medias;
    // }
    // if (data.cellPhone === "") {
    //   data.cellPhone = loggedUser.cellPhone;
    // }
    // if (data.softSkills === "") {
    //   data.softSkills = loggedUser.softSkills;
    // }
    // if (data.description === "") {
    //   data.description = loggedUser.description;
    // }

    loggedUser?.have_job === "Empregado" && setChecked(checked);

    api
      .patch(`/users/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("Patch", res.data);
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <h2>Atualizar Perfil Dev</h2>
      <form onSubmit={handleSubmit(handleUpdate)}>
        <div>
          <input
            {...register("name")}
            placeholder="Nome"
            value={loggedUser?.name}
          />
        </div>

        <div>
          <input
            {...register("city")}
            placeholder="Cidade"
            defaultValue={loggedUser?.city}
          />
        </div>

        <div>
          <span>Você possui emprego?</span>
          <input
            {...register("have_job")}
            type="radio"
            value="Empregado"
            checked={checked}
          />
          <label>Empregado</label>
          <input
            {...register("have_job")}
            type="radio"
            value="Desempregado"
            defaultChecked={loggedUser?.have_job === "Desempregado" && true}
          />
          <label>Desempregado</label>
        </div>

        <div>
          <span>Você está disponível para trabalhar?</span>
          <input
            {...register("avaliable_job")}
            type="radio"
            value="Disponivel"
            defaultChecked={loggedUser?.avaliable_job === "Disponivel"}
          />
          <label>Disponível</label>
          <input
            {...register("avaliable_job")}
            type="radio"
            value="NaoDisponivel"
            defaultChecked={loggedUser?.avaliable_job === "NaoDisponivel"}
          />
          <label>Não Disponível</label>
        </div>

        <div>
          <input
            {...register("quarter")}
            placeholder="Período"
            defaultValue={loggedUser?.quarter}
          />
        </div>

        <div>
          <input
            {...register("social_medias")}
            placeholder="Redes Sociais"
            defaultValue={loggedUser?.social_medias}
          />
        </div>

        <div>
          <input
            {...register("cellPhone")}
            placeholder="Celular"
            defaultValue={loggedUser?.cellPhone}
          />
        </div>

        <div>
          <input
            {...register("softSkills")}
            placeholder="SoftSkills"
            defaultValue={loggedUser?.softSkills}
          />
        </div>

        <div>
          <input
            {...register("description")}
            placeholder="Descrição"
            defaultValue={loggedUser?.description}
          />
        </div>

        <div>
          <span>Você é coach?</span>
          <input
            {...register("is_coach")}
            type="radio"
            value="true"
            defaultChecked={loggedUser?.is_coach === "true"}
          />
          <label>Sou coach</label>
          <input
            {...register("is_coach")}
            type="radio"
            value="false"
            defaultChecked={loggedUser?.is_coach === "false"}
          />

          <label>Não sou coach</label>
        </div>

        <div>
          <button type="submit">Atualizar</button>
        </div>
      </form>
    </>
  );
};

export default UpProfileDev;
