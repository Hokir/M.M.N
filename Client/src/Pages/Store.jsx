import { StoreItems } from "@Components/Store/StoreItems";
import { AdminPanel } from "@Components/Admin/Panel";
import { SideCart } from "@Components/Cart/SideCart";

import { useUserContext } from "@Common/Contexts/UserContext";
import { useShopContext } from "@Common/Contexts/ShopContext";

import { useState } from "react";
import { Link } from "react-router-dom";

export function Store() {
  const { products, viewCart } = useShopContext();
  const { user, adminStatus } = useUserContext();
  const [productId, setProductId] = useState();

  return (
    <div className="flex justify-start px-6 gap-6 pt-7 flex-wrap">
      {products.map((product) => (
        <Link
          to={!adminStatus && { pathname: product.name }}
          onClick={() => localStorage.setItem("detail", product.id)}
          key={product.id}
        >
          <StoreItems {...product} props={{ setProductId }} />
        </Link>
      ))}

      {viewCart && (
        <div className="fixed dark top-20 w-96 right-0 bottom-0">
          <SideCart />
        </div>
      )}

      {user?.role === "admin" && adminStatus && (
        <div className="fixed bottom-0 left-0 right-0">
          <AdminPanel props={{ id: productId }} />
        </div>
      )}
    </div>
  );
}
