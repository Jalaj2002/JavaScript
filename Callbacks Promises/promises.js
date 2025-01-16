console.log('This is Promises');

let prom1=new Promise((resolve,reject)=>{
    // this is the case to reject ....3
    let a= Math.random();
    if (a<0.5){
        // It will show this message as error handle rejection 
        reject("No random number was not supoorting you")
    }
    else{ 
        setTimeout(()=>{
            // this part will run after 3 seconds.....2
            console.log('Yes I am done')
            resolve("Jalaj")
        },3000)
    }

})
// when the console gets resolved then run this...1
// prom1.then((a)=>{
//     console.log(a)
// })

// Same as above but it shows the error message instead of error
prom1.then((a)=>{
    console.log(a)
}).catch((err)=>{      // error message
    console.log(err)
})    

// promise APIs:

//Promise.all(promises)
//Promise.allSettled(promises)
//Promise.race(promises)
//Promise.any(promises)
//Promise.resolve(value)
//Promise.reject(error)