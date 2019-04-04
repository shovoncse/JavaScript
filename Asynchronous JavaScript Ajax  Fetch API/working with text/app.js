document.querySelector('#button').addEventListener('click', loadData);

function loadData(){
     
    // Create an XHR Object
    const xhr = new XMLHttpRequest();

    // Open
    xhr.open('GET', 'data.txt', true);

    xhr.onload = function(){
        if(this.status === 200){
            // console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }
    // OPTIONAL - Used for spinner / Loader
    // xhr.onprogress = function(){
    //     console.log('ReadyState: ', xhr.readyState);
    // }

    // xhr.onreadystatechange = function(){
    //     console.log('READYSTATE: ', xhr.readyState);
    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //     }
    // }


    // readyState Values
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished

    xhr.onerror = function(){
        console.log('Request error...');
        
    }

    xhr.send();
    // HTTP STATUSES
    // 200: "OK"
    // 403: "Forbidden"
    // 404: "Not Found "
}

