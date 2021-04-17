import { useEffect, useState } from "react";
import api from "../../services/api";
import { useForm } from "react-hook-form";

import { DivOption, BtnAtt } from "../../stylesGlobal";

import { InputPesq, DivPesque, DivP, DivB } from "./style";

import { Rotate } from "react-awesome-reveal";
import CardCompany from "../CardCompany/injex";
// import { Token } from "../../providers/TokenProvider";
// import { useHistory } from "react-router-dom";

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
<<<<<<< HEAD
        `/users?${data.company ? "name=" + data.company : ""}&${
          data.have_vacancies ? "have_vacancies=" + data.have_vacancies : ""
        }&${data.city ? "city=" + data.city : ""}&type=pj`
=======
        `/users?${data.name ? "name=" + data.name : ""}&${
          data.city ? "city=" + data.city : ""
        }&type=pj`
>>>>>>> development
      )

      .then((res) => {
        console.log(res);
        setCompanie(res.data);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <div style={{ textAlign: "center", padding: "10px" }}>
        <h2>Pesquisar uma Empresa:</h2>
      </div>
      <form onSubmit={handleSubmit(getCompany)}>
        <div>
<<<<<<< HEAD
          <DivOption>
            <h3>Status de vaga de emprego:</h3>
            <input
              {...register("have_vacancies")}
              type="radio"
              value={true}
              checked={true}
            />
            <label>Vagas abertas</label>
            <input {...register("have_vacancies")} type="radio" value={false} />
            <label>Vagas não abertas</label>
          </DivOption>

=======
>>>>>>> development
          <DivPesque>
            <DivP>
              <InputPesq
                placeholder="Nome da Empresa"
                {...register("name")}
              ></InputPesq>
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
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {companie.map((comp, i) => (
          <div key={i}>
            <Rotate direction="bottom-left" cascade="true">
              <CardCompany devs={comp} />
            </Rotate>
          </div>
        ))}
      </div>
    </div>
  );
};
<<<<<<< HEAD
 
=======

>>>>>>> development
export default GetOneCompany;
