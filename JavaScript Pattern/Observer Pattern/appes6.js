class EventObserver {
    constructor(){
        this.observers = [];
    }

    subscribe(fn){
        this.observers.push(fn);
        console.log(`You are Now Subscribed to ${fn.name}`);
    }

    unsubscribe(fn){
        this.observers = this.observers.filter(function(item){
            if(item !== fn){
                return item;
            }
        });
        console.log(`You are Now Unsbscribed to ${fn.name}`);
    }

    fire(){
        this.observers.forEach(function(item){
            item.call();
        });
    }
}


const click = new EventObserver();

// Event Listeners
document.querySelector('.sub-ms').addEventListener('click', function(){
    click.subscribe(getCurMilliseconds);
});
document.querySelector('.unsub-ms').addEventListener('click', function(){
    click.unsubscribe(getCurMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', function(){
    click.subscribe(getCurSeconds);
});
document.querySelector('.unsub-s').addEventListener('click', function(){
    click.unsubscribe(getCurSeconds);
});
document.querySelector('.fire').addEventListener('click', function(){
    click.fire();
});

// Click Handler
const getCurMilliseconds = function (){
    console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`)
}

const getCurSeconds = function (){
    console.log(`Current Seconds: ${new Date().getSeconds()}`)
}