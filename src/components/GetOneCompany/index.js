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
    console.log(data);
    api
      .get(`/users?name=${data.company}&type=pj`)
      .then((res) => {
        setCompanie(res.data);
        console.log(res);
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
        <button type="submit">Pesquisar</button>
      </form>

      <h1>
        {companie.map((comp, i) => (
          <div key={i}>{comp.name}</div>
        ))}
      </h1>
    </>
  );
};

export default GetOneCompany;
