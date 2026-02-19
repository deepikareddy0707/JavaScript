function checkVowels(str) {
    let vowels = "aeiouAEIOU";
    let found = false;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            found = true;
            break;
        }
    }
    if (found) {
        return "It contains vowels";
    } else {
        return "It does not contain vowels";
    }
}

console.log("hello:", checkVowels("hello"));
console.log("hll:", checkVowels("hll"));
console.log("sky:", checkVowels("sky"));
