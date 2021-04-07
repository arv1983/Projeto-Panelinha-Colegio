import api from "../../services/api";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { User } from "../../providers/UserProvider";

const Login = () => {
  const { setId } = User();

  const history = useHistory();

  const handleData = (dados) => {
    console.log(dados);
    api
      .post("/login", dados)
      .then((response) => {
        console.log(response);
        localStorage.clear();
        localStorage.setItem(
          "token",
          JSON.stringify(response.data.accessToken)
        );
        setId(jwt_decode(localStorage.getItem("token")).sub);
        history.push("/users");
      })
      .catch((e) => {
        console.log(e);
      });
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
          {...register("email")}
          placeholder="Email"
          error={!!errors.password}
        />
        <p style={{ color: "red" }}>{errors.email?.message}</p>
        <input
          {...register("password")}
          placeholder="Password"
          error={!!errors.password}
        />

        <button type="submit">Login </button>
      </form>
    </>
  );
};

export default Login;
