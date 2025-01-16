// console.log("Hey I am first")
// console.log("Hey I am second")
// // This will run later 
// setTimeout(()=>{
//     console.log("This is timeout")
// },2000);
// // This will run before the timeout
// console.log("I am after timeout")


// this is called Pyramid of doom OR CallBack Hell
const callback = (arg) =>{
    console.log(arg)
}

const loadscript=(src,callback)=>{
    let sc= document.createElement("script");
    sc.src=src;
    sc.onload = callback("Harry");
    document.head.append(sc);
}

loadscript("example.js",callback);