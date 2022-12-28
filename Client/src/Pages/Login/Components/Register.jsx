import { useState } from "react";
import { post } from "@Common/API/axios";

export function Register(props) {
  const { email, password } = props;
  const [message, setMessage] = useState();

  async function HandleRegister(e) {
    e.preventDefault;

    post("/users/register", {
      data: {
        email: email.current.value,
        password: password.current.value,
        role: "client",
      },
    })
      .then((res) => setMessage(res.data))
      .catch((err) => {
        if (err.response.data.message?.errors) {
          return setMessage(err.response.data.message.errors[0].msg);
        }

        setMessage(err.response.data.message);
      });
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
