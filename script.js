const newvar = document.createElement('h1');
newvar.id = 'result'
document.getElementById('main').appendChild(newvar);
let button = document.querySelector('button');
button.addEventListener('click',Random);
function Random(){
    const result = document.getElementById('result');
    result.innerHTML = Math.floor(Math.random() * 20);
};