import "./formulario-de-evento.estilos.css";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label/Label";
import { TituloDeFormulario } from "../TituloDeFormulario";
import { Botao } from "../Botao";
import { ListaSuspensa } from "../ListaSuspensa";

export function FormularioDeEvento() {

    const temas = [
    {
      id: 1,
      nome: 'front-end'
    },
    {
      id: 2,
      nome: 'back-end'
    },
    {
      id: 3,
      nome: 'devops'
    },
    {
      id: 4,
      nome: 'inteligência artificial'
    },
    {
      id: 5,
      nome: 'data-science'
    },
    {
      id: 6,
      nome: 'cloud'
    },
  ]

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
          <CampoDeFormulario>
        <Label htmlFor="dataEvento">
          Data do evento:
          </Label>
        <ListaSuspensa />
      </CampoDeFormulario>
      <div className="acoes">
        <Botao>Criar evento</Botao>
      </div>
      </div>
    </form>
  );
}
