'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const getCountryData = function (country) {
    const request = new XMLHttpRequest();
    request.open('get', `https://restcountries.com/v3.1/name/${country}`);

    request.send();

    request.addEventListener('load', function () {
        console.log(this.responseText);
        const [data] = JSON.parse(this.responseText);
        console.log(data)

        //   const renderCountry = function (data, className = '') {
        const html = `
    <article class="country ">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
                +data.population / 1000000
            ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages}</p>
        <p class="country__row"><span>💰</span>${data.currencies}</p>
      </div>
    </article>
    `;
        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = 1;
        //   };

    });
}
getCountryData('portugal');
getCountryData('usa')