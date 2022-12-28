export function Buttons(props) {
  return (
    <>
      <button
        onClick={() => props.setStatus("Add")}
        className="p-2 bg-dark text-light"
      >
        Ajouter un produit
      </button>

      <button
        onClick={() => props.setStatus("Modify")}
        className="p-2 bg-dark text-light"
      >
        Modifier un produit
      </button>
    </>
  );
}
