var arr = ["A","B","c", "D"];
console.log(arr);
// alert(arr);
console.log(arr.includes("A"));
console.log(arr.includes("E"));


op = [];
c= 1;

function fbz(){
    op.push(c);
    c++;
    console.log(op);
}

console.log("\nwhile loop");
var i =1;
while(i<5){
    fbz();
    i++;
}
console.log("for loop");
for(var x = 0; x<2; x++){
    fbz();
}
console.log("\nLength of op array = "+op.length);