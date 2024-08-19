const boxElement = document.getElementById('full-period');


let day = dayList[date.getDay()];
const classLength = getClassList(day).length;
const classes = getClassList(day);
// console.log(classes);
let listHtml = ``;
const curTime = hourToMin(date.getHours(),date.getMinutes());
//const curTime = 
function handleClassStatus() {
    if(curTime < hourToMin(classes[i].timeHrs, classes[i].timeMin)+60) {
        return `<p class="class-time">starting at ${classes[i].timeHrs > 12? classes[i].timeHrs -12:classes[i].timeHrs}:${classes[i].timeMin}</p>`;
    }else if(curTime >= hourToMin(classes[i].timeHrs, classes[i].timeMin)+60) {
        return `<p class="ended-class">class ended</p>`
    }
}
if(!isHoliday(currentDate)){
    for(let i = 0; i<classLength; i++) {
        listHtml = listHtml + `<div class="period-${i} sub-period" id="period-${i}">
        <p class="class-name">${classes[i].name}</p>
        ${
            curTime < hourToMin(classes[i].timeHrs, classes[i].timeMin)+60?
            `<p class="class-time">starting at ${classes[i].timeHrs > 12? classes[i].timeHrs -12:classes[i].timeHrs}:${classes[i].timeMin}</p>`
            :
            
            `<p class="ended-class">class ended</p>`

        }
        
        </div>`
    }
}


boxElement.innerHTML = listHtml;
const runningClass = document.querySelector(`.period-${index}`);
runningClass.classList.add('running-class');




