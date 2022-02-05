import React, { Component } from "react";
import { View, Image, ScrollView, Text, StyleSheet } from "react-native";
import AddTodo from "./AddTodo";
import VisibileTodos from "./VisibileTodos";
import Filters from "./Filters";

class TodoApp extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<View style={styles.card}>
					<Text style={styles.heading}>Todo List</Text>
					<AddTodo />
					<Filters />
				</View>
				<ScrollView style={{ padding: 10 }}>
					<VisibileTodos />
				</ScrollView>
			</View>
		);
	}
}
export default TodoApp;

const styles = StyleSheet.create({
	heading: {
		fontSize: 40,
		textAlign: "center",
	},
	card: {
		backgroundColor: "white",
		borderRadius: 8,
		paddingVertical: 25,
		paddingHorizontal: 25,
		width: "100%",
		elevation: 10,
	},
});
