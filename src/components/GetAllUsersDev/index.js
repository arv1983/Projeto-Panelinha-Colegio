import { useEffect, useState } from "react";
import api from "../../services/api";

const GetAllUsersDev = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .get(`/users?type=pf`)
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      {data &&
        data.map((user, index) => {
          return <div key={index}>{user.email}</div>;
        })}
    </>
  );
};

export default GetAllUsersDev;
