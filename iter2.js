// 2.1 Convierte la siguiente promesa para esperar a ejecutar el console usando async-await.
const runTimeOut = async () => {
  await new Promise((resolve) => {
    setTimeout(function () {
      resolve();
    }, 2000);
  });
  console.log("Waited 2sec");
};

runTimeOut();
/* 2.2 Convierte la siguiente función con un fetch utilizando async-await. 
Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador; */
async function getCharacters() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const characters = await res.json();
  console.log(characters);
}

getCharacters();
