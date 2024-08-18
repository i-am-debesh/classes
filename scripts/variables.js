const currTimeElemet = document.querySelector('.curr-time');
const currDateElement = document.querySelector('.curr-date');
const currClassElement = document.querySelector('.curr-class');


const currentDay = dayList[date.getDay()+2];



currDateElement.innerHTML = `${currentDay.toUpperCase()} : ${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
currTimeElemet.innerHTML = `Time: ${date.getHours()}:${date.getMinutes()}`