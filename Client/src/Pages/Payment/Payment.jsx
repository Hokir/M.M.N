import { CartItems } from "./Components/CartItems";
import { ClickAndCollect } from "./Components/ClickAndCollectPage";

import { useShopContext } from "@Common/Contexts/ShopContext";
import { useUserContext } from "@Common/Contexts/UserContext";

import { CurrencyFormat } from "./Hooks/CurrencyFormatter";

export function Payment() {
  const { cartItems, items } = useShopContext();
  console.log(cartItems);
  const { user } = useUserContext();

  return (
    <>
      {cartItems &&
        cartItems.map((item) => <CartItems key={item.id} {...item} />)}

      {CurrencyFormat(
        cartItems.reduce((total, cartItem) => {
          const item = items.find((i) => i.id === cartItem.id);
          return total + (item?.price || 0) * cartItem.quantity;
        }, 0)
      )}

      <h3>Choisir un mode de livraison</h3>

      <ClickAndCollect />
    </>
  );
}
