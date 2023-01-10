import { useState } from "react";

import { getCurrentProduct } from "./Hooks/getCurrentProduct";

import { AddProduct } from "./Components/AddProduct";
import { ModifyProduct } from "./Components/ModifyProduct";

import { useEffect } from "react";

export function AdminPanel({ props }) {
  const product = getCurrentProduct(props.id);
  const [currentProduct, setCurrentProduct] = useState({ ...product });
  const [createProductStatus, setStatus] = useState(true);

  useEffect(() => {
    return setCurrentProduct({ ...product });
  }, [props.id]);

  function onChange(e) {
    return setCurrentProduct({
      ...currentProduct,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="flex flex-col">
      {createProductStatus ? (
        <AddProduct props={{ currentProduct, onChange }} />
      ) : (
        <ModifyProduct props={{ currentProduct, onChange }} />
      )}
    </div>
  );
}
