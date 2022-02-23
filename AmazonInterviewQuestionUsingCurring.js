// sum(1)(2)(3)(4)..........(n)()

function sum(x) {
    return function (y) {
        if (y == undefined) {
            return x;
        } else {
            return sum(x + y);
        }
    }
}

let x = sum(1)(2)(3)(4)(5)(6)(7)()
console.log(x)