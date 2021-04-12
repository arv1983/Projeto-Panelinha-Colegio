import { useEffect, useState } from "react";
import api from "../../services/api";
import { useForm } from "react-hook-form";

import {Input,BtnAtt} from "../../stylesGlobal";
import CardUsers from "../CardUsers";
import { Rotate } from "react-awesome-reveal";

const GetOneCompany = () => {
  const [companie, setCompanie] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({});

  const getCompany = (data) => {
    console.log(data.company);
    api
      .get(
        `/users?${data.company ? "name=" + data.company : ""}&${
          data.have_vacancies ? "have_vacancies=" + data.have_vacancies : ""
        }&${data.city ? "city=" + data.city : ""}&type=pj`
      )

      .then((res) => {
        console.log(res);
        setCompanie(res.data);
      })
      .catch((e) => console.log(e));
  };


  return (
    <>
      <h2>Pesquisar uma Empresa pelo(a):</h2>
      <form onSubmit={handleSubmit(getCompany)}>
        <input placeholder="Companhia" {...register("company")}></input>
        <input {...register("have_vacancies")} type="radio" value="true" />
          <label>Há Vagas</label>
          <input {...register("have_vacancies")} type="radio" value="false" />
          <label>Não Há vagas</label>

        <input placeholder="Cidade" {...register("city")}></input>
        <button type="submit">Pesquisar</button>
      </form>
      <div style={{display: "flex", flexWrap: "wrap"}}>

      {companie.map((comp, i) => (
        <div key={i} >
          <Rotate direction="bottom-left" cascade="true">
            <CardUsers user={comp}/>
          </Rotate>
          </div>
      ))}
      </div>
    </>
  );
};

export default GetOneCompany;
