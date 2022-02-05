import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { deleteTodo } from "../Redux/actions";
import Icon from "react-native-vector-icons/AntDesign";
import getTodosByVisibilityFilter from "../Redux/selector";

const TodoList = ({ toggleTodo, deleteTodo }) => {
	const { todos, visibilityFilter } = useSelector((state) => state);
	const filterTodos = getTodosByVisibilityFilter(todos, visibilityFilter);
	return (
		<View
			style={{
				marginTop: 10,
			}}
		>
			{filterTodos.map((todo) => (
				<View key={todo.id}>
					<TouchableOpacity onPress={() => toggleTodo(todo.id)}>
						<View
							style={{
								backgroundColor: "#cbebff",
								padding: 10,
								margin: 5,
								marginTop: 5,
								bottom: 10,
							}}
						>
							<Text
								style={{
									fontSize: 15,
									justifyContent: "flex-start",
									textDecorationLine: todo.completed ? "line-through" : "none",
									color: todo.completed ? "red" : "black",
								}}
							>
								{todo.text}
							</Text>

							<Icon
								style={{
									position: "absolute",
									right: 5,
									top: 5,
								}}
								onPress={() => deleteTodo(todo.id)}
								name="delete"
								size={30}
								color="#e33057"
							/>
						</View>
					</TouchableOpacity>
				</View>
			))}
		</View>
	);
};

const mapDispatchToProps = (dispatch) => ({
	deleteTodo: (id) => dispatch(deleteTodo(id)),
});

export default connect(null, mapDispatchToProps)(TodoList);
