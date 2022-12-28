import { useRef } from "react";

import { Log } from "./Components/Log";
import { Register } from "./Components/Register";

import { Status } from "@Helpers/Status";

export function Login() {
  const email = useRef();
  const password = useRef();

  const [status, ChangeStatus] = Status();

  return (
    <div className="flex flex-col items-center gap-4">
      {!status && <Log email={email} password={password} />}

      {status && <Register email={email} password={password} />}

      <span>
        {status ? "Déjà un compte ? " : "Vous êtes nouveau ? "}

        {/* Switch button */}

        <button className="underline" onClick={() => ChangeStatus()}>
          {status ? "Se connecter" : "S'inscrire"}
        </button>
      </span>
    </div>
  );
}
