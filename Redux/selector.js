const getTodosByVisibilityFilter = (todos, visibilityFiler) => {
	switch (visibilityFiler) {
		case "SHOW_COMPLETED_TODO":
			return todos.filter((todo) => todo.completed);
		case "SHOW_INCOMPLETED_TODO":
			return todos.filter((todo) => !todo.completed);
		default:
			return todos;
	}
};
export default getTodosByVisibilityFilter;
