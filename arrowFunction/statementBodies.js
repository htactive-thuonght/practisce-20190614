// in ra mảng các số chia hết cho 5(ES6)
    let nums=[15,3,20,43,45,9,7,10]
    let fives=[]
    nums.forEach(v => {
        if (v % 5 === 0){
        fives.push(v)
        }    
     } );
     console.log(fives);
     // in ra mảng các số chia hết cho 5(ES5)

nums.forEach(function (v) {
    if (v % 5 === 0)
        fives.push(v);
 });



 // this
 var nums=[15,3,20,43,45,9,7,10]
 var fives=[]
 nums.forEach(v => {
    if (v % 5 === 0){
    this.fives.push(v);
    }    
 });
 console.log(fives);
