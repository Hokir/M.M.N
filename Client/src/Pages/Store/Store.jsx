import { StoreItems } from "./Components/StoreItems";
import { AdminPanel } from "@Components/Admin/Panel";
import { SideCart } from "./Components/SideCart";

import { useUserContext } from "@Common/Contexts/UserContext";
import { useShopContext } from "@Common/Contexts/ShopContext";
import { useState } from "react";

export function Store() {
  const { items, status } = useShopContext();
  const [itemId, setId] = useState();
  const { user } = useUserContext();

  return (
    <div className="flex">
      <div className="flex flex-wrap w-3/4 gap-20 pl-6">
        {items.map((item) => (
          <div key={item.id} onClick={() => setId(item.id)}>
            <StoreItems {...item} />
          </div>
        ))}
      </div>

      <div className="fixed bg-light text-dark right-0 bottom-0 top-20 w-1/4 border">
        <SideCart />
      </div>

      {user?.role === "admin" && status && (
        <div className="fixed bottom-0 left-0 right-0">
          <AdminPanel id={itemId} />
        </div>
      )}
    </div>
  );
}
