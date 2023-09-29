import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { NavigationAndRouteProps } from "../../../services/utils/navigations";
import { globalStyles } from "../../../styles/globalStyles";
import {
	ControlPad,
	OutputDisplay,
} from "../../../components/ui/gameScreen/index";

export function GameScreen({ route }: NavigationAndRouteProps) {
	const { id, title, bg } = route.params;
	// let title = "Multiplication";
	const [result, setResult] = useState<number>(20);
	const [inp, setInp] = useState<number>(1);
	const digitHandler = (digit: number) => {
		// will modify the input
		if (title === "Addition") {
			setInp((prev) => prev + digit);
			return;
		}
		if (title === "Substraction") {
			setInp((prev) => prev - digit);
			return;
		}
		if (title === "Multiplication") {
			setInp((prev) => prev * digit);
			return;
		}
		setInp((prev) => prev / digit);
	};
	return (
		<View style={[globalStyles.container, globalStyles.pad]}>
			<Text style={[globalStyles.menuTxt, { textAlign: "center" }]}>
				{title}
			</Text>
			<OutputDisplay result={result} inp={inp} resultBg={bg} />
			<ControlPad digitHandler={digitHandler} />
		</View>
	);
}

const styles = StyleSheet.create({});
