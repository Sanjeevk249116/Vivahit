import React, { createContext, useEffect, useState } from "react";
export const AppContextData = createContext();
function AuthContext({ children }) {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");
  useEffect(() => {
    if (currency === "INR") {
      setSymbol("₹");
    } else if (currency === "USD") {
      setSymbol("$");
    }
  }, [currency]);
  return (
    <AppContextData.Provider
      value={{ currency, setCurrency, symbol, setSymbol }}
    >
      {children}
    </AppContextData.Provider>
  );
}

export default AuthContext;
