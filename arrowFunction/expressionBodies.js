// ---------------Arrows Function


var materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];


  // Sử dụng es5 
  let a= materials.map(function(material) { 
    return material.length; 
  }); // [8, 6, 7, 9]
  console.log(a)

  //Sử dụng es6 
  //cách 1
  let b=materials.map((material) => {
    return material.length;
  }); // [8, 6, 7, 9]
  console.log(b)
//cách 2
  let c = materials.map(material => material.length); // [8, 6, 7, 9]
  console.log(c)



  //1. Trong mảng
  
  var smartPhones = [ 
    { name: 'iphone', price: 649 }, 
    { name: 'Galaxy S6', price: 576 }, 
    { name: 'Galaxy Note 5', price: 489 } 
];

// ES5 nhé
console.log(smartPhones.map(function (smartPhone){return smartPhone.price}));

// ES6 nhé
console.log(smartPhones.map(smartPhone => smartPhone.price))




//2. Cú pháp với Object

//ES5 
var setNameIdsEs5 = function setNameIds(id, name) { 
  return { 
      id: id, 
      name: name 
  }; 
}; 
console.log((setNameIdsEs5 (4, "Thương")));

// ES6 
var setNameIdsEs6 = (id, name) => ({ id: id, name: name }); 

console.log((setNameIdsEs6 (4, "Thúy")));  

