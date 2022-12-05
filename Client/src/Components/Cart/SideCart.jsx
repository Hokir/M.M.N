import { useShopContext } from "../../Contexts/ShopContext";
import { CartItems } from "./CartItems";

export function SideCart() {
  const { cartItems } = useShopContext();

  return (
    <>
      <div className="flex p-4 items-center justify-between h-16 bg-primary shadow-2xl text-3xl">
        <span>Total</span>
      </div>

      <h3 className={cartItems.length > 0 ? "hidden" : "text-lg my-5 mx-2"}>
        Panier vide.
      </h3>

      {cartItems.map((item) => (
        <CartItems key={item.id} {...item} />
      ))}

      <div className="flex justify-center w-full bg-secondary">
        <button className="w-full p-4">Suivant</button>
      </div>
    </>
  );
}
