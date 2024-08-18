const updateField = document.querySelector('.curr-class');


function pushNotification(message = 'new notification') {
    Notification.requestPermission().then(perm => {
        if(perm === "granted") {
            new Notification(message)
        }
    })
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
    
    
    if(day === 'sat' || day === 'sun') {
        return 'No Classes for Today.';
    }
        
    const classList = getClassList(day);
    //console.log(classList);
    //const CurrTimeMin = hourToMin(date.getHours(), date.getMinutes());
    const CurrTimeMin = hourToMin(9,32);


    //if break::
    const breakStartMin = hourToMin(12,30);
    const breakEndMin = hourToMin(13,29);
    
    if(CurrTimeMin >= breakStartMin && CurrTimeMin <= breakEndMin) {
        return 'LUNCH BREAK';

    }
    if(CurrTimeMin < hourToMin(8,30)) {
        return 'Class has not started yet.';
    }
    if(CurrTimeMin > hourToMin(16,30)) {
        return 'All classes has been Completed.';
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

    return currClassName;
    
}
const currentClass = getClass('tue');
updateField.innerHTML = `<p>Current Class: ${currentClass}</p>`



function getClassUpdate() {
    
    

}

//getClassUpdate()
//subclasses boxes::


//////////////