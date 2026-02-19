let score = 82;

let grade = (score >= 90) ? "A" :
            (score >= 75) ? "B" :
            (score >= 60) ? "C" :
            (score >= 45) ? "D" : "F";

console.log("Grade:", grade);