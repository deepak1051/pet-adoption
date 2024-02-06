const template = document.querySelector('#pet-card-template');
const wrapper = document.createDocumentFragment();

async function start() {
  const res = await fetch(
    'https://api.weather.gov/gridpoints/MFL/110,50/forecast'
  );
  const weatherData = await res.json();

  const ourTemperature = weatherData.properties.periods[0].temperature;

  document.querySelector('#temperature-output').textContent = ourTemperature;
}

start();

async function petsArea() {
  const res = await fetch(
    'https://learnwebcode.github.io/bootcamp-pet-data/pets.json'
  );
  const petsData = await res.json();

  petsData.forEach((pet) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector('h3').textContent = pet.name;
    console.log(clone);
    wrapper.appendChild(clone);
  });
  document.querySelector('.list-of-pets').appendChild(wrapper);
}

petsArea();
