import { useForm } from "react-hook-form";
import { useState } from "react";
import api from "../../services/api";
import { Rotate } from "react-awesome-reveal";
import CardCompany from "../CardCompany/injex";
import {} from "../../stylesGlobal";

import { DivOption, BtnAtt } from "../../stylesGlobal";
import { InputPesq, DivP, DivB, DivPesque } from "./style";
import CardUsers from "../CardUsers";
import { Token } from "../../providers/TokenProvider";
import { useHistory } from "react-router-dom";

const GetOneDev = () => {
  const [devs, setDevs] = useState([]);

  const { token } = Token();

  const history = useHistory();

  if (!token) {
    history.push("/");
  }
  

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({});

  const getDev = (data) => {
    api
      .get(
        `/users?type=pf&${data.name ? "name=" + data.name : ""}&${
          data.have_job ? "have_job=" + data.have_job : ""
        }&${data.avaliable_job ? "avaliable_job=" + data.avaliable_job : ""}&${
          data.quarter ? "quarter=" + data.quarter : ""
        }&${data.softSkills ? "softSkills=" + data.softSkills : ""}&${
          data.is_coach ? "is_coach=" + data.is_coach : ""
        }`
      )
      .then((res) => {
        setDevs(res.data);
        console.log(res.data);
      });

    reset();
  };

  return (
    <>
      <div style={{ textAlign: "center", padding: "10px" }}>
        <h1>Pesquise um Dev</h1>
      </div>
      <form onSubmit={handleSubmit(getDev)}>
        <DivOption>
          <div>
            <h3>O Dev possui emprego?</h3>
            <input
              {...register("have_job")}
              type="radio"
              value="Empregado"
              checked={true}
            />
            <label>Empregado</label>
            <input
              {...register("have_job")}
              type="radio"
              value="Desempregado"
            />
            <label>Desempregado</label>
          </div>

          <div>
            <h3>O Dev está disponível para trabalhar?</h3>
            <input
              {...register("avaliable_job")}
              type="radio"
              value="Disponivel"
              checked={true}
            />
            <label>Disponível</label>
            <input
              {...register("avaliable_job")}
              type="radio"
              value="NaoDisponivel"
            />
            <label>Não Disponível</label>
          </div>
          <div>
            <h3>O Dev é coach?</h3>
            <input
              {...register("is_coach")}
              type="radio"
              value={true}
              checked={true}
            />
            <label>Sou coach</label>
            <input {...register("is_coach")} type="radio" value={false} />
            <label>Não sou coach</label>
          </div>
        </DivOption>
        <DivPesque>
          <DivP>
            <InputPesq {...register("name")} placeholder="Nome do dev" />
          </DivP>

          <DivP>
            <InputPesq {...register("quarter")} placeholder="Período" />
          </DivP>

          <DivP>
            <InputPesq {...register("softSkills")} placeholder="SoftSkills" />
          </DivP>
        </DivPesque>
        <DivB>
          <BtnAtt type="submit">Pesquisar </BtnAtt>
        </DivB>
      </form>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {" "}
        {devs.map((devs, i) => (
          <div key={i}>
            <Rotate direction="bottom-left" cascade="true">
              <CardUsers user={devs} />
            </Rotate>
          </div>
        ))}
      </div>
    </>
  );
};

export default GetOneDev;
