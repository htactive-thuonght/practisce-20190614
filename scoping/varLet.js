//demo with let

function foo() {
    let x = 10;
    if (true) {
       let x = 20; // x này là x khác rồi đấy
       console.log(x); // in ra 20
    }
    console.log(x); // in ra 10
 }
 foo();


 //demo with var
 function foo1() {
    var x = 10;
    if (true) {
       var x = 20; // x ở đây cũng là x ở trên
       console.log(x); // in ra 20
    }
    console.log(x); // vẫn là 20
 }
 foo1();

 //Sử dụng var trong hàm callbak=> giá trị của biến i bên trong hàm callback luôn là giá trị cuối cùng của i trong vòng lặp.
 function foo2() {
 for (var i = 0; i < 5; i++) {
    setTimeout(function(){ 
       console.log('Yo! ', i);
    },1000 );
 }
}
foo2(); //result: Yo!  5 Yo!  5 Yo!  5 Yo!  5 Yo!  5


// Sử dụng let trong hàm callbak=> 
function foo3() {
    for (let i = 0; i < 5; i++) {
       setTimeout(function(){ 
          console.log('Yo! ', i);
       }, 1000);
    }
   }
   foo3(); //result: Yo!  0 Yo!  1 Yo!  2 Yo!  3 Yo!  4