let greet = document.querySelector(".h-body");
Date();
let date = new Date();
date = date.getHours();
// console.log(Date());
let greeting;

if(date >= 4 && date < 10) {
    greeting = "Good Morning";
}else if(date >= 10 && date < 12) {
greeting ="Good Day";
}else if(date >= 12 && date < 18) {
    greeting = "Good Afternoon";
}else if(date >= 18 && date < 22) {
    greeting = "Good Evening";
}else if(date >= 22 && date < 4 ) {
    greeting = "Good Night";
}else{
    greeting = "where your time come from???"
}
greet.append(greeting);