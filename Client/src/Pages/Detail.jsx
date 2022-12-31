import { FindByID } from "@Helpers/FindByID";
import { useShopContext } from "@Common/Context/ShopContext";

export function ItemPage(id) {
  const { increaseItemQuantity } = useShopContext();
  const item = FindByID(id);
}
