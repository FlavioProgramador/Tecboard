import "./lista-suspensa.estilos.css";

export function ListaSuspensa() {

  return (
    <select className="lista-suspensa-form">
      <option value="" disabled hidden>
        Selecione uma opção
      </option>
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
    </select>
  );
}
