import { useUserContext } from "@Common/Contexts/UserContext";

export function AdminButton() {
  const { adminStatus, changeAdminStatus } = useUserContext();

  return (
    <button
      onClick={() => changeAdminStatus()}
      className={`flex border rounded-xl w-14 h-6 items-center transition shadow-lg ${
        adminStatus && "bg-primary"
      }`}
    >
      <div
        className={`dark border rounded-xl transition w-7 h-7 shadow-lg ${
          adminStatus && "translate-x-7"
        }`}
      />
    </button>
  );
}
