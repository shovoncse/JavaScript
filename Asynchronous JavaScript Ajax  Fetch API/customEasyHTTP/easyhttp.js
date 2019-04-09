/*
* ES5 STYLE
* Custom Ajax Library ~ WOW
*/

// WE NEED A FAKE ONLINE REST API FOR PROTOTYPING
// JASONPlaceholder (https://jsonplaceholder.typicode.com/)

function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
easyHTTP.prototype.get = function(url,callBack){
    this.http.open('GET', url, true);
    // this.http.onload = () =>{ 
    let self = this;   
    this.http.onload = function(){
        if(self.http.status === 200){
            // console.log(self.http.responseText);
            callBack(null, self.http.responseText); 
        }else {
            callBack('Error: '+ self.http.status);
        }
    };
    this.http.send();
}
// Make an HTTP POST Request
easyHTTP.prototype.post = function(url, data, callBack){
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;   
    this.http.onload = function(){
        
        callBack(null, self.http.responseText); 
        
    };
    this.http.send(JSON.stringify(data));
}
// Make an HTTP PUT Request
easyHTTP.prototype.put = function(url, data, callBack){
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');
    
    let self = this;   
    this.http.onload = function(){
        
        callBack(null, self.http.responseText); 
        
    };
    this.http.send(JSON.stringify(data));
}
// Make an HTTP DELETE Request
easyHTTP.prototype.delete = function(url,callBack){
    this.http.open('DELETE', url, true);
    // this.http.onload = () =>{ 
    let self = this;   
    this.http.onload = function(){
        if(self.http.status === 200){
            // console.log(self.http.responseText);
            callBack(null, 'Post Deleted'); 
        }else {
            callBack('Error: '+ self.http.status);
        }
    };
    this.http.send();
}
// M