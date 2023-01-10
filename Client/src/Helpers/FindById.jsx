import { useShopContext } from "@Common/Contexts/ShopContext";

export function FindByID(id) {
  const { products } = useShopContext();
  const product = products.find((i) => i.id === id);

  if (!product) return null;
  return product;
}
