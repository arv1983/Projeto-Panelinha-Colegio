import GetOneCompany from "../../components/GetOneCompany";
import GetOneDev from "../../components/GetOneDev";
import {useState} from 'react';
import { User } from "../../providers/UserProvider";
import {DivTam} from './sytle';
import {BtnAtt} from "../../stylesGlobal"
import AlteraHead from "../../components/AlterHead";
import GetVacanciesComp from "../../components/GetVacanciesComp";


const PagePesquisa = () =>{
    const [estado ,setEstado] = useState(false);
    const { loggedUser } = User();
    
    const AlterEstato = () =>{
        setEstado(!estado);
    }
    return(
        <div>
            <AlteraHead/>
            
            {/* {loggedUser.type === "pf"? 
            <div>
                <DivTam>
                    <BtnAtt onClick={() => AlterEstato()} >{estado? "Pesquisa por Dev" : "Pesquisa por Empresaa"}</BtnAtt>
                </DivTam>
                {estado?
                    <GetOneCompany/> :
                    <div>
                        
                        <br></br>
                        <br></br>
                        <br></br>
                        <GetVacanciesComp/>
                    </div>
            }
            </div> :
            <div>
                <GetOneDev/>
            </div> }
             */}
        </div>
        
    )
}

export default PagePesquisa;