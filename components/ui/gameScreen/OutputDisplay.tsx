import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../../styles/globalStyles";

interface OutputDisplayProps {
	inp: number;
	resultBg?: string;
	result: number | null;
}

export function OutputDisplay({ result, inp, resultBg }: OutputDisplayProps) {
	return (
		<View style={[globalStyles.vCtr, styles.container]}>
			<View
				style={[
					globalStyles.vCtr,
					styles.rstCtr,
					{ backgroundColor: resultBg },
				]}
			>
				<Text style={[globalStyles.result]}>{result}</Text>
			</View>
			<View style={[globalStyles.vCtr, styles.inpCtr]}>
				<Text style={[globalStyles.inp]}>{inp}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		gap: 10,
		borderWidth: 1,
		borderRadius: 10,
		padding: 10,
	},
	rstCtr: {
		borderWidth: 1,
		width: 144,
		height: 144,
		borderRadius: 121,
	},
	inpCtr: {
		width: 40,
		height: 40,
		borderWidth: 1,
		borderRadius: 10,
	},
});
