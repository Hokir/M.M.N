import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { post } from "@Common/API/Axios";
import { useUserContext } from "@Common/Contexts/UserContext";

export function Log(props) {
  const { email, password } = props;
  const [message, setMessage] = useState();

  const navigate = useNavigate();
  const { setUser } = useUserContext();

  async function HandleLogin(e) {
    e.preventDefault();

    await post("/users/login", {
      data: { email: email.current.value, password: password.current.value },
    })
      .then((res) => {
        setUser(res.data.user);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("refresh_token", res.data.refresh_token);
        navigate("/", { replace: true });
      })
      .catch((err) => {
        if (err.response.data.message?.errors) {
          return setMessage(err.response.data.message.errors[0].msg);
        }

        return setMessage(err.response.data.message);
      });
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
