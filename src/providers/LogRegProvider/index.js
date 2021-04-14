import React, { useState, useEffect } from "react";
export const LogRegContext = React.createContext({});

export const LogRegProvider = (props) => {
  const [status, setStatus] = useState(false);

  return (
    <LogRegContext.Provider
      value={{
        status,
        setStatus,
      }}
    >
      {props.children}
    </LogRegContext.Provider>
  );
};

export const LogReg = () => React.useContext(LogRegContext);
