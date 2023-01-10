import Shop from "@Common/API/Shop";

import { productForm, selectForm } from "@Components/Forms/forms";
import { Input } from "@Components/Forms/input";
import { Select } from "@Components/Forms/select";

import { useState } from "react";

export function AddProduct({ props }) {
  const { image, name, price, category } = props.currentProduct;
  const [message, setMessage] = useState();

  async function onSubmit(e) {
    e.preventDefault();

    Shop.createProduct("/shop", { ...props.currentProduct }).then((res) => {
      if (res?.message) return setMessage(res.message);
      return setMessage(res);
    });
  }

  return (
    <form onSubmit={(e) => onSubmit(e)} className="flex items-center dark h-80">
      {image ? (
        <img src={image} className="object-contain w-36 m-4" />
      ) : (
        <div className="flex border rounded-md justify-center items-center h-36 w-36 m-4">
          Aucune image
        </div>
      )}

      <div className="flex flex-col items-start gap-2">
        {productForm.map((item) => {
          return (
            <span key={item.name}>
              <Input {...item} onChange={(e) => props.onChange(e)} />
            </span>
          );
        })}

        <button className="border px-6 py-2 my-2 rounded-md">
          Ajouter un nouveau produit
        </button>
      </div>

      {message && <span>{message}</span>}

      <select
        name="category"
        onChange={(e) => props.onChange(e)}
        className="text-dark py-2 px-6"
      >
        {selectForm.map((option) => {
          return <Select {...option} key={option.name} />;
        })}
      </select>
    </form>
  );
}
