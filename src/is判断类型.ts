//is 判断类型
type Rect = {
  height: string,
  width: string
}
type Circle = {
  center: [number, number]
  radius: number
}
const func = (a: Rect | Circle ) => {
  // if ('width' in a && 'height' in a) {
  //   a // Rect
  // }
  if (isTest(a)) {
  }
  if ('width' in a && 'height' in a) {
    a//is和这种的区别是什么?
  }else {
    a//Circle
  }
    
  
}
function isRect(x: any): x is Rect {
  return 'width' in x && 'height' in x
  //如果返回值是boolean ts无法推断出类型
}
const isTest = (b: any): b is Rect => {
  return 'width' in b && 'height' in b 
}
export {}