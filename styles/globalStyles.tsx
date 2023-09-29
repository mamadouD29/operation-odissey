import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
	container: {
		flex: 1,
	},
	pad: {
		padding: 10,
	},
	hCtr: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 5,
	},
	vCtr: {
		justifyContent: "center",
		alignItems: "center",
		gap: 5,
	},
	result: {
		fontSize: 36,
	},
	inp: {
		fontSize: 20,
	},
	menuTxt: {
		fontSize: 24,
		fontWeight: "bold",
	},
	addBg: {
		backgroundColor: "#34d399",
	},
	subBg: {
		backgroundColor: "#f43f5e",
	},
	mulBg: {
		backgroundColor: "#0ea5e9",
	},
	divBg: {
		backgroundColor: "#fafaf9",
	},
});
