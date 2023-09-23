import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import { store } from './store';
import { Provider } from 'react-redux';
import BasketScreen from './screens/BasketScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import Delivery from './screens/Delivery';
export default function App() {
    const Stack = createNativeStackNavigator();

  return (
      <NavigationContainer>
        <Provider store={store}>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name='Home' component={HomeScreen} 
              options={{
                headerShown:false
              }}
            />
            <Stack.Screen name='Restaurant' component={RestaurantScreen} 
              options={{
                headerShown:false
              }}
            />
            <Stack.Screen name='Basket' component={BasketScreen} 
              options={{presentation:'modal',headerShown:false}}
            />
            <Stack.Screen name='Preparing' component={PreparingOrderScreen} 
              options={{presentation:'fullScreenModal',headerShown:false}}
            />
            <Stack.Screen name='Delivery' component={Delivery} 
              options={{presentation:'fullScreenModal',headerShown:false}}
            />
        </Stack.Navigator>
        </Provider>
      </NavigationContainer>

  );
}

