import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { User } from "../../providers/UserProvider";
import api from "../../services/api";

const JoinVancacie = () => {
  const { id } = User();
  const [token] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    if (!localToken) {
      return "";
    }
    return JSON.parse(localToken);
  });
  const [vacancies, setVacancies] = useState([]);
 

  useEffect(() => {
    api
      .get(`/vacancies`)
      .then((res) => setVacancies(res.data))
      .catch((e) => console.log(e));
  }, []);

  const show = (vac_id )=> {
    console.log(token);
    api
      .patch(
        `/vacancies/${vac_id}`,
        { cadId: id},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
    
  };









  return (
      <>
    <div>
    {vacancies &&
      vacancies.map((vac) => (
        <>
        
          <h1>{vac.nome}</h1>
          <h2>{vac.cadId}</h2>
          <button onClick={() => show(vac.id)}>Candidatar</button>
        </>
        
      ))}
     
      
  </div>




    {/* <div>
      {vacancies &&
        vacancies.filter(item=>item.cadId === id).map((vac) => (
          <>
          
            <h1>{vac.nome}</h1>
            <h2>{vac.cadId}</h2>
            <button onClick={() => show(vac.id)}>Remover</button>
          </>
          
        ))}
       
        
    </div> */}
    </>
  );
};

export default JoinVancacie;
