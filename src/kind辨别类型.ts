// kind
type A = { kind: 'string', values: string }
type B = { kind: 'number', values: number }
const fun = (a: A | B) => {
  if (a.kind==='string') {  
    a
  }else {
    a
  }
}
type Circle = { kind: 'person', center: [number, number] }
type Square = { kind: 'student', sideLenght: number }
type Shape = Circle | Square
const fun1 = (a: Shape) => {
  if (a.kind ==='person') {
    
  }else {
    
  }
}

//相同属性可以进行类型收窄 但是kind必须是基本数据类型 不能变成对象
export {}