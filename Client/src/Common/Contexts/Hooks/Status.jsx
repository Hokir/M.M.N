import { useState } from "react";

export function Status() {
  const [status, setStatus] = useState();

  function changeStatus() {
    return setStatus((status) => !status);
  }

  return [status, changeStatus];
}
