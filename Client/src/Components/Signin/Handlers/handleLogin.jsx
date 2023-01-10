import User from "@Common/API/User";

export async function handleLogin({ values, setMessage, navigate, setUser }) {
  const request = await User.getAccount({ ...values });

  if (request?.message?.errors)
    return setMessage(request.message.errors[0].msg);

  if (request?.message) return setMessage(request.message);

  if (request?.user) {
    localStorage.setItem("user", JSON.stringify(request.user));
    localStorage.setItem("token", request.token);
    localStorage.setItem("refresh_token", request.refresh_token);
    setUser(request.user);
    return navigate("/", { replace: true });
  }

  return setMessage("Une erreur s'est produite");
}
