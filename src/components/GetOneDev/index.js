import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import api from "../../services/api";

const GetOneDev = () => {
  const [devs, setDevs] = useState([]);

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
      <h2>Pesquise um Dev</h2>
      <form onSubmit={handleSubmit(getDev)}>
        <div>
          <input {...register("name")} placeholder="Nome do dev" />
        </div>

        <div>
          <span>O Dev possui emprego?</span>
          <input {...register("have_job")} type="radio" value="Empregado" />
          <label>Empregado</label>
          <input {...register("have_job")} type="radio" value="Desempregado" />
          <label>Desempregado</label>
        </div>

        <div>
          <span>O Dev está disponível para trabalhar?</span>
          <input
            {...register("avaliable_job")}
            type="radio"
            value="Disponivel"
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
          <input {...register("quarter")} placeholder="Período" />
        </div>

        <div>
          <input {...register("softSkills")} placeholder="SoftSkills" />
        </div>

        <div>
          <span>O Dev é coach?</span>
          <input {...register("is_coach")} type="radio" value={true} />
          <label>Sou coach</label>
          <input {...register("is_coach")} type="radio" value={false} />
          <label>Não sou coach</label>
        </div>

        <div>
          <button type="submit">Pesquisar </button>
        </div>
      </form>
      {devs.map((d, i) => (
        <div key={i}>{d.name}</div>
      ))}
    </>
  );
};

export default GetOneDev;
