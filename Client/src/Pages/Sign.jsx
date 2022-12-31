import { useRef } from "react";

import { Login } from "@Components/Sign/Login";
import { Register } from "@Components/Sign/Register";

import { Status } from "@Helpers/Status";

export function Sign() {
  const email = useRef();
  const password = useRef();

  const [status, ChangeStatus] = Status();

  return (
    <div className="flex flex-col items-center gap-4">
      {!status && <Login props={{ email, password }} />}

      {status && <Register props={{ email, password }} />}

      <span>
        {status ? "Déjà un compte ? " : "Vous êtes nouveau ? "}

        <button className="underline" onClick={() => ChangeStatus()}>
          {status ? "Se connecter" : "S'inscrire"}
        </button>
      </span>
    </div>
  );
}
