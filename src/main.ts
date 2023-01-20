// type any = noErrorType;
// type unknow = 所有类型联合

//any 不是所有类型的联合
//比如
const func = (a: string | number ) => {
  // a.toLocaleString 只能用交集含有的方法

}
//但是如果使用any
const anyFunc = (a: any) => {
  a.toFixed();
  a.toString(); //可以用所有类型的方法
  // const b: never = a;
}
//ts绝大部分规则对any不生效

//什么类型是所有类型的联合 //unknow
const f = (a: unknown) => {
  if (typeof a === 'string') {
    
  }else if( typeof a === 'number') {
    a
    
  }
}

export {}