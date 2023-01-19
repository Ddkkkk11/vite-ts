//联合类型
type A = { name: string }
type B = { age: number }
type C = A | B;
const c: C = {
  name: 'roll',
  age: 22
}
//C类型属于A和B的交集
console.log('c', c);
const func = (a: number | string) => {
  if (typeof a !== 'string') {
    a.toFixed();
  }else {
    a.toString();
  }
  //拆开的这个过程叫做类型收紧
  

}
export {}