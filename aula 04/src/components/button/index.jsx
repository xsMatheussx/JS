import "./style.css";

export function Button({ title, className }) {
  return (
    <button type="button" className={className}>
      {title}
    </button>
  );
}
