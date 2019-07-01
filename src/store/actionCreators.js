import { CHANGE_INPUT_VALUE, CHANGE_LIST_VALUE, DELETE_TODO_ITEM } from './actionType';

export const getInputChagenAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})
export const getAddItemAction = () => ({
  type: CHANGE_LIST_VALUE
})
export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})