const letters = ['a', 'b', 'c', 'd'];

// Forma con .map hace la clonación de un array sin necesidad de modificar el original
const newArrayMap = letters.map( item => item + ' ++ ')

// Forma con un for
// const newArray = [];
// for (let index = 0; index < letters.length; index++) {
//     const element = letters[index];
//     newArray.push(element + '++');
// }


console.log(`original array ${letters}`);
console.log(`cloned array ${newArrayMap}`);


// Array de ejemplo
const app = document.getElementById('app')
const taskList = [
    {name: 'Hacer el aseo', description: 'barrer', done: false},
    {name: 'Comprar Cereal', description: 'Ir por el cereal a la tienda', done: true},
    {name: 'Fifa 23', description: 'Humillar ámi hijo en FIFA 23', done: false},
    {name: 'Echar reta', description: 'jugar basketball', done: true},
    {name: 'Echar reta', description: 'jugar basketball', done: true},
]


//Método map para imprimir en las etiquetas con operadores terniarios
const newArray = taskList.map((task) => (task.done == true) ? `<li> <input type= "checkbox" checked>${task.name} - ${task.description}</li>` : `<li> <input type= "checkbox">${task.name} - ${task.description}</li> `);

app.innerHTML = newArray.join('');