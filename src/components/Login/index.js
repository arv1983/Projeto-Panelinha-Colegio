import api from "../../services/api";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Login = () => {
  const handleData = (dados) => {
    console.log(dados);
    api.post("/login", dados).then(
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
        <input
          // id="email"
          // name="email"
          {...register("email")}
          placeholder="email"
          defaultValue="teste@teste.com"
        />
        <p style={{ color: "red" }}>{errors.email?.message}</p>
        <input
          // name="password"
          // type="password"
          {...register("password")}
          defaultValue="teste"
          placeholder="password"
        />
        <p style={{ color: "red" }}>{errors.password?.message}</p>

        <button type="submit">Login </button>
      </form>
    </>
  );
};

export default Login;
