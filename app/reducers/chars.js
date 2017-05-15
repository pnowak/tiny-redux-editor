import { ADD_CHAR, REMOVE_CHAR } from '.././consts';

function chars(state = [], action) {
    switch (action.type) {
        case ADD_RECT:
            return state.concat([
                value
            ]);
        case REMOVE_RECT:
            return state.filter(function(value) {
                return value != char.value;
            });          
        default:
            return state;
    }
}

export default chars;