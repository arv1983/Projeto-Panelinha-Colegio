const Login = () => {
  function submit(e) {
    e.preventDefault();
    console.log(e.target.username.value);
  }

  return (
    <>
      <form onSubmit={(e) => submit(e)}>
        <input type="text" name="username"></input>
        <input type="text" name="password"></input>

        <button>Login </button>
      </form>
    </>
  );
};

export default Login;
