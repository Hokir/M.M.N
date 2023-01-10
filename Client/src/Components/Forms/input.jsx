export function Input({ name, type, placeholder, label, value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <label>{label}</label>

      <input
        className="text-dark p-2 rounded-sm"
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
}
