import { useState } from "react";

export default function Post({ post }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [curtidas, setCurtidas] = useState(post.curtidas);

  return (
    <div class="posts">
      <div class="post">
        <div class="post-cabecalho">
          <div class="post-dono">
            <img src={post.fotoAutor} alt="" />
            <p>{post.autor}</p>
          </div>
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
        {post.tipoConteudo == "imagem" ? (
          <img src={post.conteudo} />
        ) : (
          <video controls autoplay muted>
            {post.conteudo.map((x) => (
              <source src={x.origem} type={x.tipo} />
            ))}
            Seu navegador não suporta vídeos.
          </video>
        )}

        <div class="post-rodape">
          <div class="icons">
            <div class="icons-left">
              <ion-icon
                name={liked === false ? "heart-outline" : "heart"}
                onClick={() => {
                  if (liked == false) {
                    setLiked(true);
                    setCurtidas(curtidas + 1);
                  } else {
                    setLiked(false);
                    setCurtidas(curtidas - 1);
                  }
                }}
                class={liked ? "curtida" : ""}
              ></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div class="icons-right">
              <ion-icon
                name={saved === false ? "bookmark-outline" : "bookmark"}
                onClick={() => {
                  if (saved == false) setSaved(true);
                  else setSaved(false);
                }}
              ></ion-icon>
            </div>
          </div>
          <div class="post-info">
            <img src={post.fotoCurtidaAmigo} alt="" />
            <p>
              Curtido por <strong>{post.curtidaAmigo}</strong> e
              <strong>outras {curtidas} pessoas</strong>
            </p>
          </div>
          {post.comentario == null ? (
            <></>
          ) : (
            <div class="comentarios">
              <div class="comentario">
                <div class="comentario-conteudo">
                  <div class="comentario-passoa">
                    <div class="comentario-texto">
                      <img src={post.comentario.foto} />
                      <p>
                        <strong>{post.comentario.pessoa}</strong>{" "}
                        {post.comentario.texto}
                      </p>
                    </div>
                    <div class="marcadores">
                      <p>{post.comentario.marcadores.data}</p>
                      <p>{post.comentario.marcadores.curtidas} likes</p>
                      <p>Reply</p>
                    </div>
                  </div>
                  <ion-icon name="heart-outline"></ion-icon>
                </div>
              </div>
            </div>
          )}

          <div class="comentar">
            <input type="text" placeholder="Add a comment..." />
            <ion-icon name="send-outline"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
}
