import { ADD_CHAR, REMOVE_CHAR } from '.././consts';

function chars(state = [], action) {
    switch (action.type) {
        case ADD_RECT:
            return state.concat([
                { value, style }
            ]);
        case REMOVE_RECT:
            return state.filter(function(value) {
                return value != state.paragraph.value;
            });          
        default:
            return state;
    }
}

export default chars;