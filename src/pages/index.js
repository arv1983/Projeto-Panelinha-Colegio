import { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
const PageRegister = () => {
  const [status, setStatus] = useState(false);

  const changeModal = () => {
    setStatus(true);
  };

  return (
    <>
      <Login />

      <Register />
    </>
  );
};

export default PageRegister;
