import { useState } from "react";

export function Status() {
  const [status, setStatus] = useState(false);

  function ChangeStatus() {
    return setStatus((status) => !status);
  }

  return [status, ChangeStatus];
}
