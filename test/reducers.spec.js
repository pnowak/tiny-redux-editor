import reducer from '../app/reducer.js';
import * as actions from '../app/actions';
import * as types from '../app/consts';

describe('reducers', () => {
  	it('should return the initial state', () => {
  		const initialState = {
			'paragraphs': [
		        {
		            'chars': []
		        }
		    ]
  		};
	    expect(
	      	reducer(undefined, {})
	    ).toEqual(initialState);
  	});

  	
});