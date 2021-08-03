//UC1
const is_Absent = 0;

let empcheck = Math.floor(Math.random() * 10) % 2;
if (empcheck == is_Absent) {
    console.log("Employee is Absent");
} else {
    console.log("Employee is Present");
}

//UC2
const isparttime = 1;
const isfulltime = 2;
const parttimeHrs = 4;
const fulltimeHrs = 8;
const wagePerHr = 20;

let empHrs = 0;
empCheck = Math.floor(Math.random() * 10) % 3;
switch (empCheck) {
    case isparttime:
        empHrs = parttimeHrs;
        break;
    case isfulltime:
        empHrs = fulltimeHrs;
        break;
    default:
        empHrs = 0;
}

let empWage = empHrs * wagePerHr;
console.log("Employee Wage: " + empWage);

//UC3
const isparttime = 1;
const isfulltime = 2;
const parttimeHrs = 4;
const fulltimeHrs = 8;
const wagePerHr = 20;