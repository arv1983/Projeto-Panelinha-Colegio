import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import api from "../../services/api";

const GetOneDev = () => {
  const [devs, setDevs] = useState([]);

  const [countClick, setCountClick] = useState(0);

  const [name, setName] = useState("");

  const [data_Name, setData_Name] = useState("");

  const [have_job, setHave_job] = useState("");

  const [data_Have_job, setData_Have_job] = useState("");

  const [quarter, setQuarter] = useState("");

  const [data_Quarter, setData_Quarter] = useState("");

  const [softSkills, setSoftSkills] = useState("");

  const [data_SoftSkills, setData_SoftSkills] = useState("");

  const [is_coach, setIs_coach] = useState("");

  const [data_Is_coach, setData_Is_coach] = useState("");

  const [avaliable_job, setAvaliable_job] = useState("");

  const [data_Avaliable_job, setData_Avaliable_job] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({});

  const getDev = (data) => {
    if (data.name === "") {
      setName("");
    } else {
      setName("name=");
    }
    if (data.have_job === null) {
      setHave_job("");
      data.have_job = "";
    } else {
      setHave_job("&have_job=");
    }
    if (data.avaliable_job === null) {
      setAvaliable_job("");
      data.avaliable_job = "";
    } else {
      setAvaliable_job("&avaliable_job=");
    }
    if (data.quarter === "") {
      setQuarter("");
    } else {
      setQuarter("&quarter=");
    }
    if (data.softSkills === "") {
      setSoftSkills("");
    } else {
      setSoftSkills("&softSkills=");
    }
    if (data.is_coach === null) {
      setIs_coach("");
      data.is_coach = "";
    } else {
      setIs_coach("&is_coach=");
    }

    setCountClick(countClick + 1);

    setData_Name(data.name);
    setData_Have_job(data.have_job);
    setData_Avaliable_job(data.avaliable_job);
    setData_Quarter(data.quarter);
    setData_SoftSkills(data.softSkills);
    setData_Is_coach(data.is_coach);

    reset();
  };

  useEffect(() => {
    async function x() {
      const res = await api.get(
        `/users?${name}${data_Name}${have_job}${data_Have_job}${quarter}${data_Quarter}${softSkills}${data_SoftSkills}${is_coach}${data_Is_coach}${avaliable_job}${data_Avaliable_job}&type=pf`
      );
      if (countClick > 0) {
        setDevs(res.data);
      }
    }
    x();
  }, [
    name,
    avaliable_job,
    data_Avaliable_job,
    data_Have_job,
    data_Is_coach,
    data_Name,
    data_Quarter,
    data_SoftSkills,
    have_job,
    is_coach,
    quarter,
    softSkills,
  ]);

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
      {countClick > 0 && devs.map((d, i) => <div key={i}>{d.name}</div>)}
    </>
  );
};

export default GetOneDev;
