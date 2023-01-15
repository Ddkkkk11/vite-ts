//void 补充
type Fn = () => void;
const fn: Fn = () => {
  return ''
}
const result = fn(); //const result: void
console.log(result .toString()); //类型“void”上不存在属性“toString”
console.log((result as any).toSting()); //断言 比void大
//箭头函数和function 函数 都可以有多余的return  但是返回值的类型还是void
const fnC = (): void => {
  return '' //会报错
} 
export {}