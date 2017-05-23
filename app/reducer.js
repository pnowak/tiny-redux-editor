import { CREATE_NEW_PARAGRAPH, ADD_CHAR, REMOVE_CHAR } from './consts';

const initialState = {
    'paragraphs': [
        {
            'chars': []
        }
    ]
};

function chars(state = initialState, action) {
    switch (action.type) {
        case CREATE_NEW_PARAGRAPH:
            return Object.assign({}, state, {
                paragraphs: [
                    ...state.chars,
                    {
                        chars: []
                    }
                ] 
            });
        case ADD_CHAR:
            return Object.assign({}, state, {
                chars: [
                    ...state.chars,
                    {
                        value: action.value,
                        attribute: action.attribute
                    }
                ]
            })  
        case REMOVE_CHAR:
            return state.filter(function(value) {
                return value != state.paragraph.value;
            });          
        default:
            return state;
    }
}

export default chars;