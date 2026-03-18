let ol = document.createElement("ol");

for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = "List Item " + i;
    ol.appendChild(li);
}
document.body.appendChild(ol);





let div = document.createElement("div");
let p = document.createElement("p");
p.textContent = "This is a paragraph inside a div element.";

div.appendChild(p);
document.body.appendChild(div);




let container = document.createElement("div");

let h1 = document.createElement("h1");
h1.textContent = "Welcome to DOM";

let para = document.createElement("p");
para.textContent = "This paragraph is inside a div with a heading.";

container.appendChild(h1);
container.appendChild(para);

document.body.appendChild(container);




let table = document.createElement("table");

let tr = document.createElement("tr");

for (let i = 1; i <= 3; i++) {
    let td = document.createElement("td");
    td.textContent = "Cell " + i;
    tr.appendChild(td);
}

table.appendChild(tr);

document.body.appendChild(table);




let buttonDiv = document.createElement("div");

for (let i = 1; i <= 5; i++) {
    let btn = document.createElement("button");
    btn.textContent = "Button " + i;
    buttonDiv.appendChild(btn);
}
document.body.appendChild(buttonDiv);




 
//   <div class="container"> 
//     <p class="para">Paragraph 1</p> 
//     <p class="para">Paragraph 2</p> 
// </div> 
 
 
 
// var elementBySelector = 
// document.querySelector(".para");
// var myDiv = document.querySelector("#myDiv");
// var elselector = document.querySelector("div"); 
 

// var paragraphs = document.querySelectorAll(".para");
// var divs = document.querySelectorAll("div");
 

