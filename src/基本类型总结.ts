//基本类型总结
type A = boolean;
const a: A = false;
console.log('a', a);
type B = Object;//包含所有的可以封装的类型  可以把string undefined 给Object 类似于any
type C = object;
const c: C = 1; //err 不能把number赋值给object  //类型于any
type Fn = () => void;
const fn: Fn = () => {
  return 123;
}
type Test = string & number;
const test: Test = '' //当一个类型即是string也是number的时候这个类型就是never  走到这步的时候检查下
const newNever: never = ''//
type As = number | string;
const as: As = '1'
export {}