import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import api from "../../services/api";
import { User } from "../../providers/UserProvider";
import { useEffect } from "react";

import {InputProfile, BtnAtt, Label, DivOption} from '../../stylesGlobal';

const UpProfileDev = () => {
  const { id, loggedUser } = User();

  const [token] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    if (!localToken) {
      return "";
    }
    return JSON.parse(localToken);
  });

  const [nameInput, setNameInput] = useState("");

  const [cityInput, setCityInput] = useState("");

  const [have_jobInput, setHave_jobInput] = useState("");

  const [avaliable_jobInput, setAvaliable_jobInput] = useState("");

  const [quarterInput, setQuarterInput] = useState("");

  const [social_mediasInput, setSocial_mediasInput] = useState("");

  const [cellPhoneInput, setCellPhoneInput] = useState("");

  const [softSkillsInput, setSoftSkillsInput] = useState("");

  const [descriptionInput, setDescriptionInput] = useState("");

  const [is_coachInput, setIs_coachInput] = useState("");

  useEffect(() => {
    setNameInput(loggedUser.name);
    setCityInput(loggedUser.city);
    setHave_jobInput(loggedUser.have_job);
    setAvaliable_jobInput(loggedUser.avaliable_job);
    setQuarterInput(loggedUser.quarter);
    setSocial_mediasInput(loggedUser.social_medias);
    setCellPhoneInput(loggedUser.cellPhone);
    setSoftSkillsInput(loggedUser.softSkills);
    setDescriptionInput(loggedUser.description);
    setIs_coachInput(loggedUser.is_coach);
  }, [
    loggedUser.avaliable_job,
    loggedUser.cellPhone,
    loggedUser.city,
    loggedUser.description,
    loggedUser.have_job,
    loggedUser.is_coach,
    loggedUser.name,
    loggedUser.quarter,
    loggedUser.social_medias,
    loggedUser.softSkills,
  ]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({});

  const handleUpdate = (data) => {
    api
      .patch(
        `/users/${id}`,
        {
          name: nameInput,
          city: cityInput,
          have_job: have_jobInput,
          avaliable_job: avaliable_jobInput,
          quarter: quarterInput,
          social_medias: social_mediasInput,
          cellPhone: cellPhoneInput,
          softSkills: softSkillsInput,
          description: descriptionInput,
          is_coach: is_coachInput,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
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
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
        </div>

        <div>
          <input
            {...register("city")}
            placeholder="Cidade"
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
          />
        </div>

        <div>
          <span>Você possui emprego?</span>
          <input
            {...register("have_job")}
            type="radio"
            value={have_jobInput}
            onChange={() => setHave_jobInput("Empregado")}
            checked={have_jobInput === "Empregado"}
          />
          <label>Empregado</label>
          <input
            {...register("have_job")}
            type="radio"
            value={have_jobInput}
            onChange={() => setHave_jobInput("Desempregado")}
            checked={have_jobInput === "Desempregado"}
          />
          <label>Desempregado</label>
        </div>

        <div>
          <span>Você está disponível para trabalhar?</span>
          <input
            {...register("avaliable_job")}
            type="radio"
            value={avaliable_jobInput}
            onChange={() => setAvaliable_jobInput("Disponivel")}
            checked={avaliable_jobInput === "Disponivel"}
          />
          <label>Disponível</label>
          <input
            {...register("avaliable_job")}
            type="radio"
            value={avaliable_jobInput}
            onChange={() => setAvaliable_jobInput("NaoDisponivel")}
            checked={avaliable_jobInput === "NaoDisponivel"}
          />
          <label>Não Disponível</label>
        </div>

        <div>
          <input
            {...register("quarter")}
            placeholder="Período"
            value={quarterInput}
            onChange={(e) => setQuarterInput(e.target.value)}
          />
        </div>

        <div>
          <input
            {...register("social_medias")}
            placeholder="Redes Sociais"
            value={social_mediasInput}
            onChange={(e) => setSocial_mediasInput(e.target.value)}
          />
        </div>

        <div>
          <input
            {...register("cellPhone")}
            placeholder="Celular"
            value={cellPhoneInput}
            onChange={(e) => cellPhoneInput(e.target.value)}
          />
        </div>

        <div>
          <input
            {...register("softSkills")}
            placeholder="SoftSkills"
            value={softSkillsInput}
            onChange={(e) => setSoftSkillsInput(e.target.value)}
          />
        </div>

        <div>
          <input
            {...register("description")}
            placeholder="Descrição"
            value={descriptionInput}
            onChange={(e) => setDescriptionInput(e.target.value)}
          />
        </div>

        <div>
          <span>Você é coach?</span>
          <input
            {...register("is_coach")}
            type="radio"
            value={is_coachInput}
            onChange={() => setIs_coachInput(true)}
            checked={is_coachInput === true}
          />
          <label>Sou coach</label>
          <input
            {...register("is_coach")}
            type="radio"
            value={is_coachInput}
            onChange={() => setIs_coachInput(false)}
            checked={is_coachInput === false}
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
