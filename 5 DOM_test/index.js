// alert('Hello');

// document.querySelector("h1").innerHTML = "GoodBye";
var head = document.firstElementChild.lastElementChild.firstElementChild; // html - body - h1
head.innerHTML = "Fuck u";
head.style.color = "green";

var k = document.getElementsByTagName("li");
console.log(k);
console.log(k.length);
k[2].style.color = "brown";

var y = document.getElementsByClassName("btn");// still an array even though there is a single element
y[0].style.color = "orange";

var z = document.getElementById("title1");// not an array as Id is unique
z.innerHTML = "Suck my D";

var a = document.querySelector("li a");
var b = document.querySelector("a");// a tag in h1 that comes before li
console.log(a);
console.log(b);


var c = document.querySelector("#title1");  // without # it becomes null
console.log(c);
var d = document.querySelector(".btn"); // without . it becomes null
console.log(d);

var e = document.querySelector("li.item");
console.log(e);
var f = document.querySelector("#list a");
console.log(f);
var g = document.querySelector("#list .item");
console.log(g);
var h = document.querySelectorAll("#list .item");
console.log(h);
console.log(h[1]);

// document.querySelector("li a").style.color = "red";
document.querySelector("li").style.color = "red";


// document.querySelector("h1").style.fontSize = "2rem";
// document.querySelector("h1").style.padding = "5%";

document.getElementById("title1").textContent = "Fuck u bitch!";

var x = document.querySelector("a").getAttribute("href");
console.log(x);

document.querySelector("a").setAttribute("href","https://www.bing.com/");

c = document.querySelector("button").classList;
console.log(c);
document.querySelector("button").classList.add("xyz"); // add, remove, toggle
c = document.querySelector("button").classList;
console.log(c);


c = document.querySelector("a").attributes;
console.log(c);