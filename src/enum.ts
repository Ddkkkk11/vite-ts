//枚举
//什么时候用enum 映射？
enum A {
  todo = 0, 
  done,//不写的话默认是++
  archived,
  deleted 
}
//可以把后端返回的数据1234对应成 A.todo , A.done
let status: A = A.todo;
console.log(status, 'status');

//权限控制
enum Permission {
  None = 0, //0
  Read = 1 << 0, //值1   1*2的0次方 0001
  Write = 1 << 1,//值2 1*2的1次方   0010
  Delete = 1 << 2,//值4 1*2的2次方  0100
  Manager = Read | Write | Delete //js的或  0111
}
//远程获取User
type User = {
  permission: Permission
}
const user: User = {
  permission: 0b0101
}
//进行与操作 与运算 1&1 才为1 任何数字与上一个值还为这个值 则 这个数字拥有这个值的所有1 example: a&b === b 则a有b的所有1
if ((user.permission & Permission.Write) === Permission.Write) {
  console.log('拥有写权限');
  
}

export {}