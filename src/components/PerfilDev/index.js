import IMGbootstrap from "../../img/icones/bootstrap.png";
import IMGc from "../../img/icones/c.png";
import IMGdart from "../../img/icones/dart.png";
import IMGflutter from "../../img/icones/flutter.png";
import IMGpython from "../../img/icones/python.png";
import IMGphp from "../../img/icones/php.png";
import IMGsql from "../../img/icones/sql.png";
import IMGtypescript from "../../img/icones/typescript.png";
import IMGruby_on_rails from "../../img/icones/rubyonrails.png";
import IMGnodejs from "../../img/icones/nodejs.png";
import IMGhtml5 from "../../img/icones/html5.png";
import IMGgo from "../../img/icones/go.png";
import IMGreactjs from "../../img/icones/reactjs.png";
import IMGreact_native from "../../img/icones/reactnative.png";
import IMGjava_script from "../../img/icones/javascript.png";

const PerfilDev = (props) => {
  console.log(props);

  return (
    <>
      NOME:{props.nome}
      DESCRIÇÃO: {props.descricao}
      Quarter: {props.quarter}
      Midia: {props.social_medias}
      cellprone: {props.cellPhone}
      Tem emprego: {props.have_job}
      Disponel para trabalhar: {props.avaliable_job}
      {props.reactjs}
      {props.reactnative}
      {props.flutter}
      {props.python}
      {props.javascript}
      {props.sql}
      {props.typescript}
      {props.nodejs}
      {props.dart}
      {props.ruby_on_rails}
      {props.objective_c}
      {props.go}
      {props.html5}
      {props.bootstrap}
      {props.php}
    </>
  );
};

export default PerfilDev;
