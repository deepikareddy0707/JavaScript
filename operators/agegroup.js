let age = 70;

let ageGroup = (age <= 12) ? "Child" :
               (age <= 19) ? "Teen" :
               (age <= 64) ? "Adult" : "Senior";

console.log("Age Group:", ageGroup);