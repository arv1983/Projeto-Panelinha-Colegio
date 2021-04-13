import { useEffect, useState } from "react";
import api from "../../services/api";
import { useForm } from "react-hook-form";

import {DivOption, BtnAtt} from "../../stylesGlobal";

import { InputPesq, DivPesque, DivP, DivB } from './style'

import CardUsers from "../CardUsers";
import { Rotate } from "react-awesome-reveal";
import CardCompany from "../CardCompany/injex";

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
    <div>
      <div style={{textAlign: "center", padding: "10px"}}>
        <h2>Pesquisar uma Empresa:</h2>
      </div>
      <form onSubmit={handleSubmit(getCompany)}>
        <div>
        <DivOption>
          <h3>Status de vaga de emprego:</h3>
          <input {...register("have_vacancies")} type="radio" value={true}  checked={true}/>
          <label>Vagas abertas</label>
          <input {...register("have_vacancies")} type="radio" value={false} />
          <label>Vagas não abertas</label>
        </DivOption>

    <DivPesque>
        <DivP>
          <InputPesq placeholder="Nome da Empresa" {...register("name")}></InputPesq>
        </DivP>
        <DivP>
          <InputPesq {...register("city")} placeholder="Cidade" />
        </DivP> 
        </DivPesque>
        <DivB>
          <BtnAtt type="submit">Pesquisar</BtnAtt>
        </DivB>
        </div>
      </form>
      <div style={{display: "flex", flexWrap: "wrap"}}>

      {companie.map((comp, i) => (
        <div key={i} >
          <Rotate direction="bottom-left" cascade="true">
            <CardCompany  devs={comp}/>
          </Rotate>
          </div>
      ))}
      </div>
      </div>
  );
};

export default GetOneCompany;
