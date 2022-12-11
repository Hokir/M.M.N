import { useNavigate } from "react-router-dom";
import { useUserContext } from "@Setup/Contexts/UserContext";

export function DisconnectButton() {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();

  function handleLogout() {
    setUser(null);
    localStorage.clear();
    navigate("/", { replace: true });
  }

  return (
    <div className="flex flex-col items-end px-4">
      <span className="text-sm">
        {user?.name ? (
          <span>
            Bonjour, <span className="text-[#0a9396]">{user.name}</span>
          </span>
        ) : (
          <span>
            Bonjour, <span className="text-[#0a9396]">{user.email}</span>
          </span>
        )}
      </span>
      <button onClick={() => handleLogout()} className="text-xs">
        Se déconnecter
      </button>
    </div>
  );
}
