let nameElement = document.getElementById("name");
nameElement.innerHTML = "maryam";

let ageElement = document.getElementById("age");
ageElement.innerHTML = "23";

let jobElement = document.getElementById("job");
jobElement.innerHTML = "Front-end Developer";

let countryElement = document.getElementById("country");
countryElement.innerHTML = "Iran";

let userName = "Maryam Abtan";

let age = 23;

let job = "Front-end Developer";

let country = "Iran";



nameElement.innerHTML = userName;

ageElement.innerHTML = age;

jobElement.innerHTML = job;

countryElement.innerHTML = country;



if (job == "Front-end Developer") {
    alert("Front-end + JavaScript Developer");
} 
else {
    alert("Front-end Developer");
}

let isAvailableForHire = true;
let statusElement = document.getElementById("status");

if(isAvailableForHire){
    statusElement.innerHTML = "Available for Hire";
    statusElement.style.color = "green";
} else{
    statusElement.innerHTML = "Not Available";
    statusElement.style.color = "red"
}

let yearsOfExperience = 1;
let experienceElement = document.getElementById("experience");
if(yearsOfExperience < 2){
    experienceElement.innerHTML = "Junior Developer";
    experienceElement.style.color = "blue";
}
else if(yearsOfExperience >=2 && yearsOfExperience <= 5) {
    experienceElement.innerHTML = "Mid-Level Developer";
    experienceElement.style.color = "orange";
}
else {
    experienceElement.innerHTML = "Senior Developer";
    experienceElement.style.color = "red";
}
