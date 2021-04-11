import { useEffect, useState } from "react";
import api from "../../services/api";

const GetAllDev = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    api
      .get(`/users?type=pf`)
      .then((res) => {
        console.log(res.data);
        console.log(res);
        setDados(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <h2>Todos os Devs:</h2>
      {dados && dados.map((item, i) => <div key={i}>{item.name}</div>)}
    </>
  );
};

export default GetAllDev;
