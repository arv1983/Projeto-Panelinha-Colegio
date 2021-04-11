const VacanciesList = (props) => {
  return (
    <>
      {props.lista &&
        props.lista.map((item, i) => (
          <div key={i}>
            {item.id}º vaga: {item.nome}
          </div>
        ))}
    </>
  );
};

export default VacanciesList;
