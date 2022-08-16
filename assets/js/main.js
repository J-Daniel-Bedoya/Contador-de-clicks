const image = document.createElement('div');
let texto = document.createElement('p');
texto.textContent= 'Bro deja de clicar tanto!';
let contador = document.getElementById("numero");
let valor = 0
let btnInc = document.querySelector(".inc");

btnInc.addEventListener("click", () => {
  valor++;
  contador.textContent = valor;
})
btnInc.addEventListener("click", () => {
  if (valor === 10){
    document.body.appendChild(image);
    image.classList.add("img-fluid"); 
    texto.classList.add("texto-color");
    image.appendChild(texto);
  }
})
btnInc.addEventListener("click", () => {
  if (valor === 15){
    contador.textContent = "Ya has llegado al límite!";
    valor = 0;
    image.style.display = "none";
  }
})

