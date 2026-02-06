import "./App.css";

function TituloFormulario({ children }) {
  return <h2>{children}</h2>;
}

function CampoFormulario({ children }) {
  return <fieldset>{children}</fieldset>;
}

function Label({ htmlForm, children }) {
  return <label htmlFor={htmlForm}>{children}</label>;
}

function CampoDeEntrada( {...props}) {
  return (
    <input {...props} />
  )
}

function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <CampoFormulario>
        <Label htmlForm="nome">Qual o nome do evento?</Label>
        <CampoDeEntrada type="text" id="nome" placeholder="Summer dev hits" />
      </CampoFormulario>
    </form>
  );
}

function App() {
  return (
    <>
      <main>
        <header>
          <img src="/logo-tecboard.png" alt="Logo Tecboard" />
        </header>
        <section>
          <img src="/banner.png" alt="Banner Tecboard" />
        </section>
        <FormularioDeEvento />
      </main>
    </>
  );
}

export default App;
