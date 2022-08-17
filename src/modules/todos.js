const initialState = [];

const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

let nextId = 1;
export const addTodo = (text) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    text: text,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id: id,
});

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, done: !todo.done };
        }
      });
    default:
      return state;
  }
};
export default todos;
