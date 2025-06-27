document.writeln("Hello")

// const person = {
//     name: "sandesh",
//     age: 18,
//     phoneno: 9876543210,
//     isStudent: true,
// }

// console.log(person.name,);
// console.log(person.age);
// console.log(person.phoneno);
// console.log(person.isStudent);

const video = {
    thumbnail: "thumbnail.png",
    title: "Rust in 100 Seconds",
    views: "2.1M",
    channelName: "Fireship",
    uploadDate: "3 years ago",
    tags: "#100SecondsOfCode #rust #programming",
}

for (const key in video) {
    console.log(`${key} : ${video[key]}`);
}

