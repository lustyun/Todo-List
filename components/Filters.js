import { useDispatch, connect } from "react-redux";
import { setFilter } from "../Redux/actions";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useState } from "react";

const Filters = () => {
	const dispatch = useDispatch();
	const [btnSelected, setbtnSelected] = useState(1);

	return (
		<View
			style={{ padding: 10, flexDirection: "row", justifyContent: "center" }}
		>
			<View style={styles.buttons}>
				<Pressable
					style={btnSelected == 1 ? styles.btnSelected : styles.notSelected}
					key={"1"}
					onPress={() => {
						setbtnSelected(1);
						dispatch(setFilter("SHOW_ALL_TODOS"));
					}}
				>
					<Text>All</Text>
				</Pressable>
			</View>
			<View style={styles.buttons}>
				<Pressable
					style={btnSelected == 2 ? styles.btnSelected : styles.notSelected}
					key={"2"}
					onPress={() => {
						setbtnSelected(2);
						dispatch(setFilter("SHOW_COMPLETED_TODO"));
					}}
				>
					<Text>Completed</Text>
				</Pressable>
			</View>
			<View style={styles.buttons}>
				<Pressable
					style={btnSelected == 3 ? styles.btnSelected : styles.notSelected}
					key={"3"}
					onPress={() => {
						setbtnSelected(3);
						dispatch(setFilter("SHOW_INCOMPLETED_TODO"));
					}}
				>
					<Text>Incompleted</Text>
				</Pressable>
			</View>
		</View>
	);
};

export default connect()(Filters);

const styles = StyleSheet.create({
	buttons: {
		padding: 3,
		justifyContent: "center",
	},
	btnSelected: {
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,

		backgroundColor: "#7FFFD4",
	},
	notSelected: {
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,

		backgroundColor: "#DCDCDC",
	},
});
