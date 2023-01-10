import { Currency } from "@Helpers/Currency";

export function StoreItems({ id, name, price, image, props }) {
  return (
    <div onClick={() => props.setProductId(id)} className="flex flex-col">
      <img src={image} className="object-contain w-64" />

      <div className="flex flex-col p-4 dark">
        <span className="text-sm">{name}</span>
        <span className="text-sm">{Currency(price)}</span>
      </div>
    </div>
  );
}
