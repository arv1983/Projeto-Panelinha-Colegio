import AlteraHead from '../../components/AlterHead'
import { User } from "../../providers/UserProvider";

const PageHome = () =>{
    const { loggedUser } = User();

    return(
        <>
            <AlteraHead/>
            {loggedUser.type === "pf"? "pessoa fisica" : "empresa"}
        </>
    )
}

export default PageHome;