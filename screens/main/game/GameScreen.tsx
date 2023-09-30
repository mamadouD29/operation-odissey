import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationAndRouteProps } from "../../../services/utils/navigations";
import { globalStyles } from "../../../styles/globalStyles";
import {
	ControlPad,
	MsgModal,
	OutputDisplay,
} from "../../../components/ui/gameScreen/index";
import {
	getRandomIntInclusive,
	getResult,
	initialValue,
} from "../../../services/utils/index";

export function GameScreen({ route }: NavigationAndRouteProps) {
	const { id, title, bg } = route.params;
	// let title = "Multiplication";
	const mySet1 = new Set();
	const mySet2 = new Set();
	let myStock: number[] = [];
	const [reset, setReset] = useState<boolean>(false);
	const [result, setResult] = useState<number | null>(null);
	const [inp, setInp] = useState<number>(() => {
		if (title === "Multiplication") {
			return 1;
		}
		return 0;
	});
	const [numPad, setNumPad] = useState<number[]>([]);
	const [msg, setMsg] = useState<string>("");

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
			console.log("add digit : ", digit);
			setInp((prev) => prev * digit);
			return;
		}
		setInp((prev) => prev / digit);
	};

	const rstHanler = () => {
		setReset(true);
		setTimeout(() => {
			setReset(false);
		}, 2000);
	};
	useEffect(() => {
		if (inp === result) {
			rstHanler();
			setInp(() => initialValue(title));
			setMsg("🐱 You won");
		}
		// lets show u the idea
		if (result && inp > result) {
			rstHanler();
			const initial = initialValue(title);
			setInp(initial);
			setMsg("🥺 Sorry you lost");
		}
	}, [inp]);

	const generateRandomValues = () => {
		while (myStock.length < 4) {
			const randVal = getRandomIntInclusive(1, 10);
			if (mySet1.has(randVal)) {
				console.log("mySet1 has the randVl");
			} else {
				mySet1.add(randVal);
				myStock.push(randVal);
				console.log("add to stock", myStock);
			}
		}
		setNumPad(myStock);
		mySet1.clear();
	};

	function getResultValue() {
		let rslt: number = 0;
		console.log("mySet1: ", mySet1.size);
		while (mySet1.size < 3) {
			const randVal = getRandomIntInclusive(0, 3);
			if (mySet1.has(randVal)) {
			} else {
				const newVal = myStock[randVal];
				rslt = getResult(title, rslt, newVal, mySet1.size);
				mySet1.add(randVal);
				console.log("result ", rslt);
			}
			console.log(mySet1.size);
		}

		setResult(rslt);
	}
	useEffect(() => {
		generateRandomValues();
		getResultValue();
	}, [reset]);

	return (
		<View style={[globalStyles.container, globalStyles.pad]}>
			<Text style={[globalStyles.menuTxt, { textAlign: "center" }]}>
				{title}
			</Text>

			<OutputDisplay result={result} inp={inp} resultBg={bg} />
			<ControlPad digitHandler={digitHandler} numPad={numPad} />
			{reset && <MsgModal isVisible={reset} msg={msg} />}
		</View>
	);
}

const styles = StyleSheet.create({});
