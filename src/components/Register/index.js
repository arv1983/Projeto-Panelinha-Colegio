const Register = () => {
  function submit(e) {
    e.preventDefault();
    console.log(e.target.username.value);
  }

  return (
    <>
      <form onSubmit={(e) => submit(e)}>
        <input type="text" name="username"></input>
        <input type="text" name="password"></input>
        <select name="type">
          <option value="pf">Dev</option>
          <option value="pj">Empresa</option>
        </select>
        <button>cadast</button>
      </form>
    </>
  );
};

export default Register;
