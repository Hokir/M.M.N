import { useEffect, useState } from "react";
import { FindByID } from "@Helpers/FindByID";

export function getCurrentProduct(id) {
  const [values, setValues] = useState();

  const currentProduct = FindByID(id);

  useEffect(() => {
    if (currentProduct) {
      return setValues({ ...values, ...currentProduct });
    }
  }, [id]);

  return values;
}
