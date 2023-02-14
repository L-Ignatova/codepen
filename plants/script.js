import axios from "https://cdn.skypack.dev/axios@1.3.2";

const options = {
  method: 'GET',
  url: 'https://house-plants.p.rapidapi.com/common/lipstick',
  headers: {
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': 'house-plants.p.rapidapi.com'
  }
};

// axios.request(options).then( (response) => {
//   const {data} = response;
//   const [plant] = data;
// 	console.log(plant);
//   const [commonName, ...rest] = plant.common;
//   const latinName = plant.latin;
//   const origin = plant.origin;
//   const temperatureRange = `${plant.tempmin.celsius}\u00B0C - ${plant.tempmax.celsius}\u00B0C`;
//   const light = data[0].ideallight;
//   console.log(`Common name: ${commonName}`);
//   console.log(`Latin name: ${latinName}`);
//   console.log(`Origin: ${origin}`);
//   console.log(`Temperature: ${temperatureRange}`);
//   console.log(`What to fear: ${plant.insects.join(", ")}`);
//   console.log(`Watering: ${plant.watering}`);
// }).catch( error => {
// 	console.error(error);
// });

const openDrawer = () => {
  const drawer = document.querySelector(".drawer");
  drawer.classList.toggle("open");
}

document.getElementById("some").addEventListener("click", openDrawer);
document.getElementById("close").addEventListener("click", openDrawer); 
document.querySelector(".overlay").addEventListener("click", openDrawer);
