let username = document.getElementById("username")
let role = document.getElementById("role")
let adminNote = document.getElementById("admin")
let username_input = document.getElementById("username_input")

let person ={
    username : "Sandesh",
    role: "user"
}

username.innerText = person.username
role.innerText = person.role
console.log(person.username);
console.log(person.role);

if (person.role == "admin") {
    console.log(person.username, "is admin");
    adminNote.style.display = "block"
}


let age = 18 

age <18 ? console.log("You are young") : console.log("You are adult")

