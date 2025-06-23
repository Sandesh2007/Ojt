console.log("Hello js");

let uname = ""

const firstPromise = new Promise((resolve, reject) => {
    setTimeout(()=> {
        console.log("This prints after 3 secs");
        uname = "sandesh"
        resolve()
    },3000)
})

firstPromise.catch(() => {
    console.error("Error at ln:14");
})
.finally(()=>{
    console.log(uname);
})
let marks ={
    name: "sandesh",
    mark: 80
}