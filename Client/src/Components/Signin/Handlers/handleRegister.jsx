import User from "@Common/API/User";

export async function handleRegister({ values, setMessage }) {
  if (values.password !== values.confirmation)
    return setMessage("Les mots de passe ne sont pas identiques !");

  const request = await User.createAccount({ ...values, role: "client" });

  if (request?.message?.errors)
    return setMessage(request.message.errors[0].msg);

  if (request?.message) return setMessage(request.message);

  return setMessage(request);
}
