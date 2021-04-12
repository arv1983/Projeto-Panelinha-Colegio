import GetOneCompany from "../../components/GetOneCompany";
import Navegation from "../../components/Navegation";
import GetAllDev from '../../components/GetAllUsersDev';
import GetOneDev from "../../components/GetOneDev";
import GetAllComp from "../../components/GetAllUsersCompany";
const PagePesquisa = () =>{
    return(
        <div>
            <Navegation/>
            {/* 1 */}
            {/* para que serve os componentes GetAllComp */}
           {/* <GetAllComp/> */}
           {/* 2 */}
           {/* para que serve os componentes GetAllDev*/}
           {/* <GetAllDev/> */}
           3
           <GetOneCompany/>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           4
           <GetOneDev/>
        </div>
    )
}

export default PagePesquisa;