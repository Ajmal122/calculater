console.log("running......");
// const display = document.getElementByid("screen");
let display = document?.getElementById("screen");
console.log(display, "display");
function allclear() {
  display.value = "";
}
function show(n) {
  display.value += n;
}
function calc() {
  display.value = eval(display.value);
}