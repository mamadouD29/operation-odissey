import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationAndRouteProps } from "../../../services/utils/navigations";
import { globalStyles } from "../../../styles/globalStyles";

export function GameScreen({ route }: NavigationAndRouteProps) {
	const { id, title } = route.params;

	return (
		<View style={[globalStyles.container, globalStyles.pad]}>
			<Text>GameScreen</Text>
			<Text>id: {id}</Text>
			<Text>title: {title}</Text>
		</View>
	);
}

const styles = StyleSheet.create({});
