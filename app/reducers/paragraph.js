import { ADD_CHAR, REMOVE_CHAR } from '.././consts';

function paragraph(state = [], action) {
    switch (action.type) {
        case ADD_CHAR:
            return state.concat([
                { value, style }
            ]);
        case REMOVE_CHAR:
            return state.filter(function(value) {
                return value != state.paragraph.value;
            });          
        default:
            return state;
    }
}

export default paragraph;