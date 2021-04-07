import api from "../../services/api";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const Login = () => {
  const handleData = (dados) => {
    console.log(dados);
    axios.post("https://capstone-grupo1.herokuapp.com/login", dados).then(
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
  });
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <form onSubmit={handleSubmit(handleData)}>
        <input
          id="email"
          name="email"
          ref={register}
          placeholder="username"
          defaultValue="teste@teste.com"
        />
        <p style={{ color: "red" }}>{errors.username?.message}</p>
        <input
          name="password"
          type="password"
          ref={register}
          defaultValue="teste"
          placeholder="password"
        />

        <button type="submit">Login </button>
      </form>
    </>
  );
};

export default Login;
