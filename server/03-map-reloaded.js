const orders = [
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
console.log('original' + orders);

const newArray = orders.map(item => item.total);
console.log(newArray);

// const newArray2 = orders.map(item => {
//     item.tax= .19;
//     return item
// })
// console.log(newArray2);
console.log(orders);

//Multiplicando y agregando una nueva propiedad al nuevo array
const newArray3 = orders.map(item => ({ 
    ...item, tax: Math.trunc(item.total * 0.17)
}))

console.log(newArray3);
