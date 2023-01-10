import { useState } from "react";

import { Input } from "@Components/Forms/Input";
import { registerForm } from "@Components/Forms/forms";

import { handleRegister } from "./Handlers/handleRegister";

export function Register({ props }) {
  const { values, onChange } = props;
  const [message, setMessage] = useState();

  return (
    <form className="flex flex-col gap-4">
      <h1 className="text-xl text-center">Inscription</h1>

      {message && <span className="text-sm text-center">{message}</span>}

      {registerForm.map((values) => {
        return (
          <Input key={values.name} {...values} onChange={(e) => onChange(e)} />
        );
      })}

      <button
        onClick={(e) => {
          e.preventDefault();
          return handleRegister({ values, setMessage });
        }}
        className="button"
      >
        S'inscrire
      </button>
    </form>
  );
}
