import api from "../../services/api";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Register = () => {
  const handleData = (dados) => {
    console.log(dados);
    api.post("/register", dados).then(
      (response) => {
        console.log(response);

        localStorage.clear();
        // armazenar token
        if (response.request.status === 200) {
          localStorage.setItem("token", JSON.stringify(response.data.access));
          //    history.push('/home ou sei la')
        } else {
          console.log("deu merda");
        }
      },
      (e) => {
        console.log("deu merda2");
        console.log(e);
      }
    );
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
        <input type="text" name="email" {...register("email")}></input>
        <input type="text" name="password" {...register("password")}></input>
        <select name="type" {...register("type")}>
          <option value="pf">Dev</option>
          <option value="pj">Empresa</option>
        </select>
        <button type="submit">cadastro</button>
      </form>
    </>
  );
};

export default Register;
