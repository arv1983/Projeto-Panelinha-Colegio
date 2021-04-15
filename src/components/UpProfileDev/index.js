import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import api from "../../services/api";
import { User } from "../../providers/UserProvider";
import { useEffect } from "react";

import { InputProfile, BtnAtt, Label, DivOption } from "../../stylesGlobal";
import { Token } from "../../providers/TokenProvider";
import { useHistory } from "react-router-dom";

const UpProfileDev = () => {
  const { id, loggedUser } = User();
  const history = useHistory();
  const [token] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    if (!localToken) {
      return "";
    }
    return JSON.parse(localToken);
  });

  if (loggedUser.type === "pj" && token) {
    history.push("/home");
  }

  const [nameInput, setNameInput] = useState("");

  const [cityInput, setCityInput] = useState("");

  const [have_jobInput, setHave_jobInput] = useState("");

  const [avaliable_jobInput, setAvaliable_jobInput] = useState("");

  const [quarterInput, setQuarterInput] = useState("");

  const [social_mediasInput, setSocial_mediasInput] = useState("");

  const [cellPhoneInput, setCellPhoneInput] = useState("");

  const [softSkillsInput, setSoftSkillsInput] = useState("");

  const [descriptionInput, setDescriptionInput] = useState("");

  const [is_coachInput, setIs_coachInput] = useState("");

  // começa putaria

  const [reactjsInput, setReactjsInput] = useState(false);
  const [reactNativeInput, setReactNativeInput] = useState(false);
  const [flutterInput, setFlutterInput] = useState(false);
  const [pythonInput, setPythonInput] = useState(false);
  const [javascriptInput, setJavascriptInput] = useState(false);
  const [sqlInput, setSqlInput] = useState(false);
  const [typescriptInput, setTypeScriptInput] = useState(false);
  const [nodejsInput, setNodeJsInput] = useState(false);
  const [dartInput, setDartInput] = useState(false);
  const [ruby_on_railsInput, setRuby_on_railsInput] = useState(false);
  const [objective_cInput, setObjective_cInput] = useState(false);
  const [goInput, setGoInput] = useState(false);
  const [html5Input, setHtml5Input] = useState(false);
  const [bootstrapInput, setBootstrapInput] = useState(false);
  const [phpInput, setPhpInput] = useState(false);

  // termina putaria

  useEffect(() => {
    setNameInput(loggedUser.name);
    setCityInput(loggedUser.city);
    setHave_jobInput(loggedUser.have_job);
    setAvaliable_jobInput(loggedUser.avaliable_job);
    setQuarterInput(loggedUser.quarter);
    setSocial_mediasInput(loggedUser.social_medias);
    setCellPhoneInput(loggedUser.cellPhone);
    setSoftSkillsInput(loggedUser.softSkills);
    // cameça putaria

    setReactjsInput(loggedUser.reactjs);
    setReactNativeInput(loggedUser.reactnative);
    setFlutterInput(loggedUser.flutter);
    setPythonInput(loggedUser.python);
    setJavascriptInput(loggedUser.javascript);
    setSqlInput(loggedUser.sql);
    setTypeScriptInput(loggedUser.typescript);
    setNodeJsInput(loggedUser.nodejs);
    setDartInput(loggedUser.dart);
    setRuby_on_railsInput(loggedUser.ruby_on_rails);
    setObjective_cInput(loggedUser.objective_c);
    setGoInput(loggedUser.go);
    setHtml5Input(loggedUser.html5);
    setBootstrapInput(loggedUser.bootstrap);
    setPhpInput(loggedUser.php);

    // termina putaria
    setDescriptionInput(loggedUser.description);
    setIs_coachInput(loggedUser.is_coach);
  }, [
    loggedUser.avaliable_job,
    loggedUser.cellPhone,
    loggedUser.city,
    loggedUser.description,
    loggedUser.have_job,
    loggedUser.is_coach,
    loggedUser.name,
    loggedUser.quarter,
    loggedUser.social_medias,
    loggedUser.softSkills,
    loggedUser.reactjs,
    loggedUser.flutter,
    loggedUser.python,
    loggedUser.javascript,
    loggedUser.sql,
    loggedUser.typescript,
    loggedUser.nodejs,
    loggedUser.dart,
    loggedUser.ruby_on_rails,
    loggedUser.objective_c,
    loggedUser.go,
    loggedUser.html5,
    loggedUser.bootstrap,
    loggedUser.php,
    loggedUser.reactnative,
  ]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({});

  const handleUpdate = (data) => {
    api
      .patch(
        `/users/${id}`,
        {
          name: nameInput,
          city: cityInput,
          have_job: have_jobInput,
          avaliable_job: avaliable_jobInput,
          quarter: quarterInput,
          social_medias: social_mediasInput,
          cellPhone: cellPhoneInput,
          softSkills: softSkillsInput,
          description: descriptionInput,
          is_coach: is_coachInput,
          reactjs: reactjsInput,
          reactnative: reactNativeInput,
          flutter: flutterInput,
          python: pythonInput,
          javascript: javascriptInput,
          sql: sqlInput,
          typescript: typescriptInput,
          nodejs: nodejsInput,
          dart: dartInput,
          ruby_on_rails: ruby_on_railsInput,
          objective_c: objective_cInput,
          go: goInput,
          html5: html5Input,
          bootstrap: bootstrapInput,
          php: phpInput,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log("Patch", res.data);
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <h2>Atualizar Perfil Dev</h2>
      <form onSubmit={handleSubmit(handleUpdate)}>
        <div>
          <InputProfile
            {...register("name")}
            placeholder="Nome"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
        </div>
        <div>
          <InputProfile
            {...register("city")}
            placeholder="Cidade"
            value={cityInput}
            onChange={(e) => setCityInput(e.target.value)}
          />
        </div>
        <div>
          <InputProfile
            {...register("quarter")}
            placeholder="Período"
            value={quarterInput}
            onChange={(e) => setQuarterInput(e.target.value)}
          />
        </div>
        <div>
          <InputProfile
            {...register("social_medias")}
            placeholder="Redes Sociais"
            value={social_mediasInput}
            onChange={(e) => setSocial_mediasInput(e.target.value)}
          />
        </div>
        <div>
          <InputProfile
            {...register("cellPhone")}
            placeholder="Celular"
            value={cellPhoneInput}
            onChange={(e) => cellPhoneInput(e.target.value)}
          />
        </div>
        <div>
          <InputProfile
            {...register("softSkills")}
            placeholder="SoftSkills"
            value={softSkillsInput}
            onChange={(e) => setSoftSkillsInput(e.target.value)}
          />
        </div>
        {/* comeca a putaria                        ass */}
        {console.log("react js" + reactjsInput)}
        <div>
          <InputProfile
            {...register("reactjs")}
            type="checkbox"
            checked={reactjsInput === true && <>checked</>}
            value="true"
            onChange={(e) => setReactjsInput(e.target.checked)}
          />

          <label for="ReactJs">ReactJs</label>
        </div>
        <div>
          {console.log("react Native" + reactNativeInput)}
          <InputProfile
            {...register("reactnative")}
            type="checkbox"
            checked={reactNativeInput === true && <>checked</>}
            value="true"
            onChange={(e) => setReactNativeInput(e.target.checked)}
          />
          <label for="ReactJs">React Native</label>
        </div>
        <div>
          {console.log("react flutter" + flutterInput)}
          <InputProfile
            {...register("flutter")}
            type="checkbox"
            checked={flutterInput === true && <>checked</>}
            value="true"
            onChange={(e) => setFlutterInput(e.target.checked)}
          />
          <label for="flutter">Flutter</label>
        </div>
        <div>
          <InputProfile
            {...register("python")}
            type="checkbox"
            checked={pythonInput === true && <>checked</>}
            value="true"
            onChange={(e) => setPythonInput(e.target.checked)}
          />
          <label for="python">Python</label>
        </div>
        <div>
          <InputProfile
            {...register("javascript")}
            type="checkbox"
            checked={javascriptInput === true && <>checked</>}
            value="true"
            onChange={(e) => setJavascriptInput(e.target.checked)}
          />
          <label for="javascript">JavaScript</label>
        </div>
        <div>
          <InputProfile
            {...register("sql")}
            type="checkbox"
            checked={sqlInput === true && <>checked</>}
            value="true"
            onChange={(e) => setSqlInput(e.target.checked)}
          />
          <label for="sql">SQL</label>
        </div>
        <div>
          <InputProfile
            {...register("typescript")}
            type="checkbox"
            checked={typescriptInput === true && <>checked</>}
            value="true"
            onChange={(e) => setTypeScriptInput(e.target.checked)}
          />
          <label for="typescript">Type scriṕt</label>
        </div>
        <div>
          <InputProfile
            {...register("nodejs")}
            type="checkbox"
            checked={nodejsInput === true && <>checked</>}
            value="true"
            onChange={(e) => setNodeJsInput(e.target.checked)}
          />
          <label for="nodejs">NodeJs</label>
        </div>
        <div>
          <InputProfile
            {...register("dart")}
            type="checkbox"
            checked={dartInput === true && <>checked</>}
            value="true"
            onChange={(e) => setDartInput(e.target.checked)}
          />
          <label for="dart">Dart</label>
        </div>
        <div>
          <InputProfile
            {...register("ruby_on_rails")}
            type="checkbox"
            checked={ruby_on_railsInput === true && <>checked</>}
            value="true"
            onChange={(e) => setRuby_on_railsInput(e.target.checked)}
          />
          <label for="ruby_on_rails">ruby_on_rails</label>
        </div>
        <div>
          <InputProfile
            {...register("objective_c")}
            type="checkbox"
            checked={objective_cInput === true && <>checked</>}
            value="true"
            onChange={(e) => setObjective_cInput(e.target.checked)}
          />
          <label for="objective_c">objective_c</label>
        </div>
        <div>
          <InputProfile
            {...register("go")}
            type="checkbox"
            checked={goInput === true && <>checked</>}
            value="true"
            onChange={(e) => setGoInput(e.target.checked)}
          />
          <label for="go">go</label>
        </div>
        <div>
          <InputProfile
            {...register("html5")}
            type="checkbox"
            checked={html5Input === true && <>checked</>}
            value="true"
            onChange={(e) => setHtml5Input(e.target.checked)}
          />
          <label for="html5">html5</label>
        </div>
        <div>
          <InputProfile
            {...register("bootstrap")}
            type="checkbox"
            checked={bootstrapInput === true && <>checked</>}
            value="true"
            onChange={(e) => setBootstrapInput(e.target.checked)}
          />
          <label for="bootstrap">bootstrap</label>
        </div>
        <div>
          <InputProfile
            {...register("php")}
            type="checkbox"
            checked={phpInput === true && <>checked</>}
            value="true"
            onChange={(e) => setPhpInput(e.target.checked)}
          />
          <label for="php">php</label>
        </div>
        {/* termina  a putaria                        ass */}
        <div>
          <InputProfile
            {...register("description")}
            placeholder="Descrição"
            value={descriptionInput}
            onChange={(e) => setDescriptionInput(e.target.value)}
          />
        </div>
        <DivOption>
          <div>
            <span>Você é coach?</span>
            <input
              {...register("is_coach")}
              type="radio"
              value={is_coachInput}
              checked={true}
              onChange={() => setIs_coachInput(true)}
              checked={is_coachInput === true}
            />
            <label>Sou coach</label>
            <input
              {...register("is_coach")}
              type="radio"
              value={is_coachInput}
              onChange={() => setIs_coachInput(false)}
              checked={is_coachInput === false}
            />
            <label>Não sou coach</label>
          </div>
          <div>
            <span>Você possui emprego?</span>
            <input
              {...register("have_job")}
              type="radio"
              value={have_jobInput}
              onChange={() => setHave_jobInput("Empregado")}
              checked={have_jobInput === "Empregado"}
            />
            <label>Empregado</label>
            <input
              {...register("have_job")}
              type="radio"
              value={have_jobInput}
              onChange={() => setHave_jobInput("Desempregado")}
              checked={have_jobInput === "Desempregado"}
            />
            <label>Desempregado</label>
          </div>

          <div>
            <span>Você está disponível para trabalhar?</span>
            <input
              {...register("avaliable_job")}
              type="radio"
              value={avaliable_jobInput}
              onChange={() => setAvaliable_jobInput("Disponivel")}
              checked={avaliable_jobInput === "Disponivel"}
            />
            <label>Disponível</label>
            <input
              {...register("avaliable_job")}
              type="radio"
              value={avaliable_jobInput}
              onChange={() => setAvaliable_jobInput("NaoDisponivel")}
              checked={avaliable_jobInput === "NaoDisponivel"}
            />
            <label>Não Disponível</label>
          </div>
        </DivOption>
        <div>
          <BtnAtt type="submit">Atualizar</BtnAtt>
        </div>
      </form>
    </>
  );
};

export default UpProfileDev;
