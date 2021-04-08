import api from "../../services/api";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { User } from "../../providers/UserProvider";

import { Button, Input } from "../../stylesGlobal";
import { Boxes, Content } from "./style";

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
        console.log(jwt_decode(localStorage.getItem("token")).sub);
        setId(jwt_decode(localStorage.getItem("token")).sub);
        history.push("/users");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const schema = yup.object().shape({
    email: yup.string().required("Required"),
    password: yup.string().required("Field Required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
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
                {...register("email")}
                placeholder="E-mail"
                error={!!errors.email}
              />
              <p style={{ color: "red" }}>{errors.email?.message}</p>
            </div>
            <div>
              <Input
                {...register("password")}
                placeholder="Password"
                error={!!errors.password}
              />
            </div>
            <p style={{ color: "red" }}>{errors.password?.message}</p>
            <Button type="submit">Login </Button>
          </form>
          <a href="www.google.com">Register</a>
        </Content>
      </Boxes>
    </div>
  );
};

export default Login;
