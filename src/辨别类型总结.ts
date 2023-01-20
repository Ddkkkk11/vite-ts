// 辨别类型总结
type Action = { type: 'getUser', id: string }
  | {
    type: 'createUser', attributes: {
      id: string,
      name: string
    }
  }
  | { type: 'deleteUser', id: string }
  | {
    type: 'updateUser', attributes: {
      id: string,
      name: string
    }
  }
  const actionFunc = (action: Action) => {
    if (action.type === 'getUser') {
      action
    }
  }
//相同属性可以进行类型收窄 但是kind必须是基本数据类型 不能变成对象
export { }