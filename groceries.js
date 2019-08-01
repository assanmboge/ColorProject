var groceries = ['mango','banana','orange', 'pineapple','pear'];
var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var musa = 20;
function capitalLetter(cap){
    var firstLetter = cap.charAt(0).toUpperCase();
    return  firstLetter + cap.slice(1);
}

var myNewGroceries = groceries.map(capitalLetter);
console.log(myNewGroceries);
document.writeln(myNewGroceries);
