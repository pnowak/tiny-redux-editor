import * as actions from '../app/actions';
import * as types from '../app/consts';

describe('actions', () => {
  	it('should create an char - ADD_CHAR', () => {
	    const a = 'a';
	    
	    const addCharAction = {
	      	type: types.ADD_CHAR,
		    chars: [
	           	{ value: 'a', attribute: null }
	        ]
	    };
	    
	    expect(actions.addChar(a)).toEqual(addCharAction);
  	});	
});