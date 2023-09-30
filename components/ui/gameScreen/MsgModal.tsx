import { StyleSheet, Text, View, Pressable, SafeAreaView } from "react-native";
import React from "react";
import { globalStyles } from "../../../styles/globalStyles";

import Modal from "react-native-modal";
interface MsgModalProps {
	isVisible: boolean;
	msg: string;
}

export function MsgModal({ isVisible, msg }: MsgModalProps) {
	return (
		<SafeAreaView style={[globalStyles.hCtr, styles.container]}>
			<Modal isVisible={isVisible}>
				<View
					style={[globalStyles.hCtr,   styles.msgCtr]}
				>
					<Text style={[globalStyles.result]}>{msg}</Text>
				</View>
			</Modal>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 100,
	},
	msgCtr: {
		backgroundColor: "#e7e5e4",
        width: "100%",
        height: 150,
        borderRadius: 20,
        
	},
});
