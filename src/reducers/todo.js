function todo(
  state = {
    tasks: [
      { id: 0, name: 'Learn React', done: false },
      { id: 1, name: 'Learn CSS', done: true },
      { id: 2, name: 'Web development', done: true }
    ]
  },
  action
) {
  switch (action.type) {
    case 'TOGGLE_CHECK':
      const newState = { ...state };
      newState.tasks[action.checkedId].done = !state.tasks[action.checkedId].done;
      return newState;
      break;
    default:
      return state;
      break;
  }
}
export default todo;
