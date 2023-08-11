const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

const ipAdd = document.querySelector('.address');
const locate = document.querySelector('.location');
const timezone = document.querySelector('.timezone');
const isp = document.querySelector('.isp');


const api = 'https://geo.ipify.org/api/v2/country?';
const query = 'apiKey=';
const apiKey = 'at_2FgisFJo3YkThpDrAdK1aFGWzIv7F';


const getLocation = (e) => {
    e.preventDefault();
    const inputValue = input.value;
    const apiM = `${api}${query}${apiKey}&ipAddress=${inputValue}`;
    fetch(apiM)
        .then((response) => response.json())
        .then((data) => responseData(data));
}

const responseData = (data) => {
    ipAdd.innerHTML = `${data.ip}`;
    locate.innerHTML = `${data.location.region}, ${data.location.country}`;
    timezone.innerHTML = `${data.location.timezone}`;
    isp.innerHTML = `${data.isp}`;
}

btn.addEventListener('click', getLocation);

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);

const displayMarker = (markerUpdate = [51.5, -0.09]) => {
    L.marker(markerUpdate).addTo(map);
    map.setView(markerUpdate, 13);
}

map.addEventListener('load', displayMarker);


