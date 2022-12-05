import { StoreItems } from "../Components/Store/StoreItems";
import { AdminPanel } from "../Components/Admin/Panel";
import { SideCart } from "../Components/Cart/SideCart";

import { useUserContext } from "../Contexts/UserContext";
import { useShopContext } from "../Contexts/ShopContext";

export function Store() {
  const { items } = useShopContext();
  const { user } = useUserContext();

  return (
    <div className="flex">
      {/* Displays shop items */}

      <div className="flex h-screen justify-evenly w-3/4 flex-wrap mt-20">
        {items.map((item) => (
          <StoreItems key={item.id} {...item} />
        ))}

        {items.length === 0 && (
          <span className="text-xl">
            Aucun article ne correspond à votre recherche.
          </span>
        )}
      </div>

      {/* Cart on the side */}
      <div className="flex flex-col w-1/4 shadow-lg top-20 fixed right-0">
        <SideCart />
      </div>

      {/* if admin, display admin panel */}

      <div className="fixed bottom-0 left-0 right-0">
        {user?.role === "admin" && <AdminPanel />}
      </div>
    </div>
  );
}
