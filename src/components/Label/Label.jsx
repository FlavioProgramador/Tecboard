import "./label.estilos.css";

export function Label({ htmlForm, children }) {
  return <label className="label" htmlFor={htmlForm}>{children}</label>;
}