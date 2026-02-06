export function Label({ htmlForm, children }) {
  return <label htmlFor={htmlForm}>{children}</label>;
}