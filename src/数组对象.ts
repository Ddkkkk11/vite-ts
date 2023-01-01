//数组对象怎么描述
const arr: Array<number> = [1, 2, 3];
type A = string[];
const a: A = ['1', '2'];
console.log('a', a);
// ==> type A = Array<string>'
type Three = [string, string, string];
const d: Three = ['1', '2', '3'];// 三个string类型组成的数组
type E = [string, number];
const e: E = ['1', 2];
//思考题
type Think = [1, 2, 3];
const think: Think = [1, 2, 3];
export {}