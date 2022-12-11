import { useShopContext } from "@Common/Contexts/ShopContext";
import { useUserContext } from "@Common/Contexts/UserContext";

export function AdminButton() {
  const { user } = useUserContext();
  const { status, changeStatus } = useShopContext();

  return (
    <>
      {user?.role === "admin" && (
        <button
          onClick={() => changeStatus()}
          className={`flex border rounded-xl w-14 h-6 items-center shadow-lg transition ${
            status && "bg-[#2a9d8f]"
          }`}
        >
          <div
            className={`border rounded-xl w-7 h-7 bg-dark shadow transition ${
              status && "translate-x-7"
            }`}
          />
        </button>
      )}
    </>
  );
}
