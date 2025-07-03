const person = {
    name: "Sandesh",
    age: 18,
    isStudent: true,
    needsMoney: true,
}

let container = document.getElementById("container")

for (const index in person) {
    let key = document.createElement("span")
    let value = document.createElement("span")
    let br = document.createElement("br")

    key.innerText = `${index} : `
    value.innerText = ` ${person[index]}`
    container.appendChild(key)
    container.appendChild(value)
    container.appendChild(br)
}

// click events

let btn = document.createElement("button")
let text = document.createElement("p")
btn.innerText = "Click here"
container.append(text)
container.append(btn)

let index = 1
btn.addEventListener("click", () => {
    text.innerText = `Button clicked ${index} times`
    index ++ 
})
