export default function Sugestoes() {
  const sugestoes = [
    {
      foto: "./images/stories/lois.jpg",
      nome: "loislane",
    },
    {
      foto: "./images/stories/hal.jpg",
      nome: "Hal",
    },
    {
      foto: "./images/stories/robin.jpg",
      nome: "Robin",
    },
    {
      foto: "./images/stories/bruce.jpg",
      nome: "Bruce Wayne",
    },
    {
      foto: "./images/stories/mutano.jpg",
      nome: "Mutano",
    },
  ];

  return (
    <div class="sugestoes">
      <div>
        <p>Sugestões para você</p>
        <p>Ver tudo</p>
      </div>
      {sugestoes.map((sugestao) => {
        return(
        <div class="sugestao">
          <div>
            <img src={sugestao.foto} />
            <div class="perfil">
              <p>{sugestao.nome}</p>
              <p>Segue você</p>
            </div>
          </div>
          <p>Seguir</p>
        </div>)
      })}
    </div>
  );
}
