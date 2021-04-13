import { useEffect, useState } from "react";
import api from "../../services/api";
import { useForm } from "react-hook-form";

import {InputProfile,DivOption} from "../../stylesGlobal";
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
    api
      .get(
        `/users?type=pj&${data.name ? "name=" + data.name : ""}&${
          data.have_vacancies ? "have_vacancies=" + data.have_vacancies : ""
        }&${data.city ? "city" + data.city : ""}`
      )
      .then((res) => {
        setCompanie(res.data);
        console.log(res.data);
      });

    reset();
  };

  return (
    <>
      <h2>Pesquisar uma Empresa pelo(a):</h2>
      <form onSubmit={handleSubmit(getCompany)}>
        <div>
          <InputProfile placeholder="Nome da Empresa" {...register("name")}></InputProfile>
        </div>
        <DivOption>
          <p>Status de vaga de emprego:</p>
          <input {...register("have_vacancies")} type="radio" value={true} />
          <label>Vagas abertas</label>
          <input {...register("have_vacancies")} type="radio" value={false} />
          <label>Vagas não abertas</label>
        </DivOption>
        <div>
          <InputProfile {...register("city")} placeholder="Cidade" />
        </div>
        <div>
          <button type="submit">Pesquisar</button>
        </div>
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
