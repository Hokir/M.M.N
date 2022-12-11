import { StoreItems } from "@Components/Store/StoreItems";
import { AdminPanel } from "@Components/Admin/Panel";
import { SideCart } from "@Components/Cart/SideCart";

import { useUserContext } from "@Common/Contexts/UserContext";
import { useShopContext } from "@Common/Contexts/ShopContext";

export function Store() {
  const { items } = useShopContext();
  const { user } = useUserContext();

  return (
    <div className="flex">
      {/* Display shop items */}

      <div className="flex flex-wrap gap-8 justify-start w-3/4">
        {items.map((item) => (
          <StoreItems key={item.id} {...item} />
        ))}

        {items.length === 0 && (
          <span className="text-xl">
            Aucun article ne correspond à votre recherche.
          </span>
        )}
      </div>

      {/* Display SideCart */}

      <div className="w-1/4">
        <SideCart />
      </div>

      {/* if admin, admin panel */}

      {user?.role === "admin" && (
        <div className="fixed bottom-0 left-0 right-0">
          <AdminPanel />
        </div>
      )}
    </div>
  );
}
