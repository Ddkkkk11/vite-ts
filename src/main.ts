type A = number | string;
const func = (a: A) => {
  (a as number).toFixed()
}
//typeof 有很多局限性 比如 typeof null 返回object  数组 对象 函数 同理
const func1 = (a: Date | Date[]) {
  if (a instanceof Date) {
    a //  (parameter) a: Date
  }else {
    a // a: Date[]
  }
  //instanceof 局限性 不支持简单类型 比如string number boolean
  //但是都不支持ts独有类型
}
type Person = {
  name: string
}
type Animal = {
  x: string
}
const fun = (a: Person | Animal) => {
  if ('name' in a) {
    a // Person
  }else {
    //Animal
    //in只适用于部分对象
  }
}
const f1 = (a: string | number) => {
  a = 1;
  a//number
    
  
}

export {}