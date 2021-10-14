function setup() {
  createCanvas(400, 500);
  text("Output is in the console", 20,20)

  //opgave 1
console.log("loop demo opgave 1");

//initialization
let i = 10 

while(i > 0){
  console.log(i)

  //increment
  i=i-1
}
console.log("done");

//opgave 2

console.log("loop demo opgave 2");
let xSum = 0
for(let x = 1; x <= 20; x++){
//xSum = xSum + x
xSum += x

console.log(xSum)

}
console.log("done");

//opgave 3

console.log("loop demo opgave 2");

for(let n = 1; n <= 10; n++){
  console.log(n+"-tabellen")

  for(let multi=1; multi<=10; multi++){
  let result = n * multi
  console.log(result)

//console.log(2-tabellen)
//for(let i=2; i<=20; i+= 2){
//console.log(i)

//console.log(3-tabellen)
//for(let i=3; i<=30; i+= 3){
//console.log(i)
}
}
console.log("done");

//opgave 4

console.log("opgave 4")

//console.log("y=3*x*x+6*x+9")
//for(let x = 0; x<=10; x++){
//  let y=3*x*x+6*x+9
//console.log("y="+y)

console.log("y=3*x*x+6*x+9")

console.log("opg a")
for(let i = 0; i<=10; i++){
  let x = i
  let y=3*x*x+6*x+9
console.log(x, y)
}

console.log("opg b")
for(let i = 0; i<=10; i++){
  let x = i*10
  let y=3*x*x+6*x+9
console.log(x, y)
}

console.log("done");
}