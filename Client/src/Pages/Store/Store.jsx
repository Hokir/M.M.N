import { AdminPanel } from "@Pages/Admin/Panel";
import { StoreItems } from "./Components/Store/StoreItems";
import { SideCart } from "./Components/Cart/SideCart";

import { useUserContext } from "@Common/Contexts/UserContext";
import { useShopContext } from "@Common/Contexts/ShopContext";

export function Store() {
  const { items, status } = useShopContext();
  const { user } = useUserContext();

  return (
    <div className="flex">
      {/* Displays shop items */}

      <div className="flex flex-wrap justify-center py-6 gap-16 border bg-light">
        {items.map((item) => (
          <StoreItems key={item.id} {...item} />
        ))}
      </div>

      {/* Display side cart */}

      <div>
        <SideCart />
      </div>

      {/* if admin, display admin panel */}

      {user?.role === "admin" && status && (
        <div className="fixed bottom-0 w-full h-64">
          <AdminPanel />
        </div>
      )}
    </div>
  );
}
