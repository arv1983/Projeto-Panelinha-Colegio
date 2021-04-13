import { useState } from "react";
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
  const [count, setCount]= useState(0);

  useEffect(() => {
    api
      .get(`/vacancies`)
      .then((res) => setVacancies(res.data))
      .catch((e) => console.log(e));
  }, [count]);

  const subscribe = (vac_id )=> {
   
    api
      .patch(
        `/vacancies/${vac_id}`,
        { cadId:id},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) =>  setCount(count +1))
      .catch((e) => console.log(e));
      
  };


  const unSubscribe = (vac_id )=> {
  
    api
      .patch(
        `/vacancies/${vac_id}`,
        { cadId:""},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) =>  setCount(count +1))
      .catch((e) => console.log(e));
      
  };







  return (
    <>
  
    {vacancies &&
      vacancies.map((vac) => {
        
        return(
          <>
          <h1>nome vaga: {vac.nome}</h1>
          <h2>id vaga:{vac.id}</h2>
          <button onClick={() => subscribe(vac.id)}>Candidatar</button>
          </>
        )
})}


{vacancies && vacancies.filter(item=>item.cadId === id).map(item=>(
  <>
  <h1>{item.nome}</h1>
  <h2>{item.id}</h2>
  <button onClick={()=>unSubscribe(item.id)}>remover</button>
  </>


))

}


















     
  </>  
  
)

}

export default JoinVancacie;
