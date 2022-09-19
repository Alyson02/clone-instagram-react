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
          const fotoPromp = prompt("Digite o endereço da foto (URL)")
          if(fotoPromp == "" || fotoPromp == undefined || fotoPromp == null) return
          setFoto(fotoPromp);
        }}
      />
      <div>
        <p>{nome}</p>
        <p>
          {nome}{" "}
          <ion-icon
            name="pencil-outline"
            onClick={() => {
              const nomePromp = prompt("Digite seu nome");
              if(nomePromp === "" || nomePromp === undefined || nomePromp === null) return
              setNome(nomePromp);
            }}
          ></ion-icon>
        </p>
      </div>
    </div>
  );
}
