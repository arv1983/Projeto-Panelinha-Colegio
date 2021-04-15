import AlteraHead from "../../components/AlterHead";
import UpProfileDev from "../../components/UpProfileDev";
import {DivComp, DivAvatar, DivProfile} from '../../stylesGlobal'

const PageProfileUsers = ()=>{    
    return (
        <div>
            <AlteraHead/>
            <DivProfile>
                <DivAvatar>
                    <img src="" alt=""></img>
                </DivAvatar>
                <DivComp >
                    <UpProfileDev/>
                </DivComp>
            </DivProfile>
        </div> 
        )
    }
    export default PageProfileUsers;