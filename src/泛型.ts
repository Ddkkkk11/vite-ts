// 泛型generics 宽泛的类型
function dump<T>(args: T): T {
  return args;
}
let result = dump('123'); //result type === any
// let result = dump<string>('123'); //result type === any 这样result 就是一个string类型了  也可以不写  Ts类型推断 自动的把类型T推断处理啊
//简而言之 <T>就是类型的参数  和函数的参数相似 只不过传的是类型
let result1 = dump(true); // result1 type === boolean
export {}