const totals = [1, 2, 3, 4];

let sum = 0;

const rspta = totals.reduce((sum, item) => sum + item, 0)
console.log('rsta' + rspta);



//----------------------REDUCE RELOAD-------------------

const items = [1, 2, 3, 3]

const newArray = items.reduce((obj, item) => {
   if(!obj[item]){
    obj[item] = 1;
   } else {
    obj[item] = obj[item] +1
   }
   return obj;
}, {})
 console.log(newArray);

 const newArray1 = items.reduce((obj, item) => {
    if(!obj[item]){
     obj[item] = 1;
    } else {
     obj[item] = obj[item] +1
    }
    return obj;
 }, {})


 const itemPrueba = [1, 2, 3, 5, 6, 7, 8, 2, 3, 5, 9, 10]


 console.log(retoPlatzi);