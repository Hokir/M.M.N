import "../../CSS/App.css";
import { Link } from "react-router-dom";
import { Profil as ProfilImg } from "../../Images/Profil.jsx";
import { useUserContext } from "../../Contexts/UserContext";

export function Navbar() {
  const { user, handleLogout, setAdminMode, adminMode } = useUserContext();

  return (
    <nav className="flex w-full bg-light shadow-2xl p-4 h-20 fixed">
      <ul className="flex items-center justify-between h-full w-full">
        <li className="text-xl">
          <Link to="/">M.M.N</Link>
        </li>

        <span className="flex items-center">
          {/* If admin, show admin button */}

          {user?.role === "admin" && (
            <li className="flex items-center">
              <button
                onClick={() => setAdminMode((status) => !status)}
                className="flex border rounded-xl w-14 h-6 items-center shadow-lg"
              >
                <div
                  className={`border rounded-xl transition w-7 h-7 bg-dark shadow-lg ${
                    adminMode && "translate-x-7"
                  }`}
                />
              </button>
            </li>
          )}

          <li className="flex items-center">
            {/* If connected */}

            {user && (
              <div className="flex items-end flex-col mx-4">
                <span>
                  Bonjour, <span className="text-[#16a34a]">{user.email}</span>
                </span>

                <Link className="text-xs" onClick={() => handleLogout()}>
                  Se déconnecter
                </Link>
              </div>
            )}

            <Link to={user ? "profil" : "connexion"}>
              <ProfilImg />
            </Link>
          </li>
        </span>
      </ul>
    </nav>
  );
}
