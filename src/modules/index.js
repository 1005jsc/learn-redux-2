import counter from './counter';
import todos from './todos';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ counter: counter, todos: todos });
export default rootReducer;
