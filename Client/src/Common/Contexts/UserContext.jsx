import { createContext, useContext } from "react";
import { UserContextEffect } from "./Hooks/UseEffect";

const Context = createContext({});

export function useUserContext() {
  return useContext(Context);
}

export function UserContext({ children }) {
  const [user, setUser] = UserContextEffect("user", null);

  const values = { user, setUser };

  return <Context.Provider value={values}>{children}</Context.Provider>;
}
