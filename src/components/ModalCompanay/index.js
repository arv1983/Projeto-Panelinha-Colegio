import {DivPai} from './syle'

const ModalCompanay = ({user}) =>{
    return (
        <DivPai>
            <h3>Empresa: {user.name}</h3>
            <p>Vagas da empresa</p>
            <p>Nome da vaga .  .  .  ( + caditar) </p>
        </DivPai>
    )
}

export default ModalCompanay