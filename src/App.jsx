import "./App.css";
import { FormularioDeEvento } from "./components/FormularioDeEvento";

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
