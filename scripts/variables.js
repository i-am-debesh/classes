const currTimeElemet = document.querySelector('.curr-time');
const currDateElement = document.querySelector('.curr-date');
const currClassElement = document.querySelector('.curr-class');


const currentDay = dayList[date.getDay()];



currDateElement.innerHTML = `${currentDay.toUpperCase()} : ${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`;
currTimeElemet.innerHTML = `Time: ${date.getHours()}:${date.getMinutes()}`