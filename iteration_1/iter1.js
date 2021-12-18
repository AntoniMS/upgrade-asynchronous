// Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para hacer un .fetch() y
//recibir los datos que devuelve.Imprimelo mediante un console.log().

fetch("https://api.agify.io?name=michael")
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });

/*Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando fetch() 
para hacer una consulta a la api cuando se haga click en el botón, pasando como parametro de la api, el valor del input.*/

const baseUrl = "https://api.nationalize.io?name=";

let btn$$ = document.querySelector("button");
let input$$ = document.querySelector("input");

btn$$.addEventListener("click", getApi);

function getApi() {
  fetch(baseUrl + input$$.value)
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      console.log(myJson);

      /* En base al ejercicio anterior. Crea dinamicamente un elemento <p> por cada petición a la api
 que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
EJ: El nombre Abel tiene un 22 porciento de ser de ET y un 6 porciento de ser de MZ.
 */
      const name = myJson.name;
      for (let i = 0; i < myJson.country.length; i++) {
        const country = myJson.country[i];
        const p$$ = document.createElement("p");
        
        const xButton$$ = document.createElement("button");
        xButton$$.innerHTML = "X";
        
        const cleanProbability = Math.floor(country.probability * 100);
        p$$.innerHTML = `La persona llamada ${name} tiene una probabilidad del ${cleanProbability} % de ser del país ${country.country_id}`;
        
        
        
        /*2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
        de los p que hayas insertado y que si el usuario hace click en este botón 
        eliminemos el parrafo asociado. */
        
        const div$$ = document.createElement("div");
        
        div$$.appendChild(p$$);
        div$$.appendChild(xButton$$);
        document.body.appendChild(div$$);

        xButton$$.addEventListener("click", () => {
          p$$.remove();
          xButton$$.remove();   // o meter solo el div$$ que los contiene para borrar p$$ y xButton.
        });
      }
    });
}

