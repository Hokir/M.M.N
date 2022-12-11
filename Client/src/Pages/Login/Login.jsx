import { useRef, useState } from "react";
import { HandleMessage } from "./Hooks/Message";
import { useUserContext } from "@Setup/Contexts/UserContext";

import Users from "@Assets/Models/UsersModel";

export function Login() {
  const email = useRef();
  const password = useRef();
  const password2 = useRef();

  const [swap, setSwap] = useState();
  const [message, handleMessage] = HandleMessage();

  const { setUser } = useUserContext();

  function handleSwap(e) {
    e.preventDefault();

    setSwap((status) => !status);
  }

  async function handleLogin(e) {
    e.preventDefault();

    const request = await Users.getUser(
      email.current.value,
      password.current.value
    );

    if (request.data.message) {
      return handleMessage(request.data.message);
    }

    console.log(request);

    setUser(request.data.user);
    localStorage.setItem("user", JSON.stringify(request.data.user));
    localStorage.setItem("token", request.data.token);
    localStorage.setItem("refresh_token", request.data.refresh_token);
    navigate("/", { replace: true });
  }

  async function handleRegistration(e) {
    e.preventDefault();
  }

  return (
    <form
      className="flex flex-col items-center translate-y-20"
      onSubmit={(e) => {
        swap ? handleRegistration(e) : handleLogin(e);
      }}
    >
      <h3 className="text-sm">{message}</h3>

      <h1 className="text-lg font-bold">
        {swap ? "Inscription" : "Connexion"}
      </h1>

      <div className="flex flex-col mt-2 mb-4">
        <label>E-mail</label>
        <input className="text-dark" type="text" required ref={email} />
        <label>Mot de passe</label>
        <input className="text-dark" type="password" required ref={password} />
        {swap && (
          <>
            <label>Confirmation</label>
            <input type="password" required ref={password2} />
          </>
        )}
      </div>

      <button type="submit" className="btn">
        {swap ? "Inscription" : "Connexion"}
      </button>

      <span>
        {swap ? "J'ai déjà un compte ? " : "Je n'ai pas encore de compte ? "}
        <button
          className="underline hover:text-primary"
          onClick={(e) => handleSwap(e)}
        >
          {swap ? "Je me connecte" : "Je m'inscris"}
        </button>
      </span>
    </form>
  );
}
