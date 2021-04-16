import api from "../../services/api";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { User } from "../../providers/UserProvider";

import { Button, Input } from "../../stylesGlobal";
import { Boxes, Content } from "./style";
import { Token } from "../../providers/TokenProvider";

const Login = ({ notifyLog }) => {
  const { setId, loggedUser, userCountClick, setUserCountClick } = User();

  const { token, setToken } = Token();

  const history = useHistory();

  const handleData = (dados) => {
    api
      .post("/login", dados)
      .then(
        (response) =>
          notifyLog() &&
          setTimeout(() => {
            console.log("entrei aqui");
            localStorage.clear();
            localStorage.setItem(
              "token",
              JSON.stringify(response.data.accessToken)
            );
            setToken(JSON.parse(localStorage.getItem("token")));
            setId(jwt_decode(localStorage.getItem("token")).sub);
            if (loggedUser.type === "pf") {
              history.push("/users/dev");
            } else {
              history.push("/users/comp");
            }
          }, 3000)
      )
      .catch(() => {
        setError("password", { message: "Conta não existente" });
      });
  };

  const schema = yup.object().shape({
    email: yup.string().required("Campo requerido"),
    password: yup.string().required("Field Required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div>
      <Boxes>
        <span></span>
        <Content>
          <form onSubmit={handleSubmit(handleData)}>
            <div>
              <Input
                className="email"
                {...register("email")}
                placeholder="E-mail"
                error={!!errors.email}
              />
              <p style={{ color: "red" }}>{errors.email?.message}</p>
            </div>
            <div>
              <Input
                className="password"
                {...register("password")}
                placeholder="Password"
                error={!!errors.password}
              />
            </div>
            <p style={{ color: "red" }}>{errors.password?.message}</p>
            <Button type="submit">Login </Button>
          </form>
        </Content>
      </Boxes>
    </div>
  );
};

export default Login;
