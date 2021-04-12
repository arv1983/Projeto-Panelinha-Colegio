import { Link } from "react-router-dom";
import { Head } from "./style";
import { ImHome, ImProfile } from "react-icons/im";
import {BiSearchAlt} from 'react-icons/bi';
import {HeadMob, DivIcon} from './style'

const NavegationMob = () => {
    return(
        <HeadMob>
            <DivIcon>
                <Link>
                <ImHome/>
                </Link>
            </DivIcon>

            <DivIcon>
                <Link>
                <BiSearchAlt/>
                </Link>
            </DivIcon>
        </HeadMob>
    )
}

export default NavegationMob;
