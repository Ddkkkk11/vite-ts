//type 和interface 的区别是什么 
//1. interface只描述对象
//2. type则描述所有数据
//区别2
// 1. type只是别名 (给一个已有的类型声明一个别名)
// 2.interface 则是类型声明
//基本上type可以用于任何类型  type生成的是一个类型的别名 而不是一个新的类型
type Name = string;
type FalseLike = '' | null | undefined | 0 | false ;
type Point = { x: number, y: number };
type Points = Point[]; 
type line = [Point, Point];//二元组
type Fn = (a: number, b: number) => {}//正常函数
//带有属性的函数
type FnWithProp = {
  (a: number, b: number): void, //表示是一个函数
  prop: string //函数里面有属性是prop
}
const f: FnWithProp = (x, y) => {
  return x + y;
}
f.prop = 'helloWorld!';
console.log('f', f)
const zero: FalseLike = '';
const hi: Name = 'hi';
console.log('hi', hi);
//interface 描述对象的属性
 interface IUser {
  username: string,
  password: string
 }
 interface IUserAll {
  [k: string]: number
 }
 const userAll: IUserAll = {
  user0: 1,
  user1: 2
 }
 console.log(userAll);
 const user: IUser = {
  username: 'xdd',
  password: '123'
}
//interface 表示数组？
interface X {
  age: number
}
interface A extends Array<string>, X {
//A拥有数组类型 还拥有age类型
name: string //还有name属性
}
// ==> 
type A1 = Array<string> & {
  name: string
}& X
//interface描述函数
interface IFn {
  (a: number, b: number) : void
  // sayHello: (a: string, b: string) => number,
  miss: string
}
const Fn: IFn = () => {}
Fn.miss = 'I am Missing!'
//interface 日期属性
interface D extends Date {
  xxx: string,
  age: number
}
const date: D = new Date();
date.xxx = 'xxx';
date.age = 20; //err  Type 'Date' is missing the following properties from type 'D': xxx, agets(2739) 
// 
console.log(date);

//!!!!!!!!!!!!!
type C = string; 
type B = C; //type B = string 好像C就不存在
//interface
interface D extends Date {}
type E = D; //type E = Dsh D是存在的
export {}