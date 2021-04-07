import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import {Container} from "./styles"

const CreateProfileDev= () => {
  const token = useState(()=>{
    const localToken = localStorage.getItem("token") || "";
    if(!localToken){
      return "";
    }
     return JSON.parse(localToken);
     
  })




  const schema = yup.object().shape({
     name: yup.string().max(40).required(),
     city: yup.string().max(20).required(),
     have_job:yup.boolean("The value must be boolean")
     .required("Required field")
     .nullable(),
     avaliable_job:yup.boolean("The value must be boolean")
     .required("Required field")
     .nullable(),
     quarter: yup.string().max(1),
     social_medias:yup.string().max(25),
     cellPhone:yup.string().max(12).required(),
     softSkills:yup.string(),
     description:yup.string().max(400).required(),
     is_coach:yup.boolean("The value must be boolean")
     .required("Required field")
     .nullable()
     
  });

  const{register,handleSubmit, formState:{errors}} = useForm({
resolver:yupResolver(schema)
  });


const handleCreate=(data)=>{
// api.patch("endereço", data, {headers:{
//   Authorization: `Bearer ${token}`
// }}).then(res=>console.log(res).catch(e=>console.log(e)));
console.log(data);
}



  return (
    <>
     <Container>
      <form onSubmit={handleSubmit(handleCreate)}>
       
        <div>
        <input {...register("name")} placeholder="Nome"/>
        </div>

        <div>
        <input {...register("city")} placeholder="Cidade"/>
        </div>

        <div>
        <input  {...register("have_job")}type="radio"  value="true" />
         <label>Empregado</label>
        <input   {...register("have_job")} type="radio" value="false"/>
          <label >Desempregado</label>
          </div>
         <div>
        <input  {...register("avaliable_job")}type="radio"  value="true" />
         <label>Disponível</label>
        <input   {...register("avaliable_job")} type="radio" value="false"/>
          <label >Não Disponível</label>
          </div>
        <div>
        <input {...register("quarter")} placeholder="Período"/>
        </div>

        <div>
        <input {...register("social_medias")} placeholder="Midia Social"/>
        </div>

        <div>
        <input {...register("cellPhone")} placeholder="Celular"/>
        </div>

        <div>
        <input {...register("softSkills")} placeholder="SoftSkills"/>
        </div>

      <div>
        <input {...register("description")} placeholder="Descrição"/>
        </div>

        <div>
        <input  {...register("is_coach")}type="radio"  value="false"  />
         <label>Sim</label>
        <input   {...register("is_coach")} type="radio" value="true"/>
          <label >Não</label>
        </div>
        <div>
        <button type="submit">Enviar </button>
        </div>

      </form>
        </Container>
        
        
        
      
    </>
  );
};



export default CreateProfileDev;