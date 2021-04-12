const CardUsers = ({user}) =>{
    return(
        <div style={{backgroundColor: "gray", width: "200px", border: "1px solid black"}}>
            <img style={{width: "50px", borderRadius: "50%"}} src="https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg" alt="avatar Profile"/>
            <h1>{user.name}</h1>
            <button>Abrir Perfil</button>
        </div>
    )
}

export default CardUsers;