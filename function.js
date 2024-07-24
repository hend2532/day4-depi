//capital name
console.log("")
console.log("---------task 2--------")
console.log("-----------capital name------")
function capital(name) {
    return name.split(' ').map(word=>{
        return word[0].toUpperCase() + word.slice(1).toLowerCase();;
    }).join(' ');
}
console.log(capital("hend hany"))

//longest word
console.log("-----------longest word------")
function longestWord(name) {
    let max1=0;
    let sen="";
     name.split(' ').forEach(word=>{
        if(max1 < word.length) {
            sen=word; max1=word.length
        }
    })
    return  sen;
}
console.log(longestWord("hend hany elkadeem"))


// alphabetic order
console.log("-----------alphabetic order------")
function alphabeticOrder(name) {
    return name.split('').sort().join('');
}
console.log(alphabeticOrder("javascript"));

// month name from date

console.log("-----------month name from date------")
function monthName(date) {
    let monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    return monthNames[date.getMonth()];
}
let date =new Date(2024,7,24);
console.log(monthName(date));
