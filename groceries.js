var groceries = ['mango','banana','orange', 'pineapple','pear'];
function capitalLetter(cap){
    var firstLetter = cap.charAt(0).toUpperCase();
    return  firstLetter + cap.slice(1);
}

var myNewGroceries = groceries.map(capitalLetter);
console.log(myNewGroceries);
document.writeln(myNewGroceries);
