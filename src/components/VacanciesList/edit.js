import { Modal } from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services/api";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { User } from "../../providers/UserProvider";
import { DivPrincipal, DivChecked, Btn } from "./style";
import { InputProfile } from "../../stylesGlobal";
import {Vac} from "../../providers/VacancieProvider"
const VacanciesListEdit = (props) => {
  console.log(props.dados.flutter);
  const { id } = User();
   const {vacCountClick, setVacCountClick} = Vac();
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
    local: yup.string().required("Campo obrigatori"),
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
        setVacCountClick(vacCountClick + 1)
        if (response.status === 200) {
          api
            .get(`/vacancies?idUser=${id}`)
            .then((response) => {
              props.setLista(response.data);
              setVacCountClick(vacCountClick + 1)
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
        <DivPrincipal>
          <form onSubmit={handleSubmit(handleData)}>
            <div>
              <InputProfile
                type="text"
                defaultValue={props.dados.nome}
                placeholder="nome"
                {...register("nome")}
              />
            </div>
            <div>
              <InputProfile
                type="text"
                defaultValue={props.dados.descricao}
                placeholder="descricao"
                {...register("descricao")}
              />
            </div>
            <div>
              <InputProfile
                type="text"
                defaultValue={props.dados.presencial}
                placeholder="presencial"
                {...register("presencial")}
              />
            </div>
            <div>
              <InputProfile
                type="text"
                defaultValue={props.dados.beneficios}
                placeholder="beneficios"
                {...register("beneficios")}
              />
            </div>
            <div>
              <InputProfile
                type="text"
                defaultValue={props.dados.local}
                placeholder="local"
                {...register("local")}
              />
            </div>
            <div>
              <InputProfile
                type="text"
                defaultValue={props.dados.data}
                placeholder="data"
                {...register("data")}
              />
            </div>
            <DivChecked>
              <div>
                <input
                  type="checkbox"
                  name="reactjs"
                  value="true"
                  {...register("reactjs")}
                  onChange={(e) => e.target.checked}
                />
                <label for="ReactJs">ReactJs</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  onChange={(e) => e.target.checked}
                  name="reactnative"
                  value="true"
                  {...register("reactnative")}
                />
                <label for="ReactNative">React Native</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  onChange={(e) => e.target.checked}
                  name="flutter"
                  value="true"
                  {...register("flutter")}
                />
                <label for="flutter">Flutter</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  onChange={(e) => e.target.checked}
                  name="python"
                  value="true"
                  {...register("python")}
                />
                <label for="python">Python</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  onChange={(e) => e.target.checked}
                  name="javascript"
                  value="true"
                  {...register("javascript")}
                />
                <label for="python">JavaScript</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  onChange={(e) => e.target.checked}
                  name="sql"
                  value="true"
                  {...register("sql")}
                />
                <label for="sql">Sql</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  onChange={(e) => e.target.checked}
                  name="typescript"
                  value="true"
                  {...register("typescript")}
                />
                <label for="typeScript">TypeScript</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  onChange={(e) => e.target.checked}
                  name="nodejs"
                  value="true"
                  {...register("nodejs")}
                />
                <label for="nodejs">NodeJs</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  onChange={(e) => e.target.checked}
                  name="dart"
                  value="true"
                  {...register("dart")}
                />
                <label for="dart">Dart</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  onChange={(e) => e.target.checked}
                  name="ruby_on_rails"
                  value="true"
                  {...register("dados.ruby_on_rails")}
                />
                <label for="ruby_on_rails">Ruby on rails</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  onChange={(e) => e.target.checked}
                  name="objective_c"
                  value="true"
                  {...register("dados.objective_c")}
                />
                <label for="objective_c">Objective C</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  onChange={(e) => e.target.checked}
                  name="go"
                  value="true"
                  {...register("dados.go")}
                />
                <label for="go">Go</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  onChange={(e) => e.target.checked}
                  name="html5"
                  value="true"
                  {...register("dados.html5")}
                />
                <label for="html5">Html5</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  onChange={(e) => e.target.checked}
                  name="bootstrap"
                  value="true"
                  {...register("dados.bootstrap")}
                />
                <label for="bootstrap">Bootstrap</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  onChange={(e) => e.target.checked}
                  name="php"
                  value="true"
                  {...register("dados.php")}
                />
                <label for="php">Php</label>
              </div>
            </DivChecked>
            <Btn type="submit">Editar</Btn>
          </form>
        </DivPrincipal>
      </Modal>
    </>
  );
};

export default VacanciesListEdit;
