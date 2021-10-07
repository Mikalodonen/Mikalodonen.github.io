function setup() {
  createCanvas(400, 500);
  text("Output is in the console", 20,20)

  //opgave 1
console.log("loop demo opgave 1");

//initialization
let i = 10 

while(i > 0){
  console.log("while demo" +i)

  //increment
  i=i-1
}
console.log("done");

//opgave 2


for(let i = 0; i < 10; i++){
  console.log(i);
}
}
