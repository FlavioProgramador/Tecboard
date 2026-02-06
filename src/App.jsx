import "./App.css";

function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <h2>Preencha para criar um evento:</h2>
      <fieldset>
        <label htmlFor="nome">Qual o nome do evento?</label>
        <input type="text" id="nome" placeholder="Summer dev hits" />
      </fieldset>
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
