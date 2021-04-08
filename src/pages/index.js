import { useState } from "react"
import Login from "../components/Login"
import Register from "../components/Register"
const PageRegister = ()=>{
const [status, setStatus] = useState(false);

const changeModal = ()=>{
    setStatus(true)
}


return (
<>
{!status && <Login/>}

{status &&<Register/>}


</>

)

}


export default PageRegister;