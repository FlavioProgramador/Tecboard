import "./label.estilos.css";

export function Label({ htmlFor, children }) {
  return <label className="label"  htmlFor={htmlFor}>{children}</label>;
}