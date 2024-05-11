function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "De tudo, ao meu amor serei atento. Antes, e com tal zelo, e sempre, e tanto. Que mesmo em face do maior encanto dele se encante mais meu pensamento. - Vinicius de Morais 🌻",
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
