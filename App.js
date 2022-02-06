import React from "react";
import TodoApp from "./components/TodoApp";
import { store } from "./Redux/store";
import { Provider } from "react-redux";

export default function App() {
	return (
		<Provider store={store}>
			<TodoApp />
		</Provider>
	);
}
