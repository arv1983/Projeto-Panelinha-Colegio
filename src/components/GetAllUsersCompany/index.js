import { useEffect, useState } from "react";
import api from "../../services/api";

const GetOneCompany = () => {
  const token = JSON.parse(localStorage.getItem("token"));

  const [dados, setDados] = useState([]);

  useEffect(() => {
    api
      .get(`/users?type=Company&_limit=-1`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        console.log(res);
        setDados(res.data);
      })
      .catch((e) => console.log(e));
  }, [token]);

  return (
    <>
      {/* <form onSubmit={(e) => handleData(e)}>
        <input name="busca" type="text"></input>
        <button type="submit">procurarr</button>
      </form> */}

      {dados && dados.map((item) => <>{item.email}</>)}
    </>
  );
};

export default GetOneCompany;
