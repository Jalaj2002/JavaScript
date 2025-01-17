// function getData(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(455) 
//         },3000);
//     })
// }
// console.log("loading modules")

// console.log("Do something else")

// console.log("Load Data")

// let data=getData()

// // this is the callback way 
// // to improve this method; Async and Await is called
// data.then((v)=>{
//     console.log(data)

//     console.log("process data") 

//     console.log("task 2")
// })

// _______________________________
// This is improved method of above code using async and await

// Asynchronous funtion declaration
async function getData() {
    // simulate getting data from server
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()   // Converting promise to JSON
    
    // await keyword will make them wait for the data to be available
    console.log(data)
}

async function main() {
    console.log("loading modules")

    console.log("Do something else")

    console.log("Load Data")

    // making data to wait to until the funtion returns
    let data = await getData()

    console.log(data)

    console.log("process data")

    console.log("task 2")
}
main();       // calling the function to execute the program