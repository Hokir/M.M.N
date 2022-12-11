import "@Assets/Styles/App.css";
import { Link } from "react-router-dom";

import { DisconnectButton } from "./Components/DisconnectButton";
import { useUserContext } from "@Common/Contexts/UserContext";
import { ProfilImage } from "@Assets/SVG/Profil.jsx";

export function Navbar() {
  const { user } = useUserContext();

  return (
    <nav className="sticky top-0 bg-dark p-4 h-20">
      <ul className="flex items-center justify-between h-full w-full">
        <li className="text-xl">
          <Link to="/">M.M.N</Link>
        </li>

        <li className="flex items-center">
          {/* If admin, show admin button */}

          {user?.role === "admin" && <AdminButton />}

          {/* If connected, show disconnect button */}

          {user && <DisconnectButton />}

          <Link to={user ? "profil" : "connexion"}>
            <ProfilImage />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
