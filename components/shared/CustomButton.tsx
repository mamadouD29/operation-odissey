import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../styles/globalStyles";

interface CustomButtonProps {
	action: string;
    onPress: ()=>void;
	bg?: string;
	brd?: number;
}

export default function CustomButton({ action, bg, brd, onPress }: CustomButtonProps) {
	return (
		<View
			style={[globalStyles.hCtr, styles.btnCtr, { backgroundColor: bg, borderWidth: brd }]}
		>
			<Pressable
            onPress={onPress}
				style={({ pressed }) => [
					globalStyles.hCtr,
					styles.btn,
					{ opacity: pressed ? 0.3 : 1 },
				]}
			>
				<Text style={[globalStyles.inp]}>{action}</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	btnCtr: {
		borderWidth: 1,
        marginVertical: 10,
        borderRadius: 10,
	},
	btn: {
		width: 100,
		padding: 10,
		flexShrink: 1,
		flexGrow: 1,
	},
});
