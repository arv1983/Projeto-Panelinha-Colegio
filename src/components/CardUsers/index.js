import { Modal } from "@material-ui/core"
import ModalCompanay from "../ModalCompanay"
import {useState} from "react";

import {DivPai, btnVagas} from './style';
import ModalUser from "../ModalUser";

const CardUsers = ({user}) =>{
    const [open, setOpen] = useState(false);

    const handleOpen = (e) => {
        setOpen(true);
      };
      const handleClose = (e) => {
        setOpen(false);
      }; 

    return(
        <DivPai >
            <div >
                <div>
                    <img  src="https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg" alt="avatar Profile"/>
                </div>
                <h2>{user.name} {user.id}</h2>
            </div>

            <button onClick={handleOpen}>Exibir Pefil</button>
            <Modal open={open} onClose={handleClose}>
                <ModalUser user={user}/>
            </Modal>
        </DivPai>
    )
}

export default CardUsers;