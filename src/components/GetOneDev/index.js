// import { useForm } from "react-hook-form";
import { useState } from "react";
import api from "../../services/api";
import { Rotate } from "react-awesome-reveal";
import {} from "../../stylesGlobal";
import { DivOption, BtnAtt, DivCheckeBox } from "../../stylesGlobal";
import { InputPesq, DivP, DivB, DivPesque } from "./style";
import CardUsers from "../CardUsers";
// import { Token } from "../../providers/TokenProvider";
// import { useHistory } from "react-router-dom";
const GetOneDev = () => {
  const [devs, setDevs] = useState([]);
  // const { token } = Token();
  // const history = useHistory();
  // if (!token) {
  //   history.push("/");
  // }
  const pesquisaDev = (e) => {
    e.preventDefault();
    api
      .get(
        `/users?${
          e.target.have_job.value === "true"
            ? "&have_job=true"
            : "&have_job=false"
        }${
          e.target.avaliable_job.value === "true"
            ? "&avaliable_job=true"
            : "&avaliable_job=false"
        }${
          e.target.is_coach.value === "true"
            ? "&is_coach=true"
            : "&is_coach=false"
        }${e.target.q1.checked ? "&quarter=q1" : ""}${
          e.target.q2.checked ? "&quarter=q2" : ""
        }${e.target.q3.checked ? "&quarter=q3" : ""}${
          e.target.q4.checked ? "&quarter=q4" : ""
        }${e.target.reactjs.checked ? "&reactjs=true" : ""}${
          e.target.reactnative.checked ? "&reactnative=true" : ""
        }${e.target.flutter.checked ? "&flutter=true" : ""}${
          e.target.python.checked ? "&python=true" : ""
        }${e.target.javascript.checked ? "&javascript=true" : ""}${
          e.target.sql.checked ? "&sql=true" : ""
        }${e.target.typescript.checked ? "&typescript=true" : ""}${
          e.target.nodejs.checked ? "&nodejs=true" : ""
        }${e.target.dart.checked ? "&dart=true" : ""}${
          e.target.ruby_on_rails.checked ? "&ruby_on_rails=true" : ""
        }${e.target.objective_c.checked ? "&objective_c=true" : ""}${
          e.target.go.checked ? "&go=true" : ""
        }${e.target.html5.checked ? "&html5=true" : ""}${
          e.target.bootstrap.checked ? "&bootstrap=true" : ""
        }${e.target.php.checked ? "&php=true" : ""}${
          e.target.nome.value ? "&nome_like=" + e.target.nome.value : ""
        }`
      )
      .then((res) => {
        console.log(res);
        setDevs(res.data);
      });
  };
  const getDev = (data) => {
    api
      .get(
        `/users?type=pf&${data.name ? "name=" + data.name : ""}&${
          data.have_job ? "have_job=" + data.have_job : ""
        }&${data.avaliable_job ? "avaliable_job=" + data.avaliable_job : ""}&${
          data.quarter ? "quarter=" + data.quarter : ""
        }&${data.softSkills ? "softSkills=" + data.softSkills : ""}&${
          data.is_coach ? "is_coach=" + data.is_coach : ""
        }`
      )
      .then((res) => {
        setDevs(res.data);
        console.log(res.data);
      });
  };
  return (
    <>
      <div style={{ textAlign: "center", padding: "10px" }}>
        <h1>Pesquise um Dev</h1>
      </div>
      <form onSubmit={(e) => pesquisaDev(e)}>
      <DivPesque>
          <DivP>
            <InputPesq name="nome" placeholder="Nome do dev" />
          </DivP>
        </DivPesque>
        <DivOption>
          <div>
            <h3>Quer um dev desempregado?</h3>
            <input type="radio" name="have_job" value="true"></input>
            <label>Empregado</label>
            <input type="radio" name="have_job" value="false"></input>
            <label>Desempregado</label>
          </div>
          <div>
            <h3>O Dev está disponível para trabalhar?</h3>
            <input type="radio" name="avaliable_job" value="true"></input>
            <label>Disponível</label>
            <input type="radio" name="avaliable_job" value="false"></input>
            <label>Indisponivel</label>
          </div>
          <div>
            <h3>O Dev é coach?</h3>
            <input type="radio" name="is_coach" value="true" />
            <label>Sou coach</label>
            <input type="radio" name="is_coach" value="false" />
            <label>Não sou coach</label>
          </div>
          </DivOption>
            <h3>Quarter</h3>
          <DivCheckeBox>
            <div>
              <input type="checkbox" name="q1"/>
              <label>Q1</label>
            </div>
            <div>
              <input type="checkbox" name="q2"/>
              <label>Q2</label>
            </div>
            <div>
              <input type="checkbox" name="q3"/>
              <label>Q3</label>
            </div>
            <div>
              <input type="checkbox" name="q4"/>
              <label>Q4</label>
            </div>
          </DivCheckeBox>
            <h3>SoftSkills</h3>
          <DivCheckeBox>
            <div>
              <input type="checkbox" name="reactjs"></input>
              <label>Reactjs</label>
            </div>
            <div>
              <input type="checkbox" name="reactnative"></input>
              <label>React Native</label>
            </div>
            <div>
              <input type="checkbox" name="flutter"></input>
              <label>flutter</label> 
            </div>
            <div>
              <input type="checkbox" name="python"></input>
              <label>Python</label>
            </div>
            <div>
              <input type="checkbox" name="javascript"></input>
              <label>Javascript</label>
            </div>
            <div>
              <input type="checkbox" name="sql"></input>
             <label>Sql</label>
            </div>
            <div>
              <input type="checkbox" name="typescript"></input>
              <label>Typescript</label>
            </div>
            <div>
              <input type="checkbox" name="nodejs"></input>
              <label>Nodejs</label>
            </div>
            <div>
              <input type="checkbox" name="dart"></input>
              <label>Dart</label>
            </div>
            <div>
              <input type="checkbox" name="ruby_on_rails"></input>
              <label>Ruby on rails</label>
            </div>
            <div>
              <input type="checkbox" name="objective_c"></input>
              <label>Objective C</label>
            </div>
            <div>
              <input type="checkbox" name="go"></input>
              <label>Go</label>
            </div>
            <div>
              <input type="checkbox" name="html5"></input>
              <label>Html5</label>
            </div>
            <div>
              <input type="checkbox" name="bootstrap"></input>
              <label>Bootstrap</label>
            </div>
            <div>
              <input type="checkbox" name="php"></input>
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