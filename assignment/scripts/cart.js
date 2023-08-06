console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket =[];

function addItem(item){
    basket.push(item);
    return true;
}
addItem('eggs');
addItem('milk');
addItem('bread');
console.log(basket);
console.log('Should return true to indicate the item was added:', addItem());

function listItems() {
    for (let item of basket) {
        console.log(item);
    }
  }
  listItems();

function empty(){
    basket=[]
}

empty();
console.log('empty[]:' , basket);





// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
