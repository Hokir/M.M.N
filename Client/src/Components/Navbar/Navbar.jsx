import "@Assets/CSS/App.css";
import { Link } from "react-router-dom";
import { Profil as ProfilImg } from "@Assets/Images/Profil.jsx";
import { useUserContext } from "@Common/Contexts/UserContext";
import { AdminButton } from "@Components/Navbar/Components/AdminButton";
import { UserButton } from "./Components/UserButton";

export function Navbar() {
  const { user } = useUserContext();

  return (
    <nav className="flex bg-dark text-light h-20 shadow-xl p-6">
      <ul className="flex items-center justify-between h-full w-full">
        <li className="text-xl">
          <Link to="/">M.M.N</Link>
        </li>

        <li>
          {/* If admin, show admin button */}

          {user?.role === "admin" && <AdminButton />}

          {/* If connected */}

          {user && <UserButton />}

          <Link to={user ? "profil" : "connexion"}>
            <ProfilImg />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
