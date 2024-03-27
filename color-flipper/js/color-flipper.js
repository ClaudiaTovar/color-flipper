
const numeros = [0,1,2,3,4,5,6,7,8,9];
const letras = ["A","B","C","D","E","F"];
const color = [];
const numeral = "#";



//referencias al html

const btn = document.querySelector("#btn");
const colorPantalla = document.querySelector("small");


const crearColor = ()=>{
  for(i = 0; i<numeros.length; i++){
      color.push(numeros[i]);
  } for (j = 0; j<letras.length; j++){
      color.push(letras[j]);
  }
 
  const colorMezcla =  _.shuffle(color);
  
    
  return colorMezcla.slice(0, 6).join("");

}


btn.addEventListener("click", ()=>{
 document.body.style.backgroundColor = numeral + crearColor();
 colorPantalla.innerText = numeral + crearColor();

})





    

