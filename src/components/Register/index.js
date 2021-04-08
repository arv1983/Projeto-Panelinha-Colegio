import api from "../../services/api";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Register = () => {
  const handleData = (dados) => {
    console.log(dados);
    api
      .post("/register", dados)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log("deu merda2");
        console.log(e);
      });
  };

  const schema = yup.object().shape({
    email: yup.string().required("required"),
    password: yup.string().required("required"),
    type: yup.string().required("required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <form onSubmit={handleSubmit(handleData)}>
        <input type="text" placeholder="email" {...register("email")}></input>
        <input
          type="text"
          placeholder="password"
          {...register("password")}
        ></input>
        <select {...register("type")}>
          <option value="pf">Dev</option>
          <option value="pj">Empresa</option>
        </select>
        <button type="submit">cadastro</button>
      </form>
    </>
  );
};

export default Register;
