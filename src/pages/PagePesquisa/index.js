import GetOneCompany from "../../components/GetOneCompany";
import GetOneDev from "../../components/GetOneDev";
import {useState} from 'react';

import {DivTam} from './sytle';
import {BtnAtt} from "../../stylesGlobal"
import AlteraHead from "../../components/AlterHead";

const PagePesquisa = () =>{
    const [estado ,setEstado] = useState(false);
    
    const AlterEstato = () =>{
        setEstado(!estado);
    }
    console.log( window.screen.width )
    return(
        <div>
            <AlteraHead/>
            <DivTam>
                <BtnAtt onClick={() => AlterEstato()} >{estado? "Pesquisa por Dev" : "Pesquisa por Empresaa"}</BtnAtt>
            </DivTam>
            {estado?
                <GetOneCompany/> :
                <GetOneDev/>
            }
        </div>
        
    )
}

export default PagePesquisa;