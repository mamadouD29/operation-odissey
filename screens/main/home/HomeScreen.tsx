import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationAndRouteProps } from "../../../services/utils/navigations";
import { menuOptions } from "../../../services/utils/menuOptions";
import { globalStyles } from "../../../styles/globalStyles";
import { EmIcons } from "../../../components/shared";

export function HomeScreen({ navigation }: NavigationAndRouteProps) {
	const handlePress = (id: number, title: string, bg: string) => {
		navigation.navigate("GameScreen", { id, title, bg });
	};
	return (
		<View
			style={[globalStyles.container, styles.container, globalStyles.pad]}
		>
			<Text>Welcome</Text>
			<View style={[globalStyles.hCtr, styles.menuCtr]}>
				{menuOptions &&
					menuOptions.map(
						(option: { id: number; title: string; bg: string }) => {
							return (
								<Pressable
									key={option.id}
									onPress={() =>
										handlePress(
											option.id,
											option.title,
											option.bg,
										)
									}
									style={({ pressed }) => [
										globalStyles.vCtr,
										styles.btnCtr,
										{
											opacity: pressed ? 0.3 : 1,
											backgroundColor: option.bg,
										},
									]}
								>
									<Text
										style={[globalStyles.menuTxt]}
										numberOfLines={1}
										ellipsizeMode="tail"
									>
										{option.title}
									</Text>
									<EmIcons title={option.title} size={36} />
								</Pressable>
							);
						},
					)}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		gap: 20,
		alignItems: "center",
	},
	menuCtr: {
		flexWrap: "wrap",
		justifyContent: "space-between",

		// borderWidth: 1,
	},
	btnCtr: {
		borderWidth: 1,
		width: 150,
		height: 200,
		flexGrow: 1,
		flexShrink: 1,
		borderRadius: 20,
	},
});
