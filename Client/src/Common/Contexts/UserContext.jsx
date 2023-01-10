import { createContext, useContext } from "react";
import { UserContextEffect } from "./Hooks/UseEffect";
import { Status } from "@Helpers/Status";

const Context = createContext({});

export function useUserContext() {
  return useContext(Context);
}

export function UserContext({ children }) {
  const [user, setUser] = UserContextEffect("user", null);
  const [adminStatus, changeAdminStatus] = Status();

  const values = { user, setUser, adminStatus, changeAdminStatus };

  return <Context.Provider value={values}>{children}</Context.Provider>;
}
