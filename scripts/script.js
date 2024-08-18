const updateField = document.querySelector('.curr-class');
const currentMonth = monthList[(date.getMonth())];
const currentDate = date.getDate();
function pushNotification(message = 'new notification') {
    Notification.requestPermission().then(perm => {
        if(perm === "granted") {
            new Notification(message)
        }
    })
}


function isHoliday(currentDate) {
    const holidays = getHolidayList(currentMonth);
    
    for(let i=0; i<holidays.length; i++) {
        if(currentDate === holidays[i]){
            return false;
        }
    }
    return true;
}


function hourToMin(hr,min) {
    return (hr*60)+min;
}
function getClassList(day) {
    if(day === 'mon') {
        return monClasses;
    }else if(day === 'tue') {
        return tueClasses;
    }else if(day === 'wed') {
        return wedClasses;
    }else if(day === 'thu') {
        return thursClasses;
    }else if(day === 'fri') {
        return friClasses;
    }
    return '';
}
let index = -1;  
function getClass(day) {
    let currClassName = ''; 
    
    if(isHoliday(currentDate) === true) {
        currClassName = 'Today is Holiday';
        return currClassName;
    }
    
    
    if(day === 'sat' || day === 'sun') {
        return 'No Classes for Today.';
    }
        
    const classList = getClassList(day);
    //console.log(classList);
    const CurrTimeMin = hourToMin(date.getHours(), date.getMinutes());
    //const CurrTimeMin = hourToMin(8,31);


    //if break::
    const breakStartMin = hourToMin(12,30);
    const breakEndMin = hourToMin(13,29);
    
    if(CurrTimeMin >= breakStartMin && CurrTimeMin <= breakEndMin) {
        return 'LUNCH BREAK';

    }
    if(CurrTimeMin < hourToMin(8,30)) {
        return "Classes haven't started yet.";
    }
    if(CurrTimeMin > hourToMin(16,30)) {
        return 'All the classes are finished.';
    }

    //console.log('curr time is: ',CurrTimeMin)
    for(let i = 0; i<classList.length; i++) {
        let currClass = classList[i];
        //console.log('class time:',currClass.timeHrs)
        const clsTimeMin = hourToMin(currClass.timeHrs, currClass.timeMin);
        //console.log(clsTimeMin)
        if(CurrTimeMin >= clsTimeMin) {
            
            currClassName = currClass.name;
            index = i;
            
        }
        
    }

    return 'Current class: '+currClassName;
    
}
// const currentClass = getClass(dayList[date.getDay()]);
const currentClass = getClass(dayList[date.getDay()]);
updateField.innerHTML = `<marquee scrollamount=10><p>${currentClass}</p></marquee>`
//updateField.innerHTML = `<p>${currentClass}</p>`

const imgElement = document.querySelector('.img');
imgElement.addEventListener('click', ()=>{
    window.location.href = "https://instagram.com/iamdebesh391";
    
})
function getClassUpdate() {
    
    

}

//getClassUpdate()
//subclasses boxes::


//////////////