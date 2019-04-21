const Singleton = (function(){
    let instance;

    function createInstanse(){
        const object = new Object({name: 'Shovon'});
        return object;
    }

    return {
        getInstanse: function (){
            if(!instance){
                instance = createInstanse();
            }
            return instance;
        }
    }
})();

const instanceA = Singleton.getInstanse();
const instanceB = Singleton.getInstanse();
console.log(instanceA);
console.log(instanceA === instanceB)