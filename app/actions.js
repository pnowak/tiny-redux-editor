import { ADD_CHAR, REMOVE_CHAR, CREATE_NEW_PARAGRAPH } from './consts';

export const addChar = (value, attribute = null ) => ({
  	type: ADD_CHAR,
  	chars: [ { value, attribute } ]
});

export const removeChar = (value) => ({
	type: REMOVE_CHAR,
	chars: [ value ]
});

export const createNewParagraph = () => ({
  	type: CREATE_NEW_PARAGRAPH,
  	paragraphs: { chars: [] }
});