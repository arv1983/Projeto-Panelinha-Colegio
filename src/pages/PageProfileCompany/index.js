import GetOneCompany from "../../components/GetOneCompany";
import Navegation from "../../components/Navegation";
import UpProfileComp from "../../components/UpProfileComp";

import {DivComp, DivAvatar, DivProfile} from '../../stylesGlobal'

const PageProfileComp = ()=>{    
    return (
        <>
            {/* <Navegation/> */}
            <DivProfile>
                <DivAvatar>
                    <img src="" alt=""></img>
                </DivAvatar>
                <DivComp className="divCOmp">
                    <UpProfileComp/>
                </DivComp>
            </DivProfile>
            <div  style={{ border:"1px solid white", width: "99%", height: "300px", margin: "30px auto" , textAlign: "center"}}>
                <h1>Vagas</h1>
            </div>
            <GetOneCompany/>
        </>
        )
    }
    export default PageProfileComp;