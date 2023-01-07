//type interface 区别
type A = number;
// A = string; //不可以重新赋值  //缺点就是不能扩展
const a: A = 123;
interface X {
    name: string
}
interface X {
    age: number
}
const x: X = {
    name: 'roll',
    age: 22,
}
console.log(x); //interface 可以把类型合并
console.log(a);
declare global {
    interface String {
        sayHi(x: string): void
    }
}
const str = 'String类型';
str.sayHi('helloWorld!');
//对外API尽量用Interface 方便扩展
type newA = {
    aaa: string
}
type newB = {
    bbb: string
} & newA
const b: newB = {
    aaa: 'sss',
    bbb: 'asd'
}
console.log('b', b);
export {}