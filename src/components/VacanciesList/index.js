const VacanciesList = (props) => {
  console.log(props.lista);
  // console.log("props.lista");
  // nome descrição presencial beneficios local e dadta
  return <>{props.lista && props.lista.map((item, i) => <>{item.nome}</>)}</>;
};

export default VacanciesList;
