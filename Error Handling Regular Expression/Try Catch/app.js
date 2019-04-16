const user = {email: 'jdoe@gmail.com'};

try{
    // Produce a ReferenceError
    // myFunction();

    // Produce a TypeError
    // null.myFunction();

    // Produce SyntaxError
    // console.log(eval('2+4'));
    // console.log(eval('"Hello world"'));
    // eval('Hello world');

    // Will Produce a URIError
    //decodeURIComponent('sf123%');

    if(!user.name){
        //throw 'User has no name';
        throw new SyntaxError('User has no name');
    }

} catch(ex){
    console.error(ex);
    // console.log(`${ex.name}: IT'S NULl STUPID`);
    // console.log(ex.message);
    // console.log(ex.name);
    // console.log(ex instanceof ReferenceError);
    // console.log(ex instanceof TypeError);
}finally{
    // console.log('Finaly Runs Regardless of Result...')
}

// myFunction();
console.log('Program Continues...')