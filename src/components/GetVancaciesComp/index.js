import { useEffect, useState } from "react";
import { User } from "../../providers/UserProvider";
import api from "../../services/api";

const GetVacanciesComp = () => {
   const { id } = User();
  const [token] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    if (!localToken) {
      return "";
    }
    return JSON.parse(localToken);
  });
  const [vacancies, setVacancies]= useState([]);
  const [users, setUsers]=useState([]);

  useEffect(() => {
    api
      .get(`/vacancies?idUser=13`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setVacancies(res.data))
      .catch((e) => console.log(e));
       
      api
      .get(`/users?type=pf`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setUsers(res.data))
      .catch((e) => console.log(e));

      
  },[]);



  return (<>
   {/* <div>
     {vacancies && vacancies.map((item, index)=>(
        <>
        <div key={index}> 
         <h1>nome:{item.nome}</h1>
         <h2>presencial:{item.presencial}</h2> 
         <h2>local:{item.local}</h2>
         <h2>beneficios:{item.beneficios}</h2>
         <h2>cadId:{item.cadId}</h2>
         </div>
         
        </>
     ))}
     </div>
<br></br>
<br></br>
<br></br>

<div>

{users && users.map((item, index)=>(
        <>
        <div key={index}> 
         <h1>{item.name}</h1>
         <h2>{item.id}</h2>
         </div>
         
        </>
     ))}

  </div>
 */}

  <div>

{vacancies && vacancies.map((vac)=>{


users && users.filter(user=>{
  return vac.cadId === 14?console.log(user.name):""


  
  })
    
  






})


}

  </div>








  </>
  )
  
};

export default GetVacanciesComp;
