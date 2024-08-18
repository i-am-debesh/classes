const classes_Aug = [5,12,19,6,13,20,27,7,14,21,28,1,8,22,29,2,9,16,23,30,20];
const classes_sept = [5,12,19,6,13,20,27,7,14,21,28,1,8,22,29,2,9,16,23,30,20];
const classes_oct = [5,12,19,6,13,20,27,7,14,21,28,1,8,22,29,2,9,16,23,30,20];
const classes_nov = [5,12,19,6,13,20,27,7,14,21,28,1,8,22,29,2,9,16,23,30,20];
const classes_dec = [5,12,19,6,13,20,27,7,14,21,28,1,8,22,29,2,9,16,23,30,20];
let date = new Date();

const monClasses = [
    {
        name: "Economics for engineers",
        teacher: "Dr. Priyanka Sahu",
        timeHrs: 8,
        timeMin: 30
    },
    {
        name: "Library Visit",
        teacher: "",
        timeHrs: 9,
        timeMin: 30
    },
    {
        name: "Elective III(automobile/vibration/welding)",
        teacher: "NtM/DS/TmS",
        timeHrs: 10,
        timeMin: 30
    },
    {
        name: "Open Elective-I(Industrial, Product Design, non-conv.",
        teacher: "Anp/SkD/NrK",
        timeHrs: 11,
        timeMin: 30
    },
    {
        name: "Lab(Group-1) & project(Group-2)",
        teacher: "",
        timeHrs: 13,
        timeMin: 30
    }
]
const tueClasses = [
    {
        name: "Elective-IV(CFD/CAD-CAM)",
        teacher: "MMJK/HbM",
        timeHrs: 8,
        timeMin: 30
    },
    {
        name: "Advanced Manufacturing Technology",
        teacher: "DhD",
        timeHrs: 9,
        timeMin: 30
    },
    {
        name: "Project-III",
        teacher: "",
        timeHrs: 10,
        timeMin: 30
    },
    {
        name: "Training and Placement",
        teacher: "",
        timeHrs: 13,
        timeMin: 30
    },
    {
        name: "Elective III(automobile/vibration/welding)",
        teacher: "NtM/DS/TmS",
        timeHrs: 14,
        timeMin: 30
    },
    {
        name: "Library visit",
        teacher:"",
        timeHrs: 15,
        timeMin: 30
    }
]
const wedClasses = [
    
    {
        name: "Advanced Manufacturing Technology",
        teacher: "DhD",
        timeHrs: 9,
        timeMin: 30
    },
    {
        name: "Library visit",
        teacher:"",
        timeHrs: 10,
        timeMin: 30
    },
    {
        name: "Elective-IV(CFD/CAD-CAM)",
        teacher: "MMJK/HbM",
        timeHrs: 11,
        timeMin: 30
    },
    {
        name: "Open Elective-I(Industrial, Product Design, non-conv.",
        teacher: "Anp/SkD/NrK",
        timeHrs: 13,
        timeMin: 30
    },
    {
        name: "Project-III",
        teacher: "",
        timeHrs: 14,
        timeMin: 30
    },
       
]
const thursClasses = [
    
    {
        name: "Lab(Group-2) & project(Group-1)",
        teacher: "",
        timeHrs: 8,
        timeMin: 30
    },
    {
        name: "Elective III(automobile/vibration/welding)",
        teacher: "NtM/DS/TmS",
        timeHrs: 11,
        timeMin: 30
    },
    {
        name: "Economics for engineers",
        teacher: "Dr. Priyanka Sahu",
        timeHrs: 13,
        timeMin: 30
    },
    
    {
        name: "Project-III",
        teacher: "",
        timeHrs: 14,
        timeMin: 30
    },
       
]
const friClasses = [
    
    {
        name: "Advanced Manufacturing Technology",
        teacher: "DhD",
        timeHrs: 8,
        timeMin: 30
    },
    {
        name: "Elective-IV(CFD/CAD-CAM)",
        teacher: "MMJK/HbM",
        timeHrs: 9,
        timeMin: 30
    },
    {
        name: "Library visit",
        teacher:"",
        timeHrs: 10,
        timeMin: 30
    },
    {
        name: "Open Elective-I(Industrial, Product Design, non-conv.",
        teacher: "Anp/SkD/NrK",
        timeHrs: 11,
        timeMin: 30
    },    
    {
        name: "Project-III",
        teacher: "",
        timeHrs: 13,
        timeMin: 30
    },
       
]


const dayList = [
    'sun','mon','tue','wed','thu','fri','sat'
]

const monthList = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'];
// const holidayList = {
//     jan:[5,12,19,6,13,20,27,7,14,21,28,1,8,22,29,2,9,16,23,30,20],
//     feb:[5,12,19,6,13,20,27,7,14,21,28,1,8,22,29,2,9,16,23,30,20],
//     mar:[5,12,19,6,13,20,27,7,14,21,28,1,8,22,29,2,9,16,23,30,20],
//     apr:[5,12,19,6,13,20,27,7,14,21,28,1,8,22,29,2,9,16,23,30,20],
//     apr:[5,12,19,6,13,20,27,7,14,21,28,1,8,22,29,2,9,16,23,30,20],
//     may:[5,12,19,6,13,20,27,7,14,21,28,1,8,22,29,2,9,16,23,30,20],
//     jun:[5,12,19,6,13,20,27,7,14,21,28,1,8,22,29,2,9,16,23,30,20],
//     jul:[5,12,19,6,13,20,27,7,14,21,28,1,8,22,29,2,9,16,23,30,20],
//     aug:[5,12,19,6,13,20,27,7,14,21,28,1,8,22,29,2,9,16,23,30,20],
//     sept:[5,12,19,6,13,20,27,7,14,21,28,1,8,22,29,2,9,16,23,30,20],
//     oct:[5,12,19,6,13,20,27,7,14,21,28,1,8,22,29,2,9,16,23,30,20],
//     nov:[5,12,19,6,13,20,27,7,14,21,28,1,8,22,29,2,9,16,23,30,20],
//     dec:[5,12,19,6,13,20,27,7,14,21,28,1,8,22,29,2,9,16,23,30,20]
// }

function getHolidayList(month) {
    if(month === 'aug') {
        return classes_Aug;
    }
    else if(month === 'sep') {
        return classes_sept;
    }
}

