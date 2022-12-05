import { Navigate } from "../Hooks/Navigate";
import { createContext, useContext, useState } from "react";
import { UserContextEffect } from "../Hooks/UseEffect";

const Context = createContext({});

export function useUserContext() {
  return useContext(Context);
}

export function UserContext({ children }) {
  const navigate = Navigate();
  const [user, setUser] = UserContextEffect();

  function handleLogout() {
    setUser(null);
    localStorage.clear();
    navigate("/", { replace: true });
  }

  const values = { handleLogout, user, setUser };

  return <Context.Provider value={values}>{children}</Context.Provider>;
}
