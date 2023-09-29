import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationAndRouteProps } from "../../services/utils/navigations";

export function HomeScreen({ navigation }: NavigationAndRouteProps) {
	const handlePress = () => {
		navigation.navigate("GameScreen");
	};
	return (
		<View>
			<Text>HomeScreen</Text>
		</View>
	);
}

const styles = StyleSheet.create({});
