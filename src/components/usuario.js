import { useState } from "react";

export default function Usuario(props) {
  const [nome, setNome] = useState(props.nome);
  const [foto, setFoto] = useState(props.foto);
  
  return (
    <div class="seuPerfil">
      <img
        src={foto}
        alt=""
        onClick={() => {
          setFoto(prompt("Digite o endereço da foto (URL)"));
        }}
      />
      <div>
        <p>{nome}</p>
        <p>
          {nome}{" "}
          <ion-icon
            name="pencil-outline"
            onClick={() => {
              setNome(prompt("Digite seu nome"));
            }}
          ></ion-icon>
        </p>
      </div>
    </div>
  );
}
