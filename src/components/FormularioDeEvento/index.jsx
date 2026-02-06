import "./formulario-de-evento.estilos.css";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label/Label";
import { TituloDeFormulario } from "../TituloDeFormulario";

export function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloDeFormulario>Preencha para criar um evento:</TituloDeFormulario>
      <CampoDeFormulario>
        <Label htmlFor="nome">Qual o nome do evento?</Label>
        <CampoDeEntrada type="text" id="nome" placeholder="Summer dev hits" />
      </CampoDeFormulario>
    </form>
  );
}