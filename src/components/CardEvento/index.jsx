export function CardEvento({ evento }) {
  return (
    <div>
      <img src={evento.capa} alt={evento.titulo} />
      <div className="corpo">
        <p className="tag">{evento.tema.nome}</p>
        <p className="data">
          {evento.data.toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </p>
        <h4 className="titulo">{evento.titulo}</h4>
      </div>
    </div>
  );
}
