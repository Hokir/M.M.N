export function Profil() {
  function ModifyUser(e) {
    e.preventDefault();

    console.log("Submitted");
  }

  return (
    <form onSubmit={(e) => ModifyUser(e)}>
      <h1 className="text-xl">Profil</h1>
    </form>
  );
}
