// const p= ["c","c++", "phy", "java"]
// const p1 =p[0]
// const p2 =p[1]

// const p3 =p[2]

// console.log(p1,p2,p3)

// const p= ["c","c++", "phy", "java"]

// let [top1,top2,top3,top4] = p

// console.log(top1)


// const p= ["c","c++", "phy", "java"]
// console.log(p.length)

// // let [top1,top2,top3,top4] = p

// let [top1,,,top4] = p

// console.log(top1,top4)



// const p= ["c","c++", "phy", "java"]
// // console.log(p.length)

// // let [top1,top2,top3,top4] = p

// let top1,top2
// [top1,top2]=p 

// console.log(top1,top2)


// let a= 5
// let b =10
// let temp  = a
// a=b;
// b =temp
// console.log("a"+a +" "+ "b"+b) 


// let num1 =  5
// let num2 = 12
// console.log(num1,num2)
// [num1, num2] = [num2, num1];


// console.log(`The value of a after swapping: ${num1}`);
// console.log(`The value of b after swapping: ${num2}`);



// object destructuring



// let obj ={
//     names: "jamshed",
//     fName : "Shahid",
//     age : 26,
//     deg : "mdn",
//     hob :{
//         fir : "playing",
//         sec :"blue"



//     }
// }


// let { names, fName ,age ,deg , hob} = obj
//   console.log(`my name is ${names}`)
//   console.log(`my father is ${fName}`)
//   console.log(`my sec is ${hob.sec}`)





// console.log(`My Name is ${obj.names}`)
// console.log(`My Name is ${obj.fName}`)
// console.log(`My Name is ${obj.age}`)
// console.log(`My Name is ${obj.deg}`)

// function names (){
//    var a= 5
//    var b =3
//    return a+b
// }
// document.write(names())


// let name =()=>{
//     let a= 6
//     let b = 8
//     return a + b
// }
// document.write(name())


// let a= 6
// let b = 38
// const sum =(c)=> a +b + 55 +c

// console.log(sum(34))




// default parameter


// function mul(a,b){
//     console.log(b)
//     b = (typeof b !== 'undefined') ? b :2
//     console.log(a*b)
// }
// mul(4);




// function mul(a, b=5){
//  console.log(a*b)
// }
// mul(3)

const mult = (a,b=5,c=4) =>{
    console.log(a*b+4)
}
mult(4)