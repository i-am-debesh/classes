const boxElement = document.getElementById('full-period');


let day = dayList[date.getDay()+1];
const classLength = getClassList(day).length;
const classes = getClassList(day);
// console.log(classes);
let listHtml = ``;
for(let i = 0; i<classLength; i++) {
    listHtml = listHtml + `<div class="period-${i} sub-period" id="period-${i}"><p class="class-name">${classes[i].name}</p></div>`
}



boxElement.innerHTML = listHtml;
const runningClass = document.querySelector(`.period-${index}`);
runningClass.classList.add('running-class');




