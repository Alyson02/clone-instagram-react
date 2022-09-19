export default function Stories() {
  const stories = [
    {
      foto: "./images/stories/batman.png",
      nome: "Batman",
    },
    {
      foto: "./images/stories/superman.jpg",
      nome: "Superman",
    },
    {
      foto: "./images/stories/aquamen.jpg",
      nome: "Aquamen",
    },
    {
      foto: "./images/stories/ciborgue.webp",
      nome: "Ciborgue",
    },
    {
      foto: "./images/stories/constantine.jpg",
      nome: "Constantine",
    },
    {
      foto: "./images/stories/flash.jpg",
      nome: "Flash",
    },
    {
      foto: "./images/stories/hal.jpg",
      nome: "Hall",
    },
    {
      foto: "./images/stories/lois.jpg",
      nome: "Lois",
    },
    {
      foto: "./images/stories/mulher-maravilha.jpg",
      nome: "Diana",
    },
    {
      foto: "./images/stories/shazam.jpg",
      nome: "Shazam",
    },
    {
      foto: "./images/stories/robin.jpg",
      nome: "Robin",
    },
    {
      foto: "./images/stories/arqueiro.jpg",
      nome: "Oliver",
    },
    {
      foto: "./images/stories/mutano.jpg",
      nome: "Mutano",
    },
    {
      foto: "./images/stories/lois.jpg",
      nome: "Lois",
    },
    {
      foto: "./images/stories/arqueiro.jpg",
      nome: "arqueiro",
    },
  ];

  return (
    <div class="stories">
      <div class="stories-wrap">
        {stories.map((s) => {
          return (
            <div class="wrap-pic">
              <div class="stories-item">
                <img class="stories-item--imagem" src={s.foto} />
                <img
                  src="./images/stories/stories_background.jpg"
                  class="stories-item--imagemFundo"
                />
              </div>
              <p class="stories-nomePessoa">{s.nome}</p>
            </div>
          );
        })}
      </div>
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="btn"
      >
        <path
          d="M0 13C0 20.1794 5.82062 26 13 26C20.1794 26 26 20.1794 26 13C26 5.82062 20.1794 0 13 0C5.82062 0 0 5.82062 0 13ZM16.0856 13L10.7931 7.70687C10.6135 7.51781 10.5148 7.26606 10.5182 7.0053C10.5215 6.74454 10.6266 6.4954 10.811 6.311C10.9954 6.1266 11.2445 6.02152 11.5053 6.01819C11.7661 6.01485 12.0178 6.11351 12.2069 6.29313L18.2069 12.2931C18.3943 12.4806 18.4995 12.7349 18.4995 13C18.4995 13.2651 18.3943 13.5194 18.2069 13.7069L12.2069 19.7069C12.0178 19.8865 11.7661 19.9852 11.5053 19.9818C11.2445 19.9785 10.9954 19.8734 10.811 19.689C10.6266 19.5046 10.5215 19.2555 10.5182 18.9947C10.5148 18.7339 10.6135 18.4822 10.7931 18.2931L16.0856 13Z"
          fill="white"
        />
      </svg>
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="btn2"
      >
        <path
          d="M0 13C0 20.1794 5.82062 26 13 26C20.1794 26 26 20.1794 26 13C26 5.82062 20.1794 0 13 0C5.82062 0 0 5.82062 0 13ZM16.0856 13L10.7931 7.70687C10.6135 7.51781 10.5148 7.26606 10.5182 7.0053C10.5215 6.74454 10.6266 6.4954 10.811 6.311C10.9954 6.1266 11.2445 6.02152 11.5053 6.01819C11.7661 6.01485 12.0178 6.11351 12.2069 6.29313L18.2069 12.2931C18.3943 12.4806 18.4995 12.7349 18.4995 13C18.4995 13.2651 18.3943 13.5194 18.2069 13.7069L12.2069 19.7069C12.0178 19.8865 11.7661 19.9852 11.5053 19.9818C11.2445 19.9785 10.9954 19.8734 10.811 19.689C10.6266 19.5046 10.5215 19.2555 10.5182 18.9947C10.5148 18.7339 10.6135 18.4822 10.7931 18.2931L16.0856 13Z"
          fill="white"
        />
      </svg>
    </div>
  );
}
