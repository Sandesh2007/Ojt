function work() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Work done");
        }, 1000)
    })
}

function goHome() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Went home")
        }, 3000)
    })
}

work().then(result => {console.log(result); return goHome()}).then(result => {console.log(result); console.log("Sleep")})