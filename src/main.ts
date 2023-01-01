//其他对象一般用 构造函数描述
const d: Date = new Date();

const r: RegExp = /ab+c/
const r2: RegExp = new RegExp('ab+c');
console.log('r', r);
const m: Map<string, number> = new Map();
m.set('1', 2);
const vm: WeakMap<{ name: string}, number> = new WeakMap();
console.log('vm', vm)
//小写Object什么意思
type A = object;
const a: A = {}; //小写object是非大写对象和基本得类型 {} [] () => 1 
const s: Set<number> = new Set();
s.add(1);
console.log(s, 's');
const weak: WeakSet<string[]> = new WeakSet();
const weakResult = weak.add(['1', '2', '3']);
export {}