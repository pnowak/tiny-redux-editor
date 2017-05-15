import { createStore } from 'redux';
import reducer from './reducers/char.js';
import * as actions from './actions';

let store = createStore(reducer);

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// Dispatch some actions
store.dispatch(actions.addChar('z'));
store.dispatch(actions.addChar('i'));
store.dispatch(actions.removeChar('i'));
store.dispatch(actions.addChar('x'));

// Stop listening to state updates
unsubscribe()