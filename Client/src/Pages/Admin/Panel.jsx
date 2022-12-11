import { useState } from "react";
import { AddProduct } from "./Components/AddProduct";
import { ModifyProduct } from "./Components/ModifyProduct";

export function AdminPanel() {
  const [status, setStatus] = useState(false);

  return (
    <form className="flex text-dark bg-light w-full h-full">
      <div className="absolute -translate-y-9">
        <button
          type="button"
          onClick={() => setStatus(false)}
          className="btn bg-light"
        >
          Ajouter un produit
        </button>

        <button
          type="button"
          onClick={() => setStatus(true)}
          className="btn bg-light"
        >
          Modifier un produit
        </button>
      </div>

      {/* Add an article */}

      {!status && <AddProduct />}

      {/* Modify an article */}

      {status && <ModifyProduct />}
    </form>
  );
}
