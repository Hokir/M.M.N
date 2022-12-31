import { useState } from "react";
import User from "@Common/API/User";
import { useUserContext } from "@Common/Contexts/UserContext";

export function Login({ props }) {
  const { email, password } = props;
  const { setUser } = useUserContext();
  const [message, setMessage] = useState();

  async function HandleLogin(e) {
    e.preventDefault();

    const data = {
      email: email.current.value,
      password: password.current.value,
    };

    await User.getAccount({ ...data })
      .then((res) => {
        setUser(res.user);
        localStorage.setItem("user", JSON.stringify(res.user));
        localStorage.setItem("token", res.token);
        localStorage.setItem("refresh_token", res.refresh_token);
        return;
      })
      .catch((err) => console.log(err));
  }

  return (
    <form className="flex flex-col items-center gap-4">
      <h1 className="text-xl font-bold">Connexion</h1>

      {message}

      <div className="flex flex-col items-start">
        <label>E-mail</label>
        <input className="text-dark" type="text" ref={email} />

        <label>Mot de passe</label>
        <input className="text-dark" type="password" ref={password} />
      </div>

      <button className="btn" onClick={(e) => HandleLogin(e)}>
        Se connecter
      </button>
    </form>
  );
}
