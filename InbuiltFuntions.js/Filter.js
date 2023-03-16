const arr=[1,2,3,4,5,6,7];

const newArr=arr
  .filter(a=> a%2 === 0)
  .map(a=> a*a) //The Array.map() method creates a new array from the results of calling a function for every element.
  .reduce((a,b)=>a+b);
  console.log(newArr);

  
 /* const orders=[
  {
    userId:1,
    amount:10
  },
  {
    userId:2,
    amount:25
  },
  {
    userId:1,
    amount:25
  },
  {
    userId:3,
    amount:30
  }
];
const a=orders.filter(orders=>orders.userId===1)
 .map(order=>order.amount)
 .reduce((a,b)=>a+b);
console.log(a); */
  