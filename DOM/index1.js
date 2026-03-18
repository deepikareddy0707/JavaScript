async function fetchData(){
    let res=await fetch("https://dummyjson.com/todos")
    let data=await res.json();
    getdata(data.todos);
}
function getdata(todo){
let container=document.getElementsByClassName("container")[0]
todo.forEach(obj => {
    let p=document.createElement("p")
    p.innerHTML=`
    <h2>Id : ${obj.id}</h2>
    <p>Todo : ${obj.todo}</p>
    <p>Completed : ${obj.completed}</p>
    <p>USER ID : ${obj.userId}</p>
    `


    container.appendChild(p)
});
}
fetchData();