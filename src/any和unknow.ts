//any unknow ？？？
const a: unknown = 1;
a.fixed();//声明了一个变量 类型是unknow 值是1但是无法调用.fixed() 因为类型是unknow 不知道
//unknow 适合 从外部获取的 但是这个值我无法知道
const b:unknown = ajax.get('url');
//从远处获取到的值 先把他盖住 然后get得到的值被改在下面 需要使用的时候断言
const c = (b as number);
// never一个不包含任何元素的集合叫空集
type A = number & string; //A的类型是number且是string
const newA: A = '' //new A的类型就是never
//never是做类型推断的
type nev = string | number | boolean;
const obj: nev = 'asd' as any;
if (typeof obj === 'string') {
  obj.toLocaleUpperCase()
}else if(typeof obj === 'number') {
  obj.toFixed();
}else if (typeof obj === 'boolean') {
  obj.valueOf();
}else {
  obj
}
export {}