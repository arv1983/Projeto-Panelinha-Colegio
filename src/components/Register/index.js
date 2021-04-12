import api from "../../services/api";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input, Seletor } from "../../stylesGlobal";
import { Boxes, Content } from "./styled";

const Register = () => {
  const handleData = (dados) => {
    console.log(dados);

    if (dados.type === "pf") {
      api
        .post("/register", {
          name: dados.name,
          password: dados.password,
          email: dados.email,
          type: dados.type,
          city: "",
          have_job: "",
          avaliable_job: "",
          quarter: "",
          social_medias: "",
          cellPhone: "",
          softSkills: "",
          description: "",
          is_coach: "",
        })
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    } else if (dados.type === "pj") {
      api
        .post("/register", {
          name: dados.name,
          password: dados.password,
          email: dados.email,
          type: dados.type,
          city: "",
          social_medias: "",
          description: "",
          have_vacancies: "",
          vacancies: "",
        })
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  const schema = yup.object().shape({
    name: yup.string().required("Field Required"),
    email: yup.string().required("Field Required"),
    password: yup.string().required("Field Required"),
    type: yup.string().required("Field Required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Boxes>
      <span></span>
      <Content>
        <form onSubmit={handleSubmit(handleData)}>
          <div>
            <Input type="text" placeholder="Name" {...register("name")} />
            <p style={{ color: "red" }}>{errors.name?.message}</p>
          </div>
          <div>
            <Input type="text" placeholder="E-mail" {...register("email")} />
            <p style={{ color: "red" }}>{errors.email?.message}</p>
          </div>
          <div>
            <Input
              type="text"
              placeholder="Password"
              {...register("password")}
            />
            <p style={{ color: "red" }}>{errors.password?.message}</p>
          </div>
          <div>
            <label>Tipo de Pessoa</label>
            <Seletor {...register("type")}>
              <option value="pf">Dev</option>
              <option value="pj">Empresa</option>
            </Seletor>
          </div>
          <Button type="submit">cadastro</Button>
        </form>
      </Content>
    </Boxes>
  );
};

export default Register;
