const visibilityFilter = (state = "SHOW_ALL_TODOS", action) => {
	switch (action.type) {
		case "SET_FILTER": {
			return action.filter;
		}
		default: {
			return state;
		}
	}
};

export default visibilityFilter;
