import { useShopContext } from "@Common/Contexts/ShopContext";
import { CartItems } from "./CartItems";

export function SideCart() {
  const { cartItems } = useShopContext();

  return (
    <div>
      <div className="flex justify-between items-center text-light bg-primary p-6 h-16 text-2xl font-bold">
        <span>Total</span>
      </div>

      {cartItems.map((item) => (
        <CartItems key={item.id} {...item} />
      ))}

      <h3 className={cartItems.length > 0 ? "hidden" : "text-lg my-5 mx-2"}>
        Panier vide.
      </h3>

      <div className="flex justify-center w-full bg-secondary">
        <button className="w-full p-4">Suivant</button>
      </div>
    </div>
  );
}
