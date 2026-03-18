const ul = document.createElement("ul");

for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    li.textContent = "List Item " + i;
    ul.appendChild(li);
}

document.body.appendChild(ul);




const div1 = document.createElement("div");

const p = document.createElement("p");
p.textContent = "This is a paragraph inside a div.";

div1.appendChild(p);

document.body.appendChild(div1);





const div2 = document.createElement("div");

const h1 = document.createElement("h1");
h1.textContent = "Welcome to DOM";

const para = document.createElement("p");
para.textContent = "This paragraph is inside the div.";

div2.appendChild(h1);
div2.appendChild(para);

document.body.appendChild(div2);






const table = document.createElement("table");
const tr = document.createElement("tr");

for (let i = 1; i <= 3; i++) {
    const td = document.createElement("td");
    td.textContent = "Cell " + i;
    tr.appendChild(td);
}

table.appendChild(tr);

document.body.appendChild(table);





const div3 = document.createElement("div");

for (let i = 1; i <= 5; i++) {
    const button = document.createElement("button");
    button.textContent = "Button " + i;
    div3.appendChild(button);
}

document.body.appendChild(div3);