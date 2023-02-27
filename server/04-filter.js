const words = ['spray', 'limit', 'elite', 'exuberant']


const newArray = words.filter(item => item.length >= 6)
console.log(newArray);
console.log(words);

const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];

  // aqui filtramos los objetos por su propiedad y valor de la propiedad
const rta3 = orders.filter(item => item.delivered == true && item.total >= 100); 
console.log(rta3);

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query)
    })
}
console.log(search(''));


