import { useRef } from "react";

import { Login } from "@Components/Signin/Login";
import { Register } from "@Components/Signin/Register";

import { Status } from "@Helpers/Status";
import { useState } from "react";

export function Signin() {
  const [values, setValues] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmation: "",
  });

  const [status, ChangeStatus] = Status();

  function onChange(e) {
    return setValues({ ...values, [e.target.name]: e.target.value });
  }

  return (
    <div className="dark pt-7 h-screen flex flex-col items-center gap-4">
      {status ? (
        <Register props={{ values, onChange }} />
      ) : (
        <Login props={{ values, onChange }} />
      )}

      <span>
        {status ? "Déjà un compte ? " : "Vous êtes nouveau ? "}

        <button className="underline" onClick={() => ChangeStatus()}>
          {status ? "Se connecter" : "S'inscrire"}
        </button>
      </span>
    </div>
  );
}
