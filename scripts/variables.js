const currTimeElemet = document.querySelector('.curr-time');
const currDateElement = document.querySelector('.curr-date');
const currClassElement = document.querySelector('.curr-class');


const currentDay = dayList[date.getDay()];
function formatDateTime(value) {
    return value < 10? '0'+value: value;
}
currDateElement.innerHTML = `${currentDay.toUpperCase()} : ${formatDateTime(date.getDate())}.${formatDateTime(date.getMonth()+1)}.${date.getFullYear()}`;
currTimeElemet.innerHTML = `Time: ${formatDateTime(date.getHours())}:${formatDateTime(date.getMinutes())}`;