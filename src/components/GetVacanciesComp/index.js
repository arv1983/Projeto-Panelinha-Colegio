import { Checkbox } from "@material-ui/core";
import { useEffect, useState } from "react";
import { User } from "../../providers/UserProvider";
import api from "../../services/api";

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

  // meu codigo

  const handleData = (e) => {
    setVacancies([]);
    e.preventDefault();
    console.log(e.target.busca.value);
    console.log("presencial" + e.target.python.checked);

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
          vacancies.map((item) => (
            <>
              <div>
                <h1>nome:{item.nome}</h1>
                <h2>presencial:{item.presencial}</h2>
                <h2>local:{item.local}</h2>
                <h2>beneficios:{item.beneficios}</h2>
                <h2>cadId:{item.cadId}</h2>
              </div>
            </>
          ))}
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
