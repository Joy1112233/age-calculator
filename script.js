// function ageCalculator(){
//     var birthDate = document.getElementById("birthdate").value;
//     console.log(birthDate)
// }

function ageCalculator() {

const birthDateInput = document.getElementById("birthdate").value;

            //user input date to date object
const birthDate = new Date(birthDateInput);
const birthYear = birthDate.getFullYear();
const birthMonth = birthDate.getMonth() + 1; 
const birthDay = birthDate.getDate();

            // new date object
const today = new Date();
const year = today.getFullYear();
const moth = today.getMonth()+1;
const day = today.getDate();

let years = year-birthYear;
let months = moth-birthMonth;
let days = day-birthDay;

// if the month is negative
if(months <0){
    years--;
    months = months + 12;
}

if(days<0){
    months--;
    days = days + new Date(years,months,0).getDate();
}
const defaultYears = parseInt(document.getElementById("myYear").innerText);

let setYears = years + defaultYears;
document.getElementById("myYear").innerText = setYears;

const defaultMonths = parseInt(document.getElementById("myMonth").innerText);
let setMonths = months + defaultMonths;
document.getElementById("myMonth").innerText = setMonths;
const defaultDays = parseInt(document.getElementById("myDay").innerText);
let setDays = days + defaultDays;
document.getElementById("myDay").innerText = setDays;

}

function clearAll(){
    document.getElementById("myYear").innerText = 0;
    document.getElementById("myMonth").innerText = 0;
    document.getElementById("myDay").innerText = 0;
    document.getElementById("birthdate").value = "";
}