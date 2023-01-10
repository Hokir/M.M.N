import { useUserContext } from "@Common/Contexts/UserContext";

import { modifyProfile } from "@Components/Forms/forms";
import { Input } from "@Components/Forms/input";

import { useState } from "react";

export function Profil() {
  const { user } = useUserContext();
  const [formStatus, setStatus] = useState(false);

  function changeStatus() {
    return setStatus((prev) => !prev);
  }

  return (
    <div className="flex flex-col h-screen primary p-3">
      <h1 className="text-2xl py-6">Profil</h1>
      <h2 className="text-xl">Informations personnelles</h2>

      {!formStatus ? (
        <div className="flex flex-col">
          <span>Nom : {user.surname}</span>
          <span>Prénom : {user.name}</span>
          <span>E-mail : {user.email}</span>
          <span className="mt-2">
            <button onClick={() => changeStatus()} className="dark_button">
              Modifier
            </button>
          </span>
        </div>
      ) : (
        <form className="flex flex-col py-1">
          {modifyProfile.map((values) => {
            return (
              <span className="flex" key={values.name}>
                <Input {...values} />
              </span>
            );
          })}

          <span className="mt-3">
            <button onClick={() => changeStatus()} className="dark_button">
              Sauvegarder
            </button>
          </span>
        </form>
      )}
    </div>
  );
}
