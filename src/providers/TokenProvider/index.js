import React, { useState, useEffect } from "react";
export const TokenContext = React.createContext({});

export const TokenProvider = (props) => {
  const [token, setToken] = useState();

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("token")));
  }, []);

  return (
    <TokenContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      {props.children}
    </TokenContext.Provider>
  );
};

export const Token = () => React.useContext(TokenContext);
