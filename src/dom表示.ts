// const button = document.getElementById("#root");
// if (button) {
  // button// 如果button存在则button为HTMLElement
  // button.addEventListener("click", () => {}, undefined);
// }
type A = null;
const a: A = null;//声明一个集合为空
const s: symbol = Symbol('s');
console.log('s', s);
//this
type Person = {
  name: string
}
type F = (this: Person, name: string) => void;
const Fn: F = function(name) {
  console.log(this.name);
}
Fn.call({name: "qwe"}, "Roll"); //如果使用this必须放到第一个 而且只能叫this
const x = {};
export {}
