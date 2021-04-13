import Navegation from "../../components/Navegation";
import UpProfileComp from "../../components/UpProfileComp";
import Vacancies from "../../components/Vacancies";

import {DivComp, DivAvatar, DivProfile} from '../../stylesGlobal'

const PageProfileComp = ()=>{    
    return (
        <>
            <Navegation/>
            <DivProfile>
                <DivAvatar>
                    <img src="" alt=""></img>
                </DivAvatar>
                <DivComp className="divCOmp">
                    <UpProfileComp/>
                </DivComp>
            </DivProfile>
            <div  style={{ border:"1px solid white", width: "99%", height: "auto", margin: "30px auto" , textAlign: "center"}}>
                <h1> Anuncia Vagas</h1>
                <Vacancies/>
            </div>   
        </>
        )
    }
    export default PageProfileComp;