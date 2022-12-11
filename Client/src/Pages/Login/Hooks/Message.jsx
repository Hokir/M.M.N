import { useState } from "react";

export function HandleMessage() {
  const [message, setMessage] = useState();

  function handleMessage(e) {
    if (e.errors) {
      return setMessage(e.errors[0].msg);
    }

    if (e.data) {
      return setMessage(e.data.message);
    }

    return setMessage(e.message);
  }

  return [message, handleMessage];
}
