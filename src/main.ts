// 普通函数  普通函数类型声明得时候 必须使用箭头函数
type Person = {
  name: string,
  age: number,
  gender: string,
  sayHi: FunWithThis
}
type FunWithThis = (this: Person, name: string) => void;
const func: FunWithThis = function (this, name1) {
  console.log('hi' + this.name);
}
const x: Person = {
  name: 'xdd',
  age: 22,
  gender: 'address',
  sayHi: func
}
x.sayHi('jack');// this指得就是x  
func.call(x, 'Roll');
export {}