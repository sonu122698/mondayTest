let cars = [
  {
    color: "purple",
    type: "Volkswagen",
    capacity: 7,
  },
  
  {
    color: "red",
    type: "station wagon",
    capacity: 5,
  },
  {
    color: "red",
    type: "station wagon",
    capacity: 15,
  },
  {
    color: "white",
    type: "minivan",
    capacity: 8,
  },
  {
    color: "red",
    type: "cabrio",
    capacity: 2,
  },
  {
    color: "blue",
    type: "cabrio",
    capacity: 4,
  },
  {
    color: "green",
    type: "minivan",
    capacity: 6,
  },
];

//1st question only Red cars in the array 
const redCars = cars.filter((a) => { if (a.color === "red") { return a; } }); 
console.log(redCars); 
//2nd Get the unique car and get their index. 
//here unique by only type
  

 
// const uniqueCars = cars.filter((car2, index) => { 

//    console.log(index)
//     //return  cars.findIndex((a) => a.color === car2.color||a.type === car2.type )=== index ,
//     return ( cars.findIndex((a) => a.color === car2.color) === index ); cars.map((_,index)=>index)

// }); 
    
// console.log(uniqueCars);

let uniqueCars = {};
cars.forEach((car, index) => {
  const carType = car.color;
  if (!uniqueCars[{carType}]) {
    uniqueCars[carType] = index;
  }
});
for (let carType in uniqueCars) {
  console.log(`Index: ${uniqueCars[carType]}, Car Type: ${carType}`);
}