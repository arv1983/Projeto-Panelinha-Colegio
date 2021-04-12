import Navegation from "../../components/Navegation";
import UpProfileDev from "../../components/UpProfileDev";

import {DivComp, DivAvatar, DivProfile} from '../../stylesGlobal'

const PageProfileUsers = ()=>{    
    return (
        <>
            {/* <Navegation/> */}
            <DivProfile>
                <DivAvatar>
                    <img src="" alt=""></img>
                </DivAvatar>
                <DivComp >
                    <UpProfileDev/>
                </DivComp>
            </DivProfile>
            <div  style={{ border:"1px solid white", width: "99%", height: "300px", margin: "30px auto" , textAlign: "center"}}>
                <h1>Tecnologias</h1>
            </div>
        </>
        )
    }
    export default PageProfileUsers;