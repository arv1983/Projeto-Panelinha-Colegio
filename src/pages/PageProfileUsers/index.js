import GetOneCompany from "../../components/GetOneCompany";
import Navegation from "../../components/Navegation";
import UpProfileDev from "../../components/UpProfileDev";
import GetAllComp from '../../components/GetAllUsersCompany'

import {DivComp, DivAvatar, DivProfile} from '../../stylesGlobal'
import Tecnologias from "../../components/Tecnologias";

const PageProfileUsers = ()=>{    
    return (
        <div>
            {/* <Navegation/> */}
            <DivProfile>
                <DivAvatar>
                    <img src="" alt=""></img>
                </DivAvatar>
                <DivComp >
                    <UpProfileDev/>
                </DivComp>
            </DivProfile>
            <div  style={{ border:"1px solid white", width: "99%", height: "auto", margin: "30px auto" , textAlign: "center"}}>
                <h1>Tecnologias</h1>
                <Tecnologias/>
            </div>
            <GetOneCompany/>
        </div>
        )
    }
    export default PageProfileUsers;