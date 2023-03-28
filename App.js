import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Screens
import PaymentDetailScreen from './src/Screens/PaymentDetailScreen';
import AddDataScreen from './src/Screens/AddDataGuestScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="PaymentDetailScreen" component={PaymentDetailScreen} />
        <Stack.Screen name="AddDataScreen" component={AddDataScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}