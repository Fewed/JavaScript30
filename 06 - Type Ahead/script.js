const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let cities = [];
let data = null;
let ul = document.querySelector("ul");



fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities = data);

let input = document.querySelector("input");

input.addEventListener("input", e => {
  [...ul.childNodes].map(item => item.remove());

  let val = e.target.value;
  val = val.toLowerCase();

  data = cities.filter(item => item.city.toLowerCase().indexOf(val || "default") !== -1
          || item.state.toLowerCase().indexOf(val || "default") !== -1);
  data = data.sort((a,b) => +a.population < +b.population ? 1 : -1);
  data.map(item => {
    
    let li = document.createElement("li");
    ul.appendChild(li);

    let spanCity = document.createElement("span");
    let spanPopulation = document.createElement("span");

    spanCity.textContent = `${item.city}, ${item.state}`;
    spanPopulation.textContent = `${(item.population / 1000).toFixed(3)}`.replace(".", ",");

    spanCity.classList.add("name");
    spanPopulation.classList.add("population");

    li.insertBefore(spanCity, li.childNodes[0]);
    li.appendChild(spanPopulation);


    spanCity.innerHTML = spanCity.textContent.replace(new RegExp(val, "ig"), `<span class="hl">${val}</span>`);

  });
});