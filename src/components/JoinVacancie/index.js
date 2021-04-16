// COMPONENTE APOSENTEADO
// GETVACANCIESCOMP FAZ ESSA FUNÇÃO

// import { useState } from "react";
// import { useEffect } from "react";
// import { unstable_concurrentAct } from "react-dom/test-utils";
// import { useHistory } from "react-router";
// import { User } from "../../providers/UserProvider";
// import { Vac } from "../../providers/VacancieProvider";
// import api from "../../services/api";

// const JoinVancacie = () => {
//   const { id, loggedUser } = User();
//   const history = useHistory();
//   if (loggedUser.type === "pj") {
//     history.push("/home");
//   }
//   const [token] = useState(() => {
//     const localToken = localStorage.getItem("token") || "";
//     if (!localToken) {
//       return "";
//     }
//     return JSON.parse(localToken);
//   }); 
//   const [vacancies, setVacancies] = useState([]);
//   const { vacCountClick, setVacCountClick } = Vac();
//   const [cad, setCad] = useState([]);
//   useEffect(() => {
//     api
//       .get(`/vacancies`)
//       .then((res) => setVacancies(res.data))
//       .catch((e) => console.log(e));
//   }, [vacCountClick]);
//   const subscribe = (vac_id, array_de_vagas) => {
//     console.log(vac_id);
//     console.log(array_de_vagas);
//     array_de_vagas.push(id);
//     api
//       .patch(
//         `/vacancies/${vac_id}`,
//         { cad: array_de_vagas },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       )
//       .then((res) => setVacCountClick(vacCountClick + 1))
//       .catch((e) => console.log(e));
//   };
//   const unSubscribe = (vac_id, array) => {
//     console.log(array);
//     console.log(vac_id);
//     array.splice(array.indexOf(id), 1);
//     api
//       .patch(
//         `/vacancies/${vac_id}`,
//         { cad: array },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       )
//       .then((res) => setVacCountClick(vacCountClick + 1))
//       .catch((e) => console.log(e));
//   };
//   console.log(vacancies);
//   return (
//     <>
//       {vacancies &&
//         vacancies.map((vac) => {
//           return (
//             <>
//               <h1>nome vaga: {vac.nome}</h1>
//               <h2>id vaga:{vac.id}</h2>
//               <button onClick={() => subscribe(vac.id, vac.cad)}>
//                 Candidatar
//               </button>
//               <button onClick={() => unSubscribe(vac.id, vac.cad)}>
//                 Descadastra
//               </button>
//             </>
//           );
//         })}
//     </>
//   );
// };
// export default JoinVancacie;
