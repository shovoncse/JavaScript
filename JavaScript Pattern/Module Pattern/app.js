// Basic Structure
(function(){
    // Declare Private Variables and Functions

    return {
        // Declare public variables and functions
    }
})();

const UICtrl  = (function(){
    let text = 'Hello World';

    const changeText = function(){
        document.querySelector('h1').textContent = text;
    }

    return {
        callChangeText: function() {
            changeText();
            console.log(text);
        }
    }
})();

UICtrl.callChangeText();
// UICtrl.changeText(); // Undefined
// console.log(UICtrl.text); // Undefined


// REVELING MODULE PATTERN
const ItemCtrl = (function(){
    // let _data = []; // Private Variable
    let data = [];

    function add(item){
        data.push(item);
        console.log('Item Added....')
    }

    function get(id){
        return data.find(item => {
            return item.id === id;
        });
    }
    return {
        add,get
    }
})();

ItemCtrl.add({id:1, name:'jhon'});
ItemCtrl.add({id:2, name:'jack'});
console.log(ItemCtrl.get(1));
console.log(ItemCtrl.get(2));