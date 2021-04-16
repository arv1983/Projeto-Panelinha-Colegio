// import { useForm } from "react-hook-form";
import { useState } from "react";
import api from "../../services/api";
import { Rotate } from "react-awesome-reveal";
import {} from "../../stylesGlobal";
import { DivOption, BtnAtt, DivCheckeBox } from "../../stylesGlobal";
import { InputPesq, DivP, DivB, DivPesque } from "./style";
import CardUsers from "../CardUsers";
import { useForm } from "react-hook-form";
// import { Token } from "../../providers/TokenProvider";
// import { useHistory } from "react-router-dom";
const GetOneDev = () => {
  const [devs, setDevs] = useState([]);
  // const { token } = Token();
  // const history = useHistory();
  // if (!token) {
  //   history.push("/");
  // }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({});

  // const pesquisaDev = (e) => {
  //   e.preventDefault();
  //   api
  //     .get(
  //       `/users?${
  //         e.target.have_job.value === "true"
  //           ? "&have_job=true"
  //           : "&have_job=false"
  //       }${
  //         e.target.avaliable_job.value === "true"
  //           ? "&avaliable_job=true"
  //           : "&avaliable_job=false"
  //       }${
  //         e.target.is_coach.value === "true"
  //           ? "&is_coach=true"
  //           : "&is_coach=false"
  //       }${e.target.q1.checked ? "&quarter=q1" : ""}${
  //         e.target.q2.checked ? "&quarter=q2" : ""
  //       }${e.target.q3.checked ? "&quarter=q3" : ""}${
  //         e.target.q4.checked ? "&quarter=q4" : ""
  //       }${e.target.reactjs.checked ? "&reactjs=true" : ""}${
  //         e.target.reactnative.checked ? "&reactnative=true" : ""
  //       }${e.target.flutter.checked ? "&flutter=true" : ""}${
  //         e.target.python.checked ? "&python=true" : ""
  //       }${e.target.javascript.checked ? "&javascript=true" : ""}${
  //         e.target.sql.checked ? "&sql=true" : ""
  //       }${e.target.typescript.checked ? "&typescript=true" : ""}${
  //         e.target.nodejs.checked ? "&nodejs=true" : ""
  //       }${e.target.dart.checked ? "&dart=true" : ""}${
  //         e.target.ruby_on_rails.checked ? "&ruby_on_rails=true" : ""
  //       }${e.target.objective_c.checked ? "&objective_c=true" : ""}${
  //         e.target.go.checked ? "&go=true" : ""
  //       }${e.target.html5.checked ? "&html5=true" : ""}${
  //         e.target.bootstrap.checked ? "&bootstrap=true" : ""
  //       }${e.target.php.checked ? "&php=true" : ""}${
  //         e.target.nome.value ? "&nome_like=" + e.target.nome.value : ""
  //       }`
  //     )
  //     .then((res) => {
  //       console.log(res);
  //       setDevs(res.data);
  //     });
  // };
  const getDev = (data) => {
    console.log(data);
    const x = data.quarter.join("");
    var y = "";

    api
      .get(
        `/users?type=pf&${data.name ? "name=" + data.name : ""}&${
          data.have_job ? "have_job=" + data.have_job : ""
        }&${data.avaliable_job ? "avaliable_job=" + data.avaliable_job : ""}&${
          data.quarter && y
        }&${data.is_coach ? "is_coach=" + data.is_coach : ""}&${
          data.reactjs ? "reactjs=" + data.reactjs : ""
        }&${data.reactNative ? "reactNative=" + data.reactNative : ""}&${
          data.flutter ? "flutter=" + data.flutter : ""
        }&${data.python ? "python=" + data.python : ""}&${
          data.javascript ? "javascript=" + data.javascript : ""
        }&${data.sql ? "sql=" + data.sql : ""}&${
          data.typescript ? "typescript=" + data.typescript : ""
        }&${data.nodejs ? "nodejs=" + data.nodejs : ""}&${
          data.dart ? "dart=" + data.dart : ""
        }&${data.ruby_on_rails ? "ruby_on_rails=" + data.ruby_on_rails : ""}&${
          data.objetive_c ? "objetive_c=" + data.objetive_c : ""
        }&${data.go ? "go=" + data.go : ""}&${
          data.html5 ? "html5=" + data.html5 : ""
        }&${data.bootstrap ? "bootstrap=" + data.bootstrap : ""}&${
          data.php ? "php=" + data.php : ""
        }`
      )
      .then((res) => {
        setDevs(res.data);
        console.log(res);
      });
  };
  return (
    <>
      <div style={{ textAlign: "center", padding: "10px" }}>
        <h1>Pesquise um Dev</h1>
      </div>
      <form onSubmit={handleSubmit(getDev)}>
        <DivPesque>
          <DivP>
            <InputPesq name="nome" placeholder="Nome do dev" />
          </DivP>
        </DivPesque>
        <DivOption>
          <div>
            <h3>Quer um dev desempregado?</h3>
            <input {...register("have_job")} type="radio" value="true"></input>
            <label>Empregado</label>
            <input {...register("have_job")} type="radio" value="false"></input>
            <label>Desempregado</label>
          </div>
          <div>
            <h3>O Dev está disponível para trabalhar?</h3>
            <input
              {...register("avaliable_job")}
              type="radio"
              value="true"
            ></input>
            <label>Disponível</label>
            <input
              {...register("avaliable_job")}
              type="radio"
              value="false"
            ></input>
            <label>Indisponivel</label>
          </div>
          <div>
            <h3>O Dev é coach?</h3>
            <input {...register("is_coach")} type="radio" value="true" />
            <label>Sou coach</label>
            <input {...register("is_coach")} type="radio" value="false" />
            <label>Não sou coach</label>
          </div>
        </DivOption>
        <h3>Quarter</h3>
        <DivCheckeBox>
          <div>
            <input {...register("quarter")} value="q1" type="checkbox" />
            <label>Q1</label>
          </div>
          <div>
            <input {...register("quarter")} value="q2" type="checkbox" />
            <label>Q2</label>
          </div>
          <div>
            <input {...register("quarter")} value="q3" type="checkbox" />
            <label>Q3</label>
          </div>
          <div>
            <input {...register("quarter")} value="q4" type="checkbox" />
            <label>Q4</label>
          </div>
        </DivCheckeBox>
        <h3>SoftSkills</h3>
        <DivCheckeBox>
          <div>
            <input {...register("reactjs")} type="checkbox"></input>
            <label>Reactjs</label>
          </div>
          <div>
            <input {...register("reactNative")} type="checkbox"></input>
            <label>React Native</label>
          </div>
          <div>
            <input {...register("flutter")} type="checkbox"></input>
            <label>flutter</label>
          </div>
          <div>
            <input {...register("python")} type="checkbox"></input>
            <label>Python</label>
          </div>
          <div>
            <input {...register("javascript")} type="checkbox"></input>
            <label>Javascript</label>
          </div>
          <div>
            <input {...register("sql")} type="checkbox"></input>
            <label>Sql</label>
          </div>
          <div>
            <input {...register("typescript")} type="checkbox"></input>
            <label>Typescript</label>
          </div>
          <div>
            <input {...register("nodejs")} type="checkbox"></input>
            <label>Nodejs</label>
          </div>
          <div>
            <input {...register("dart")} type="checkbox"></input>
            <label>Dart</label>
          </div>
          <div>
            <input {...register("ruby_on_rails")} type="checkbox"></input>
            <label>Ruby on rails</label>
          </div>
          <div>
            <input {...register("objective_c")} type="checkbox"></input>
            <label>Objective C</label>
          </div>
          <div>
            <input {...register("go")} type="checkbox"></input>
            <label>Go</label>
          </div>
          <div>
            <input {...register("html5")} type="checkbox"></input>
            <label>Html5</label>
          </div>
          <div>
            <input {...register("bootstrap")} type="checkbox"></input>
            <label>Bootstrap</label>
          </div>
          <div>
            <input {...register("php")} type="checkbox"></input>
            <label>Php</label>
          </div>
        </DivCheckeBox>
        <DivB>
          <BtnAtt type="submit">Pesquisar </BtnAtt>
        </DivB>
      </form>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {" "}
        {devs.map((devs, i) => (
          <div key={i}>
            <Rotate direction="bottom-left" cascade="true">
              <CardUsers user={devs} />
            </Rotate>
          </div>
        ))}
      </div>
    </>
  );
};
export default GetOneDev;
