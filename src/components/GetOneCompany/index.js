import { InsertEmoticon } from "@material-ui/icons";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { useForm } from "react-hook-form";

const GetOneCompany = () => {
  const [companie, setCompanie] = useState([]);

  const [countClick, setCountClick] = useState(0);

  const [name, setName] = useState("");

  const [data_Name, setData_Name] = useState("");

  const [city, setCity] = useState("");

  const [data_city, setData_City] = useState("");

  const [have_vacancies, setHave_vacancies] = useState("");

  const [data_haveVacancies, setData_haveVacancies] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({});

  const getCompany = (data) => {
    if (data.name === "") {
      setName("");
    } else {
      setName("name=");
    }
    if (data.have_vacancies === null) {
      setHave_vacancies("");
      data.have_vacancies = "";
    } else {
      setHave_vacancies("&have_vacancies=");
    }
    if (data.city === "") {
      setCity("");
    } else {
      setCity("&city=");
    }

    setCountClick(countClick + 1);

    setData_Name(data.name);
    setData_haveVacancies(data.have_vacancies);
    setData_City(data.city);

    reset();
  };

  useEffect(() => {
    async function x() {
      const res = await api.get(
        `/users?${name}${data_Name}${city}${data_city}${have_vacancies}${data_haveVacancies}&type=pj`
      );
      if (countClick > 0) {
        setCompanie(res.data);
      }
    }
    x();
  }, [
    city,
    companie,
    data_Name,
    data_city,
    data_haveVacancies,
    have_vacancies,
    name,
  ]);

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
      {countClick > 0 &&
        companie.map((comp, i) => <div key={i}>{comp.name}</div>)}
    </>
  );
};

export default GetOneCompany;
