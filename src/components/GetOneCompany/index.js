import { InsertEmoticon } from "@material-ui/icons";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { useForm } from "react-hook-form";

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

      {companie.map((comp, i) => (
        <div key={i}>
          <h1>{comp.name}</h1>
          <h2>{comp.have_vacancies}</h2>
        </div>
      ))}
    </>
  );
};

export default GetOneCompany;
