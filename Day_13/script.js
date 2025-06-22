
console.log("Hello world!!")
console.log("This is a js file")

const _name = "Sandesh"
let a
console.log(a)

a =3
console.log(a)


let hello = document.getElementById("name");

function toggle_name() {
    if (hello.innerText == "Name") {
        hello.innerText = _name
    } else {
        hello.innerText = "Name"
    }
}
