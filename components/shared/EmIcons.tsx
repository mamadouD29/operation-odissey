import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons, Octicons, MaterialCommunityIcons } from "@expo/vector-icons";

interface EmIconsProps {
	title: string;
	color?: string;
	size?: number;
}

export function EmIcons({ title, color, size }: EmIconsProps) {
	return (
		<>
			{title === "Addition" && (
				<Ionicons
					name="add"
					size={size ?? 24}
					color={color ?? "black"}
				/>
			)}
			{title === "Subtraction" && (
				<Octicons
					name="dash"
					size={size ?? 24}
					color={color ?? "black"}
				/>
			)}
			{title === "Multiplication" && (
				<Ionicons
					name="close-sharp"
					size={size ?? 24}
					color={color ?? "black"}
				/>
			)}
			{title === "Division" && (
				<MaterialCommunityIcons
					name="division"
					size={size ?? 24}
					color={color ?? "black"}
				/>
			)}
		</>
	);
}

const styles = StyleSheet.create({});
