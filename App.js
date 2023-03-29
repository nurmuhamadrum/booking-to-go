import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from "react-redux";
// Screens
import PaymentDetailScreen from './src/Screens/PaymentDetailScreen';
import AddDataScreen from './src/Screens/AddDataGuestScreen';
// Store
import store from "./src/Store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="PaymentDetailScreen" component={PaymentDetailScreen} />
          <Stack.Screen name="AddDataScreen" component={AddDataScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}