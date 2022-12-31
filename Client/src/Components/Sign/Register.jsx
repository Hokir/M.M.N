import { useState } from "react";
import User from "@Common/API/User";

export function Register({ email, password }) {
  const [message, setMessage] = useState();

  async function HandleRegister(e) {
    e.preventDefault;

    const data = {
      email: email.current.value,
      password: password.current.value,
      role: "client",
    };

    const request = await User.createAccount("/users/create", { ...data });
    console.log(request);
  }

  return (
    <form className="flex flex-col items-center gap-4">
      <h1 className="text-xl font-bold">Inscription</h1>

      {message}

      <div className="flex flex-col items-start">
        <label>E-mail</label>
        <input className="text-dark" type="text" ref={email} />

        <label>Mot de passe</label>
        <input className="text-dark" type="password" ref={password} />
      </div>

      <button className="btn" onClick={(e) => HandleRegister(e)}>
        S'inscrire
      </button>
    </form>
  );
}
