//枚举的错误用法
//number enum 1  string enum 0 other enum 0 
enum Fruit {
    apple = 'apple',
    banana = 'banana'
}
// const f: Fruit = 'apple'; // err Type '"apple"' is not assignable to type 'Fruit'.
const f: Fruit = Fruit.apple; // err Type '"apple"' is not assignable to type 'Fruit'.
console.log(f)
export {}