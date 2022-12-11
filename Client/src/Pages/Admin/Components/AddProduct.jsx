import { useRef } from "react";
import Items from "@Assets/Models/ItemsModel";
import { HandleMessage } from "../Hooks/Message";

export function AddProduct() {
  const name = useRef();
  const price = useRef();
  const category = useRef();

  const [message, handleMessage] = HandleMessage();

  async function handleSubmit(e) {
    e.preventDefault();

    const request = await Items.createItem(
      name.current.value,
      price.current.value,
      category.current.value
    );

    handleMessage(request);
  }
  return (
    <form className="flex flex-col gap-2 p-2" onSubmit={(e) => handleSubmit(e)}>
      {message}

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

      <button className="btn fixed h-10 right-5 bottom-5">Ajouter</button>
    </form>
  );
}
