import { useUserContext } from "@Common/Contexts/UserContext";
import { useNavigate } from "react-router-dom";

export function UserButton() {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();

  function Disconnect() {
    setUser(null);
    localStorage.clear();
    navigate("/");
  }

  return (
    <div className="flex items-end flex-col mx-4">
      <span>
        Bonjour, <span className="text-[#16a34a]">{user.email}</span>
      </span>

      <button className="text-xs" onClick={() => Disconnect()}>
        Se déconnecter
      </button>
    </div>
  );
}
