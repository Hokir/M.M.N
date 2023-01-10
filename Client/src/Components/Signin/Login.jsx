import { useState } from "react";

import { Input } from "@Components/Forms/Input";
import { loginForm } from "@Components/Forms/forms";

import { handleLogin } from "./Handlers/HandleLogin";
import { useNavigate } from "react-router-dom";

import { useUserContext } from "@Common/Contexts/UserContext";

export function Login({ props }) {
  const { onChange, values } = props;
  const { setUser } = useUserContext();
  const navigate = useNavigate();

  const [message, setMessage] = useState();

  return (
    <form className="flex flex-col gap-4">
      <h1 className="text-xl text-center">Connexion</h1>

      {message && <span className="text-sm text-center">{message}</span>}

      {loginForm.map((values) => {
        return (
          <Input key={values.name} {...values} onChange={(e) => onChange(e)} />
        );
      })}

      <button
        onClick={(e) => {
          e.preventDefault();
          return handleLogin({ values, setMessage, navigate, setUser });
        }}
        className="button"
      >
        Se connecter
      </button>
    </form>
  );
}
