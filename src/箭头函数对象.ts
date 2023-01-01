// 函数对象怎么描述
type FunA = (arg1: number, arg2: string) => string
const funa: FunA = (x, y) => {
  //参数没有类型 却编译通过了 ?? 
  return 'HelloWorld'
}

funa(1, '2'); //调用需要遵守类型
type FnReturnVoid = (args1: number) => void;
const funVoid: FnReturnVoid = () => {
  console.log('123');
  return '123'  
}
type FnReturnUndefined = (args: 1) => undefined;
const fnUndefined: FnReturnUndefined = () => {
  // console.log('undefined');
  return undefined;
}


export {}