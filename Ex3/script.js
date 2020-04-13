var n = prompt('Скільки пляшок ви хочете поставити на стіну?', 50);
var path = document.body;
const span=document.createElement('span');
for(var i = n; i > 0; i--){
    span.innerHTML += `${i} пляшок стоїть на стіні, 1 упала ${i-1} залишилось <br>`;
}
span.innerHTML+="Жодної пляшки не залишилось";
path.appendChild(span);