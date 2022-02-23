function Mypromise(executor) {
    this.then = function (thenHandler) {
        
    }
    this.catch = function (catchHandler) {
        
    }
    executor(res,rej)
}

let promise = new Mypromise(function(res, rej){
    
})