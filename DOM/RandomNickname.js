function generateNickname() {
    let name = document.getElementById("name").value.trim();
    let result = document.getElementById("result");

    let nicknames = [
        "Shadow", "Blaze", "Storm", "Viper", "Phantom",
        "Nova", "Titan", "Ghost", "Hunter", "Fury"
    ];

    let randomIndex = Math.floor(Math.random() * nicknames.length);
    let randomNickname = nicknames[randomIndex];

    result.innerText = name +", your nickname is "+  randomNickname;
}