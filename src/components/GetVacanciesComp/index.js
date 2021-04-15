// import { Checkbox } from "@material-ui/core";
import { useEffect, useState } from "react";
import { User } from "../../providers/UserProvider";
import api from "../../services/api";
// import JoinVancacie from "../JoinVacancie";
import { Vac } from "../../providers/VacancieProvider";

const GetVacanciesComp = () => {
  const { id } = User();
  const [token] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    if (!localToken) {
      return "";
    }
    return JSON.parse(localToken);
  });
  const [vacancies, setVacancies] = useState([]);
  const [users, setUsers] = useState([]);
  const { vacCountClick, setVacCountClick } = Vac();
  // meu codigo

  const handleData = (e) => {
    setVacancies([]);
    e.preventDefault();
    api
      .get(
        `/vacancies?${
          e.target.busca.value ? "&nome_like=" + e.target.busca.value : ""
        }${
          e.target.descr.value ? "&descricao_like=" + e.target.descr.value : ""
        }${e.target.presencial.checked ? "&presencial=true" : ""}${
          e.target.reactjs.checked ? "&reactjs=true" : ""
        }${e.target.reactnative.checked ? "&reactnative=true" : ""}${
          e.target.flutter.checked ? "&flutter=true" : ""
        }${e.target.python.checked ? "&python=true" : ""}${
          e.target.javascript.checked ? "&javascript=true" : ""
        }${e.target.sql.checked ? "&sql=true" : ""}${
          e.target.typescript.checked ? "&typescript=true" : ""
        }${e.target.nodejs.checked ? "&nodejs=true" : ""}${
          e.target.dart.checked ? "&dart=true" : ""
        }${e.target.ruby_on_rails.checked ? "&ruby_on_rails=true" : ""}${
          e.target.objective_c.checked ? "&objective_c=true" : ""
        }${e.target.go.checked ? "&go=true" : ""}${
          e.target.html5.checked ? "&html5=true" : ""
        }${e.target.bootstrap.checked ? "&bootstrap=true" : ""}${
          e.target.php.checked ? "&php=true" : ""
        }`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);

        setVacancies(res.data);
      })
      .catch((e) => console.log(e));
  };

  // fim meu codigo
  const subscribe = (vac_id, array_de_vagas) => {
    array_de_vagas?.push(id);
    api
      .patch(
        `/vacancies/${vac_id}`,
        { cad: array_de_vagas },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => setVacCountClick(vacCountClick + 1))
      .catch((e) => console.log(e));
  };

  const unSubscribe = (vac_id, array) => {
    array?.splice(array.indexOf(id), 1);
    api
      .patch(
        `/vacancies/${vac_id}`,
        { cad: array },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => setVacCountClick(vacCountClick + 1))
      .catch((e) => console.log(e));
  };

  return (
    <>
      <form onSubmit={(e) => handleData(e)}>
        nome da vaga
        <input name="busca" type="text"></input>
        descricao da vaga
        <input name="descr" type="text"></input>
        presencial
        <input type="checkbox" name="presencial"></input>
        reactjs
        <input type="checkbox" name="reactjs"></input>
        reactnative
        <input type="checkbox" name="reactnative"></input>
        flutter
        <input type="checkbox" name="flutter"></input>
        python
        <input type="checkbox" name="python"></input>
        javascript
        <input type="checkbox" name="javascript"></input>
        sql
        <input type="checkbox" name="sql"></input>
        typescript
        <input type="checkbox" name="typescript"></input>
        nodejs
        <input type="checkbox" name="nodejs"></input>
        dart
        <input type="checkbox" name="dart"></input>
        ruby_on_rails
        <input type="checkbox" name="ruby_on_rails"></input>
        objective_c
        <input type="checkbox" name="objective_c"></input>
        go
        <input type="checkbox" name="go"></input>
        html5
        <input type="checkbox" name="html5"></input>
        bootstrap
        <input type="checkbox" name="bootstrap"></input>
        php
        <input type="checkbox" name="php"></input>
        <button type="submit">procurar</button>
      </form>

      <div>
        
        {vacancies &&
        vacancies.map((vac) => {
          return (
            <>
              <h1>nome vaga: {vac.nome}</h1>
              <h2>id vaga:{vac.id}</h2>
              <button onClick={() => subscribe(vac.id, vac.cad)}>
                Candidatar
              </button>
              <button onClick={() => unSubscribe(vac.id, vac.cad)}>
                Descadastra
              </button>
            </>
          );
        })}
  
      </div>
      <br></br>
      <br></br>
      <br></br>

      <div>
        {users &&
          users.map((item) => (
            <>
              <div>
                <h1>{item.name}</h1>
                <h2>{item.id}</h2>
              </div>
            </>
          ))}
      </div>
    </>
  );
};

export default GetVacanciesComp;






