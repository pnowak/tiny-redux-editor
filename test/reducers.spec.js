import reducer from '../app/reducers/index.js';
import * as actions from '../app/actions';
import * as types from '../app/consts';

describe('reducers', () => {
  	it('should return the initial state', () => {
  		const initialState = {
  			root: { 
  				paragraph: []
  			}
  		};
	    expect(
	      	reducer(undefined, {})
	    ).toEqual(initialState);
  	});

  	
});