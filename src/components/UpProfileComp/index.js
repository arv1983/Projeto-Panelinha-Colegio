import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services/api";
import { useState } from "react";
import { User } from "../../providers/UserProvider";
import { useEffect } from "react";

import { InputProfile, BtnAtt, DivOption } from "../../stylesGlobal";
import { Token } from "../../providers/TokenProvider";
import { useHistory } from "react-router-dom";

const UpProfileComp = () => {
  const { id, loggedUser } = User();

  const { token } = Token();

  const history = useHistory();
  if (loggedUser.type === "pf") {
    history.push("/home");
  }

  const [nameInput, setNameInput] = useState("");

  const [cityInput, setCityInput] = useState("");

  const [have_vacanciesInput, setHave_vacanciesInput] = useState("");

  const [social_mediasInput, setSocial_mediasInput] = useState("");

  const [descriptionInput, setDescriptionInput] = useState("");

  useEffect(() => {
    setNameInput(loggedUser.name);
    setCityInput(loggedUser.city);
    setHave_vacanciesInput(loggedUser.have_vacancies);
    setSocial_mediasInput(loggedUser.social_medias);
    setDescriptionInput(loggedUser.description);
  }, [
    loggedUser.city,
    loggedUser.description,
    loggedUser.have_vacancies,
    loggedUser.name,
    loggedUser.social_medias,
  ]);

  const { register, handleSubmit } = useForm({});

  const handleUpdate = (e) => {
    api
      .patch(
        `/users/${id}`,
        {
          name: nameInput,
          city: cityInput,
          have_vacancies: false,
          social_medias: social_mediasInput,
          description: descriptionInput,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <h2>Atualizar perfil da Empresa</h2>

      <form onSubmit={handleSubmit(handleUpdate)}>
        <div>
          <InputProfile
            placeholder="Nome"
            {...register("name")}
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
        </div>

        <div>
          <InputProfile
            placeholder="Cidade"
            {...register("city")}
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
          />
        </div>

        <div>
          <InputProfile
            placeholder="Redes Sociais"
            {...register("social_medias")}
            value={social_mediasInput}
            onChange={(e) => setSocial_mediasInput(e.target.value)}
          />
        </div>

        <div>
          <InputProfile
            placeholder="Descrição"
            {...register("description")}
            value={descriptionInput}
            onChange={(e) => setDescriptionInput(e.target.value)}
          />
        </div>

        <DivOption>
          <p>Está aceitando vagas?</p>
          <input
            type="radio"
            {...register("have_vacancies")}
            value={have_vacanciesInput}
            onChange={() => setHave_vacanciesInput(true)}
            checked={have_vacanciesInput === true}
          />
          <label>Sim!</label>
          <input
            {...register("have_vacancies")}
            type="radio"
            value={have_vacanciesInput}
            onChange={() => setHave_vacanciesInput(false)}
            checked={have_vacanciesInput === false}
          />
          <label>Não!</label>
        </DivOption>

        <BtnAtt type="submit">Atualizar</BtnAtt>
      </form>
    </div>
  );
};

export default UpProfileComp;
