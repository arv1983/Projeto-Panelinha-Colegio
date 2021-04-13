import { Hidden, Modal } from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services/api";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

import { User } from "../../providers/UserProvider";

const VacanciesListEdit = (props) => {
  console.log(props);

  const { id } = User();

  const [token] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    if (!localToken) {
      return "";
    }
    return JSON.parse(localToken);
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const schema = yup.object().shape({
    nome: yup.string().required("Campo obrigatorio"),
    descricao: yup.string().required("Campo obrigatorio"),
    presencial: yup.string().required("Campo obrigatorio"),
    beneficios: yup.string().required("Campo obrigatorio"),
    local: yup.string().required("Campo obrigatorio"),
    reactjs: yup.boolean(),
    reactNative: yup.boolean(),
    flutter: yup.boolean(),
    python: yup.boolean(),
    javascript: yup.boolean(),
    sql: yup.boolean(),
    typescript: yup.boolean(),
    nodejs: yup.boolean(),
    dart: yup.boolean(),
    ruby_on_rails: yup.boolean(),
    objective_c: yup.boolean(),
    go: yup.boolean(),
    html5: yup.boolean(),
    bootstrap: yup.boolean(),
    php: yup.boolean(),
    data: yup.string().required("Campo obrigatorio"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleData = (dados) => {
    console.log(token);
    api
      .patch(
        `/vacancies/${props.dados.id}`,
        {
          nome: dados.nome,
          descricao: dados.descricao,
          presencial: dados.presencial,
          beneficios: dados.beneficios,
          local: dados.local,
          data: dados.data,
          reactjs: dados.reactjs,
          reactnative: dados.reactnative,
          flutter: dados.flutter,
          python: dados.python,
          javascript: dados.javascript,
          sql: dados.sql,
          typescript: dados.typescript,
          nodejs: dados.nodejs,
          dart: dados.dart,
          ruby_on_rails: dados.ruby_on_rails,
          objective_c: dados.objective_c,
          go: dados.go,
          html5: dados.html5,
          bootstrap: dados.bootstrap,
          php: dados.php,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          api
            .get(`/vacancies?idUser=${id}`)
            .then((response) => {
              props.setLista(response.data);
            })
            .catch((e) => console.log(e));
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <button onClick={handleOpen}>Editar vaga</button>

      <Modal open={open} onClose={handleClose}>
        <>
          <div>id: {props.dados.id}</div>
          <div>vaga: </div>
          <div>index:</div>

          <form onSubmit={handleSubmit(handleData)}>
            <div>
              <input
                type="text"
                defaultValue={props.dados.nome}
                placeholder="nome"
                {...register("nome")}
              />
            </div>
            <div>
              <input
                type="text"
                defaultValue={props.dados.descricao}
                placeholder="descricao"
                {...register("descricao")}
              />
            </div>
            <div>
              <input
                type="text"
                defaultValue={props.dados.presencial}
                placeholder="presencial"
                {...register("presencial")}
              />
            </div>

            <div>
              <input
                type="checkbox"
                defaultValue={props.dados.reactjs}
                name="reactjs"
                value="true"
                {...register("reactjs")}
              />
              <label for="ReactJs">ReactJs</label>
            </div>

            <div>
              <input
                type="checkbox"
                defaultValue={props.dados.reactnative}
                name="reactjs"
                value="true"
                {...register("reactnative")}
              />
              <label for="ReactNative">React Native</label>
            </div>

            <div>
              <input
                type="checkbox"
                defaultValue={props.dados.flutter}
                name="flutter"
                value="true"
                {...register("flutter")}
              />
              <label for="flutter">Flutter</label>
            </div>

            <div>
              <input
                type="checkbox"
                defaultValue={props.dados.python}
                name="python"
                value="true"
                {...register("python")}
              />
              <label for="python">Python</label>
            </div>

            <div>
              <input
                type="checkbox"
                defaultValue={props.dados.javascript}
                name="javascript"
                value="true"
                {...register("javascript")}
              />
              <label for="python">JavaScript</label>
            </div>

            <div>
              <input
                type="checkbox"
                defaultValue={props.dados.sql}
                name="sql"
                value="true"
                {...register("sql")}
              />
              <label for="sql">sql</label>
            </div>

            <div>
              <input
                type="checkbox"
                defaultValue={props.dados.typescript}
                name="typescript"
                value="true"
                {...register("typescript")}
              />
              <label for="typeScript">TypeScript</label>
            </div>

            <div>
              <input
                type="checkbox"
                defaultValue={props.dados.nodejs}
                name="nodejs"
                value="true"
                {...register("nodejs")}
              />
              <label for="nodejs">NodeJs</label>
            </div>

            <div>
              <input
                type="checkbox"
                defaultValue={props.dados.dart}
                name="dart"
                value="true"
                {...register("dart")}
              />
              <label for="dart">Dart</label>
            </div>

            <div>
              <input
                type="checkbox"
                defaultValue={props.dados.ruby_on_rails}
                name="ruby_on_rails"
                value="true"
                {...register("dados.ruby_on_rails")}
              />
              <label for="ruby_on_rails">ruby_on_rails</label>
            </div>

            <div>
              <input
                type="checkbox"
                defaultValue={props.dados.objective_c}
                name="objective_c"
                value="true"
                {...register("dados.objective_c")}
              />
              <label for="objective_c">objective_c</label>
            </div>

            <div>
              <input
                type="checkbox"
                defaultValue={props.dados.go}
                name="go"
                value="true"
                {...register("dados.go")}
              />
              <label for="go">go</label>
            </div>

            <div>
              <input
                type="checkbox"
                defaultValue={props.dados.html5}
                name="html5"
                value="true"
                {...register("dados.html5")}
              />
              <label for="html5">html5</label>
            </div>

            <div>
              <input
                type="checkbox"
                defaultValue={props.dados.bootstrap}
                name="bootstrap"
                value="true"
                {...register("dados.bootstrap")}
              />
              <label for="bootstrap">bootstrap</label>
            </div>

            <div>
              <input
                type="checkbox"
                defaultValue={props.dados.php}
                name="php"
                value="true"
                {...register("dados.php")}
              />
              <label for="php">php</label>
            </div>

            <div>
              <input
                type="text"
                defaultValue={props.dados.beneficios}
                placeholder="beneficios"
                {...register("beneficios")}
              />
            </div>
            <div>
              <input
                type="text"
                defaultValue={props.dados.local}
                placeholder="local"
                {...register("local")}
              />
            </div>
            <div>
              <input
                type="text"
                defaultValue={props.dados.data}
                placeholder="data"
                {...register("data")}
              />
            </div>
            <div>
              <button type="submit">editar</button>
            </div>
          </form>
        </>
      </Modal>
    </>
  );
};

export default VacanciesListEdit;
