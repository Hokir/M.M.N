import { Link } from "react-router-dom";
import { Currency } from "@Helpers/Currency";
import { CartItems } from "@Components/Cart/CartItems";
import { useShopContext } from "@Common/Contexts/ShopContext";

export function SideCart() {
  const { cartItems, items } = useShopContext();

  return (
    <>
      <div className="flex justify-between items-center text-light bg-primary p-6 h-16 text-2xl font-bold">
        <span>Total</span>

        {Currency(
          cartItems.reduce((total, cartItem) => {
            const item = items.find((i) => i.id === cartItem.id);
            return total + (item?.price || 0) * cartItem.quantity;
          }, 0)
        )}
      </div>

      {cartItems.map((item) => (
        <CartItems key={item.id} {...item} />
      ))}

      <h3 className={cartItems.length > 0 ? "hidden" : "text-lg my-5 mx-2"}>
        Panier vide.
      </h3>
    </>
  );
}
