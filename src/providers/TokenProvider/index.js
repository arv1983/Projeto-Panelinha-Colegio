import React, { useState, useEffect } from "react";
export const TokenContext = React.createContext({});

export const TokenProvider = (props) => {
  const [token, setToken] = useState(() => {
    const localToken = localStorage.getItem("token") || "";
    if (!localToken) {
      return "";
    }
    return JSON.parse(localToken);
  });

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
