import { useState } from "react";
import { ModifyForm } from "./Components/ModifyForm";
import { CreateForm } from "./Components/CreateForm";
import { Buttons } from "./Components/Buttons";
import { useEffect } from "react";

export function AdminPanel(props) {
  const [status, setStatus] = useState("Add");

  useEffect(() => {
    if (props.id) setStatus("Edit");
  }, [props.id]);

  return (
    <div className="flex h-80 bg-dark text-light">
      {status === "Add" ? <CreateForm /> : <ModifyForm id={props.id} />}

      <Buttons setStatus={setStatus} />
    </div>
  );
}
