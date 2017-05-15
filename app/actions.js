import { ADD_CHAR, REMOVE_CHAR, CREATE_NEW_PARAGRAPH } from './consts';

export const addChar = (value) => ({
  	type: ADD_CHAR,
  	paragraph: [ value ]
});

export const removeChar = (value) => ({
	type: REMOVE_CHAR,
	paragraph: [ value ]
});

export const createNewParagraph = () => ({
  	type: CREATE_NEW_PARAGRAPH,
  	root: paragraph
});