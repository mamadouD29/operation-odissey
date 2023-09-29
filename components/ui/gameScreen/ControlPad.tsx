import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../../styles/globalStyles";

const digs = [1, 9, 6, 3];
interface ControlPadProps {
	digitHandler: (digit: number) => void;
	numPad: number[];
	digits?: number;
}

export function ControlPad({ digits, digitHandler, numPad }: ControlPadProps) {
	return (
		<View style={[globalStyles.container, styles.container]}>
			{numPad &&
				numPad.map((digit: number, id: number) => {
					return (
						<Pressable
							onPress={() => digitHandler(digit)}
							key={id}
							style={({ pressed }) => [
								globalStyles.vCtr,
								styles.btn,
								{ opacity: pressed ? 0.3 : 1 },
							]}
						>
							<Text style={[styles.digitTxt]}>{digit}</Text>
						</Pressable>
					);
				})}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		gap: 80,
		paddingTop: 50,
		flexDirection: "row",
		padding: 10,
		flexWrap: "wrap",
		justifyContent: "space-between",
	},
	btn: {
		width: 150,
		height: 121,
		borderWidth: 1,
		borderRadius: 10,
		elevation: 5,
		shadowOffset: { width: 2, height: 2 },
		shadowColor: "black",
	},
	digitTxt: {
		fontSize: 24,
	},
});
