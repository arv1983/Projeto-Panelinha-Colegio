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
  } = useForm({
  });

  const getCompany = (data) => {
    api
      .get(`/users?type=pj&${data.company?'name='+data.company:""}&
      ${data.have_vacancies?'have_vacancies='+data.have_vacancies:""}`)

      .then((res) => {
        
        setCompanie(res.data)
       
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <form onSubmit={handleSubmit(getCompany)}>
        <input
          name="company"
          placeholder="Company"
          {...register("company")}
        ></input>
          <input
          name="City"
          placeholder="City"
          {...register("have_vacancies")}
        ></input>
        <button type="submit">Pesquisar</button>
      </form>

      
        {companie.map((comp, i) => (
          <>
          <h1 key={i}>{comp.name}</h1>
          <h2 key={i}>{comp.have_vacancies}</h2>
          </>
        ))}
      
   </>
  );
};

export default GetOneCompany;
