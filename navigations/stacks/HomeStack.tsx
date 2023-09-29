import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../../screens/main";
import { GameScreen } from "../../screens/main/game";

const Stack = createNativeStackNavigator();

export function HomeStack() {
	return (
		<Stack.Navigator screenOptions={{headerBackTitleVisible: false}}>
			<Stack.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{ title: "Menu" }}
			/>
			<Stack.Screen
				name="GameScreen"
				component={GameScreen}
				options={{ title: "Game" }}
			/>
			{/* update to the name of the opration later */}
		</Stack.Navigator>
	);
}
