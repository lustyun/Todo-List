import React, { Component } from "react";
import { View, StyleSheet, Button, TextInput } from "react-native";
import { connect } from "react-redux";
import { addTodo } from "../Redux/actions";

class AddTodo extends Component {
	state = {
		text: "",
	};

	addTodo = (text) => {
		if (!text.trim().length == 0) {
			this.props.dispatch(addTodo(text));
			this.setState({ text: "" });
		}
	};

	render() {
		return (
			<View style={styles.container}>
				<TextInput
					style={styles.input}
					asdplaceholder="New todo..."
					onChangeText={(text) => this.setState({ text })}
					value={this.state.text}
				/>
				<Button
					onPress={() => this.addTodo(this.state.text)}
					style={styles.button}
					title="Add"
				/>
			</View>
		);
	}
}

export default connect()(AddTodo);

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "center",
	},
	input: {
		backgroundColor: "#eaeaea",
		height: 40,
		borderWidth: 1,
		padding: 10,
		width: 200,
	},
	button: {
		margin: 10,
	},
});
