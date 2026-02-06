import "./formulario-de-evento.estilos.css";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label/Label";
import { TituloDeFormulario } from "../TituloDeFormulario";
import { Botao } from "../Botao";

export function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloDeFormulario>Preencha para criar um evento:</TituloDeFormulario>
      <div className="campos">
      <CampoDeFormulario>
        <Label htmlFor="nomeEvento">
          Qual o nome do evento?
          </Label>
        <CampoDeEntrada
         type="text" 
         id="nomeEvento" 
         placeholder="Summer dev hits" />
      </CampoDeFormulario>
      <CampoDeFormulario>
        <Label htmlFor="dataEvento">
          Data do evento:
          </Label>
        <CampoDeEntrada
         type="date" 
         id="dataEvento" 
         placeholder="XX/XX/XXXX" />
      </CampoDeFormulario>
      <div className="acoes">
        <Botao>Criar evento</Botao>
      </div>
      </div>
    </form>
  );
}
