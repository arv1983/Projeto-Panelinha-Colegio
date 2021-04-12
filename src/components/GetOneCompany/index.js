import { useEffect, useState } from "react";
import api from "../../services/api";
import { useForm } from "react-hook-form";

import { Input, BtnAtt } from "../../stylesGlobal";

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
          <input placeholder="Nome da Empresa" {...register("name")}></input>
        </div>
        <div>
          <span>Status de vaga de emprego:</span>
          <input {...register("have_vacancies")} type="radio" value={true} />
          <label>Vagas abertas</label>
          <input {...register("have_vacancies")} type="radio" value={false} />
          <label>Vagas não abertas</label>
        </div>
        <div>
          <input {...register("city")} placeholder="Cidade" />
        </div>
        <div>
          <button type="submit">Pesquisar</button>
        </div>
      </form>
      {companie.map((comp, i) => (
        <div key={i}>{comp.name}</div>
      ))}
    </>
  );
};

export default GetOneCompany;
