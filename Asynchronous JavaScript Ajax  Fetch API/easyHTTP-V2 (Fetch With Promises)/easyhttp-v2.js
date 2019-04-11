/**
 * EasyHTTP Library
 * Library for making HTTP Requests 
 * 
 * @version 2.0.0
 * @author andit.andimpex@gmail.com
 * @lisense MIT
 * 
 **/

 class EasyHTTP {
    // Make an HTTP GET Request
    get(url) {

        //Direct Log
        // fetch(url)
        //     .then( res => res.json())
        //     .then(data => console.log(data))
        //     .catch(err => console.log(err))
        
        //Returns data to get
        // fetch(url)
        //     .then( res => res.json())
        //     .then(data => data)
        //     .catch(err => err)

        //Now the Promise
        //Resolve callback when we want to pass the result
        //Resolve callback when we want to pass the error
        return new Promise((resolve,reject) => {
            fetch(url)
                .then( res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        });
    }

    // Make HTTP POST Request
    post(url, data) {
        return new Promise((resolve,reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then( res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        });
    }

    // Make HTTP PUT Request
    put(url, data) {
        return new Promise((resolve,reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then( res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        });
    }

    // Make HTTP PUT Request
    delete(url) {
        return new Promise((resolve,reject) => {
            fetch(url, {
                method: 'DELETE'
            })
            .then( res => res.json())
            .then(data => resolve('Deleted...'))
            .catch(err => reject(err))
        });
    }
 }