import { useRef } from "react";

export function ModifyProduct() {
  const name = useRef();
  const price = useRef();
  const category = useRef();

  return (
    <form className="flex flex-col gap-2 p-2" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        className="p-2 h-10"
        placeholder="Product name"
        ref={name}
      />

      <input type="text" className="p-2 h-10" placeholder="Price" ref={price} />

      <select className="h-10 p-2" ref={category}>
        <option value="Pantalon">Pantalon</option>
        <option value="Robe">Robe</option>
      </select>

      <button className="btn fixed h-10 right-5 bottom-5">Modifier</button>
    </form>
  );
}
