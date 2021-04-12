import { Modal } from "@material-ui/core"
import ModalCompanay from "../ModalCompanay"
import {useState} from "react";

import {DivPai, btnVagas} from './style';

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

            <button onClick={handleOpen}>Abrir Vagas</button>
            <Modal open={open} onClose={handleClose}>
                <ModalCompanay user={user}/>
            </Modal>
        </DivPai>
    )
}

export default CardUsers;