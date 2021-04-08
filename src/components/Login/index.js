import api from "../../services/api";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, Input } from '../../stylesGlobal';
import { Boxes, Content} from './style'


const Login = () => {
  const handleData = (dados) => {
    api.post("/login", dados).then(
      (response) => {
        localStorage.clear();
        
        if (response.request.status === 200) {
          localStorage.setItem("token", JSON.stringify(response.data.access));
        }
      },
      (e) => {
        //tratar o erro depois
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
    <div>
      <Boxes>
        <span></span>
        <Content>
          <form onSubmit={handleSubmit(handleData)}>
          <div>
            <Input
              {...register("email")}
              placeholder="username"
              />
            <p style={{ color: "red" }}>{errors.username?.message}</p>
          </div>
          <div>
            <Input
              {...register("password")}
              placeholder="password"
              />
            </div>
            <Button type="submit">Login </Button>
          </form>
          <a href="www.google.com">Register</a>
        </Content>
      </Boxes>
    </div>
  );
};

export default Login;
