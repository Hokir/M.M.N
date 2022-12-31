export function Buttons(props) {
  return (
    <>
      <button onClick={() => props.setStatus("Add")} className="p-2">
        Ajouter un produit
      </button>

      <button onClick={() => props.setStatus("Modify")} className="p-2">
        Modifier un produit
      </button>
    </>
  );
}
