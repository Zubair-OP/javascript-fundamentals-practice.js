let number = 1122;
let nmbr = "1122"

// const newvlu = Number(nmbr);
// console.log(typeof (nmbr))
// console.log(typeof (newvlu))

// ********************************* Operations *******************************************************

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/3)
// console.log(2%3)

// let str1 ="zubi"
// let str2 = "me"

// let newr = str1 + str2;
// console.log(newr)


// let mydate = new Date();
// console.log(mydate)

// let date = new Date();
// let newn = date.getTime();
// console.log(newn)


// let min = 10;
// let max = 20;

// let ima = (Math.random() * (max - min) + 1) + min;
// console.log(ima);


// let arr = [1,2,3,4,5]
// let arr2 = ["zubi", "shakti" , "kdaskd"] 

// console.log(arr[0]);
// console.log(arr.concat(arr2))



// try {
//     let a = b + c
//     console.log(a)
// } catch (error) {
//     console.log("error agya bhai")
// }


// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num)
// }


// const str1 = "pakistan";

// for (const val of str1) {
//     console.log(`value is ${val}`)
// }

// MAPS

// const map = new Map();
// map.set("name","zubair")
// map.set("name","zubair")
// map.set("class","bcs")

//console.log(map);


// for (const [key , value] of map) {
//     console.log(key , ":-" , value)
// }


// let obj = {
//     "game" : "pubg",
//     "game" : "pubg",
//     "game" : "pubg",
// }


// for (const [key , value] of obj) {
//      console.log(key , ":-" , value)
// }

// hence for of loop is not iterable for objects


// let obj = {
//     'js': "javascript",
//     'java': "java",
//     'py': "python",
//     "rubi": 'rb'
// }


// for (const key in obj) {
//    console.log(`${key} shortcut is for ${obj[key]}`)
// }

// hence forin loops are used for objects specialaly

 
// let arr = [1,2,3,4,5]


// for (const key in arr) {
//    console.log(arr[key])
// }


// const map = new Map();
// map.set("name","zubair")
// map.set("name","zubair")
// map.set("class","bcs")


// for (const key in map) {
//    console.log(key)
// }



//  let arr = ['zy','qsd', 'sdq']

// arr.forEach((e)=>{
//     console.log(e)
// })

// arr.forEach(function (item){
//     console.log(item)
// })


// function my(item){
//     console.log(item)
// }

// arr.forEach(my)


// arr.forEach((item , index , arr)=>{
//     console.log(item , index , arr)
// })


// let arr2 = [
//     {
//         'language' : 'javascript',
//         'filename' : 'js'
//     },
//     {
//         'language' : 'python',
//         'filename' : 'py'
//     },
//     {
//         'language' : 'java',
//         'filename' : 'jy'
//     }
// ]


// arr2.forEach((items)=>{
//     console.log(items.filename)
// })


// let ar = [ 1,2,3,4,5,6,7,8,9,10];

// let newar = ar.filter((items)=> items > 4)
// console.log(newar)

// let newar = ar.filter((items)=> {
//    return items > 4
// })
// console.log(newar)

//let newnum = [];

// newnum.forEach((e)=>{
//     if (ar > 4) {
//         console.log(ar)
//     }
// })




// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

//  const filterbooks2 = books.filter((e)=> {
//    return e.publish < 2000 && e.genre === 'History'
// })
//   console.log(filterbooks2);

//   const filterbooks = books.filter( (bk)=> bk.genre === 'Science');
//   console.log(filterbooks)
//   const filterbooks2 = books.filter( (bk)=> bk.publish > 2000);
//   console.log(filterbooks2)





// let arr = [1,2,3,4,5,6,7,8,9,10]

// let ary =arr.map((e)=> e + 10)
// console.log(ary);

// let ary =arr.map((e)=>{
// return e + 10 
// })

// console.log(ary);





// let arr = [1,2,3,4,5,6,7,8,9,10]
// let ary = arr
// .map((num)=> num * 3)
// .map((num)=> num + 1)
// .filter((num)=> num >= 40)

// console.log(ary);




// let arr = [1,2,3,4,5,6,7,8,9,10];

// let ary = arr
//   .map((num) => num * 3).map((num) => num + 1).filter((num) => num >= 10)

// console.log(ary);




// let arr = [1,2,3]

// const result = arr.reduce(function(acc,cur) {
//   return  acc + cur
// },0)
// console.log(result)






// const shoppingCart = [
//     {
//         itemName: "js course",
//         price: 2999
//     },
//     {
//         itemName: "py course",
//         price: 999
//     },
//     {
//         itemName: "mobile dev course",
//         price: 5999
//     },
//     {
//         itemName: "data science course",
//         price: 12999
//     },
// ]

// const arry = shoppingCart.filter((e)=> e.itemName === 'js course');
// console.log(arry)


