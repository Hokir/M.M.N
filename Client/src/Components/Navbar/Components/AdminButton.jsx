import { useShopContext } from "@Common/Contexts/ShopContext";

export function AdminButton() {
  const { status, ChangeStatus } = useShopContext();

  return (
    <button
      onClick={() => ChangeStatus()}
      className={`flex border rounded-xl w-14 h-6 items-center transition shadow-lg ${
        status && "bg-primary"
      }`}
    >
      <div
        className={`bg-light border rounded-xl transition w-7 h-7 shadow-lg ${
          status && "translate-x-7 bg-primary"
        }`}
      />
    </button>
  );
}
