let arr = [2, 1, 3, 2, 7, 2, 8, 4, 3, 6, 10, 9, 12];
let Arr = Array.from(arr, (x) => x );
let fromArr = Array.from(arr, (x) => x * 5);
let arr1 = arr;
let arr2 = arr;
let remove=arr.filter((item,index)=>arr.indexOf(item)==index)
// ascending  array
console.log("----------------- ascending  array-----------------");
arr1.sort((a, b) => a - b);
console.table(arr1);

// descending  array
console.log("----------------- descending  array-----------------");
arr2.sort((a, b) => b - a);
console.table(arr2);
// filter array
console.log("----------------- filtered array-----------------");
const filteredArr = arr.filter((num) => num > 5);
console.log(filteredArr);
//    max && min
console.log("----------------- max and min-----------------");
let max = arr1[0];
let min = arr1[arr.length - 1];
console.log(`Maximum  ${max}`);
console.log(`Minimum  ${min}`);
// array from
console.log("----------------- array from-----------------");
for (let i = 0; i < fromArr.length; i++) {
  console.log(fromArr[i]);
}
// remove repeated number
 console.log("----------------- remove repeated number-----------------");
 for(let i=0;i<remove.length;i++) {
     console.log(remove[i]);
 }
// count even number
let count=0;
 console.log("----------------- count even number-----------------");
 for(let i=0;i<arr.length;i++) {
    if(arr[i]%2==0) count++;
    //  console.log(arr[i]);
 }
 console.log(`count  even number = ${count}`);
//  display array ad string
 console.log("----------------- display array as string-----------------");
 console.log(Arr.join("*"));



//  ----- Search --------
console.log("----------------reduce sum------------")
let sum=Arr.reduce(function (acc,curr){
    return acc + curr;
});
console.log(` Sum is : ${sum}`);


// find => element&& findIndex =>index of element
 console.log("----------------- find and findIndex-----------------");
 console.log(Arr.find(x => x > 5));
 console.log(Arr.findIndex(x => x > 5));

//  indexof =>Finds the first index of a specific value in an array.
//  && includes =>(true || false) Checks if a specific value exists in an array.
 console.log("----------------- indexof and includes-----------------");
 console.log(Arr.indexOf(7));
 console.log(Arr.includes(7));