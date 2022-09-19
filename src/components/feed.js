import Post from "./post";
import Stories from "./stories";

export default function Feed() {
  const posts = [
    {
      autor: "Diana",
      fotoAutor: "./images/stories/mulher-maravilha.png",
      tipoConteudo: "video",
      conteudo: [
        { origem: "./videos/video.mp4", tipo: "video/mp4" },
        { origem: "./videos/video.ogg", tipo: "video/ogg" },
      ],
      curtidaAmigo: "Flash",
      fotoCurtidaAmigo: "./images/stories/flash.jpg",
      curtidas: 500000,
      comentario: {
        pessoa: "Flash",
        foto: "./images/stories/flash.jpg",
        texto: "O vídeo está em camêra lenta?",
        marcadores: {
          data: "1m",
          curtidas: "10k",
        },
      },
    },
    {
      autor: "Diana",
      fotoAutor: "./images/stories/mulher-maravilha.png",
      tipoConteudo: "imagem",
      conteudo: "./images/wonderwomen.jpg",
      curtidaAmigo: "Superman",
      fotoCurtidaAmigo: "./images/stories/superman.jpg",
      curtidas: 350000,
      comentario: {
        pessoa: "Superman",
        foto: "./images/stories/superman.jpg",
        texto: "A mais linda de temyscira",
        marcadores: {
          data: "1m",
          curtidas: "10k",
        },
      },
    },
    {
      autor: "Superman",
      fotoAutor: "./images/stories/superman.jpg",
      tipoConteudo: "imagem",
      conteudo: "./images/superman-fortinite.jpg",
      curtidaAmigo: "Batman",
      fotoCurtidaAmigo: "./images/stories/batman.png",
      curtidas: 100000,
    },
    {
      autor: "Batman",
      fotoAutor: "./images/stories/batman.png",
      tipoConteudo: "imagem",
      conteudo: "./images/batcar.jpg",
      curtidaAmigo: "Batman",
      fotoCurtidaAmigo: "./images/stories/batman.png",
      curtidas: 50000,
    },
  ];

  return (
    <div className="feed">
      <Stories />
      {posts.map(post => <Post post={post}/>)}
    </div>
  );
}
