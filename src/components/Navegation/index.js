import { Link } from "react-router-dom";
import { Head } from "./style";

const Navegation = () => {
    return(
        <Head>
            <Link to="/home">Principal</Link>
            <Link to="/users/comp">Company</Link>
            <Link to="/users/dev">Usuario</Link>
            <Link to="/pesquisa">Pesquisa</Link>
        </Head>
    )
}

export default Navegation;