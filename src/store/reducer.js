import { CHANGE_INPUT_VALUE, CHANGE_LIST_VALUE, DELETE_TODO_ITEM } from './actionType';

const defaultState = {
    inputValue: '',
    list: []
};
// reducer可以接受state但是不能修改state
export default (state = defaultState, action) => {
    console.log(state, action)
    if (action.type === CHANGE_INPUT_VALUE) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    } 
    if(action.type === CHANGE_LIST_VALUE) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if(action.type === DELETE_TODO_ITEM) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }
    return state;
}