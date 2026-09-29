'use strict';
const populations = Array.from(document.querySelectorAll('span.population')).map((span)=>Number(span.textContent.replace(/,/g, '')));
const total = populations.reduce((sum, population)=>{
    return sum + population;
}, 0);
const average = total / populations.length;
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
totalPopulation.textContent = total.toLocaleString();
averagePopulation.textContent = Math.floor(average).toLocaleString();

//# sourceMappingURL=js_get_data_DOM.f75de5e1.js.map
