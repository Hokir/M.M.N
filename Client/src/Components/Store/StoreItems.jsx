import { useShopContext } from "@Common/Contexts/ShopContext";

export function StoreItems({ id, name, price }) {
  const { increaseItemQuantity } = useShopContext();

  return (
    <div className="flex flex-col w-[20%] h-1/3 p-7 border rounded-xl shadow-xl wrap">
      <span className="text-6xl h-2/3">Image</span>

      <h3 className="text-2xl my-4">{name}</h3>

      <div className="flex w-full justify-between items-center">
        <span>{price}</span>

        <button className="btn" onClick={() => increaseItemQuantity(id)}>
          Ajouter
        </button>
      </div>
    </div>
  );
}
