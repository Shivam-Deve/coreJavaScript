
// let a = {
//     name: "Shivam",
//     print: () => {
//         console.log(this.name) // here this is pointing to it's parent(object a)'s this 
//     }
// }
// a.print();

let a = {
    name: "Shivam",
    b: {
        name: "Satyarth",
        print: function () {
            let x = () => {
                console.log(this) // here this is pointing to it's parent this(object b)
            }
            x()
        }
    }
}
a.b.print()
