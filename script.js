//your JS code here. If required.
let first=document.querySelector(".first");
let one = document.getElementById("one");
let stop= document.querySelector(".stop")

let second=document.querySelector(".second");
let two = document.getElementById("two");

let third=document.querySelector(".third");
let three = document.getElementById("three");

let forth=document.querySelector(".forth");
let four = document.getElementById("four");

let fifth=document.querySelector(".fifth");
let five = document.getElementById("five");

let sixth=document.querySelector(".sixth");
let six = document.getElementById("six");

stop.addEventListener("click",()=>{
    one.pause();
    two.pause();
    three.pause();
    four.pause();
    five.pause();
    six.pause();
    
})

first.addEventListener("click",()=>{
    console.log("working");
    one.play();
})

second.addEventListener("click",()=>{
    console.log("working");
    two.play();
})
third.addEventListener("click",()=>{
    console.log("working");
    three.play();
})
forth.addEventListener("click",()=>{
    console.log("working");
    four.play();
})
fifth.addEventListener("click",()=>{
    console.log("working");
    five.play();
})
sixth.addEventListener("click",()=>{
    console.log("working");
    six.play();
})
