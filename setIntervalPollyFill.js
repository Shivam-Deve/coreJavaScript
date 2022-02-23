let mySetInterval = function (callbackFn, interval) {
    function calls() {
        setTimeout(() => {
            callbackFn();
            calls();
        }, interval)
    }
    
    calls();
}

mySetInterval(() => {
    console.log("hii")
}, 2000)