import "@Assets/CSS/App.css";

import { Link } from "react-router-dom";
import { Profil as ProfilImg } from "@Assets/Images/Profil.jsx";
import { Cart as CartImg } from "@Assets/Images/Cart.jsx";

import { useUserContext } from "@Common/Contexts/UserContext";
import { useShopContext } from "@Common/Contexts/ShopContext";

import { AdminButton } from "./Components/AdminButton";
import { UserButton } from "./Components/UserButton";

export function Navbar() {
  const { user } = useUserContext();
  const { changeViewCart, cartQuantity } = useShopContext();

  return (
    <nav className="sticky top-0 flex dark h-20 shadow-2xl p-6">
      <ul className="flex items-center justify-between h-full w-full">
        <li className="text-xl">
          <Link to="/">M.M.N</Link>
        </li>

        <li className="flex items-center">
          {/* If admin, show admin button */}

          {user?.role === "admin" && <AdminButton />}

          {/* If connected */}

          {user && <UserButton />}

          <button className="mr-2" onClick={() => changeViewCart()}>
            <CartImg />
            {cartQuantity > 0 && (
              <span className="flex absolute translate-x-6 -translate-y-4">
                {cartQuantity}
              </span>
            )}
          </button>

          <Link className="ml-2" to={user ? "profil" : "connexion"}>
            <ProfilImg />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
