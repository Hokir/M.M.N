import { useState } from "react";
import { Modify } from "./Components/Modify";
import { Create } from "./Components/Create";
import { Buttons } from "./Components/Buttons";
import { useEffect } from "react";

export function AdminPanel(props) {
  const [status, setStatus] = useState("Add");

  useEffect(() => {
    if (props.id) setStatus("Edit");
  }, [props.id]);

  return (
    <div className="flex h-80 bg-light text-dark">
      {status === "Add" ? <Create /> : <Modify id={props.id} />}

      <Buttons setStatus={setStatus} />
    </div>
  );
}
