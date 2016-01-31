import * as types from '../constants/ActionTypes'

//添加
export function addTodo(text) {
  return { type: types.ADD_TODO, text }
}

//删除
export function deleteTodo(id) {
  return { type: types.DELETE_TODO, id }
}

//编辑
export function editTodo(id, text) {
  return { type: types.EDIT_TODO, id, text }
}

//完成
export function completeTodo(id) {
  return { type: types.COMPLETE_TODO, id }
}

//全部完成
export function completeAll() {
  return { type: types.COMPLETE_ALL }
}

//清楚完成
export function clearCompleted() {
  return { type: types.CLEAR_COMPLETED }
}
