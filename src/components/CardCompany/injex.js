import { Modal } from "@material-ui/core";
import {useState} from "react";
import{ DivPai} from './style'

const CardCompany = ({devs}) =>{
    const [open, setOpen] = useState(false);

    const handleOpen = (e) => {
        setOpen(true);
      };
      const handleClose = (e) => {
        setOpen(false);
      };

    return(
        <DivPai>
             <div >
                <div>
                    <img  src="https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg" alt="avatar Profile"/>
                </div>
                <h2>{devs.name}</h2>
            </div>
            <button onClick={handleOpen}>Perfil Dev</button>
            <Modal open={open} onClose={handleClose}>
                <div>
                    <h3>{devs.name}</h3>
                </div>
            </Modal>
        </DivPai>
    )
}
export default CardCompany;