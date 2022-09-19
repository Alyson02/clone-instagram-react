export default function NavBar() {
  return (
    <header class="cabecalho">
      <div class="cabecalho-conteudo">
        <div class="logo">
          <ion-icon name="logo-instagram"></ion-icon>
          <span class="logo-separador"></span>
          <img src="./images/logo.png" />
          <ion-icon class="nav-mobile" name="paper-plane-outline"></ion-icon>
        </div>
        <input type="text" placeholder="Pesquisar" />
        <nav class="menu-nav">
          <ion-icon name="paper-plane-outline"></ion-icon>
          <ion-icon name="compass-outline"></ion-icon>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </nav>
      </div>
    </header>
  );
}
