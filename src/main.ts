const a: number = 1;
console.log(a);
//不用String Number Boolean 还有大写的Object(表示范围太大)
//如何在TS中描述数据类型
//用Class/constructor描述 比如Function Array<number>
//使用type和interface描述对象


type Person = {
  name: string; //后面可以写;或者,
  age: number;
}
const newPer: Person = {
  name: 'roll',
  age: 20
}
console.log('newPer', newPer)
type A = {
  [key: string]: number //表示对象的key必须是一个字符串  对象的val必须是数字 
  //这种写法是索引签名
}
type Test = {
  [key: number]: number
}
type A2 = Record<string, number>
// Text ==> 等价于A2 
const test: Test = {
  123: 123
}
//可以对key进行类型的检查 但是最后还是会转为字符串
console.log(test[123])
const newA: A = {
  1: 1,
 // 2: '123' //这里会报错 不能把string类型赋值给number  实际上是 不能把'123'这个字符串赋值给 val为number类型的值
}
type B = {
  [key: symbol]: number
}
const bSon = Symbol();
const b: B = {
 // bSon: 123 //会报错
 [bSon]: 123 //如果key值是Symbol 对象key必须用[]括起来 //索引签名必须是string number Symbol
}
export {}