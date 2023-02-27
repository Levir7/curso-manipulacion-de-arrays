// const letters = [ 'a', 'b', 'c'];

// for (let index = 0; letters < array.length; index++) {
//     const element = array[index];
// }

// letters.forEach(item => console.log('forEach', item));
const app = document.getElementById('app')
const taskList = [
    {name: 'Hacer el aseo', description: 'barrer', done: false},
    {name: 'Comprar Cereal', description: 'Ir por el cereal a la tienda', done: true},
    {name: 'Fifa 23', description: 'Humillar ámi hijo en FIFA 23', done: false},
    {name: 'Echar reta', description: 'jugar basketball', done: true},
    {name: 'Echar reta', description: 'jugar basketball', done: true},
]


// Forma 1 (con un if else validando que la propiedad done: del objeto dentro dle array sea true inserte con el innerHTML al div con el id 'app' las etiquetas li e input)
// taskList.forEach(task=>{if(task.done == true){
//     app.innerHTML += `<p> <input type= "checkbox" checked>  ${task.name} - ${task.description} </p>`
// } else {
//     app.innerHTML += `<p> <input type= "checkbox">${task.name} - ${task.description} </p> `
// }

// });


// Forma 2 con operadores terniarios
// taskList.forEach((task) => (task.done == true) ? app.innerHTML += `<li> <input type= "checkbox" checked>${task.name} - ${task.description}</li>` : app.innerHTML += `<li> <input type= "checkbox">${task.name} - ${task.description}</li> `)


//Método Map
const newArray = taskList.map((task) => (task.done == true) ? `<li> <input type= "checkbox" checked>${task.name} - ${task.description}</li>` : `<li> <input type= "checkbox">${task.name} - ${task.description}</li> `);

app.innerHTML = newArray.join('');
