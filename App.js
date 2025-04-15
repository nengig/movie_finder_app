import { store } from './redux/store';
import TabNav from './nav/TabNav';
import { Login } from './screens/Login.js';
import { PasswordUpdate } from './screens/PasswordUpdate.js';
import { CreateAccount } from './screens/CreateAccount.js';
import MovieDetails from './screens/mediaDetails.js';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackActions, NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';


const Stack = createNativeStackNavigator();

export default function App() {


  const headerOptions = () => ({
    headerStyle: {
      height: 80,
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
    },
    headerTitleStyle: {
      fontSize: 18,
      color: '#f0f0f0',
    },
    headerTintColor: '#f0f0f0',
    headerBackTitleStyle: {
      color: '#00ccf7',
      fontSize: 18,
    }, // Optional: color of the back button & icons
  })

  return (
    <Provider store={store}>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Group screenOptions={headerOptions}>
            <Stack.Screen component={TabNav} name="TabNav" options={{ headerShown: false }} />
            <Stack.Screen component={Login} name="Login" />
            <Stack.Screen component={CreateAccount} name="SignUp" />
            <Stack.Screen component={MovieDetails} name="Media Details" />
            <Stack.Screen component={PasswordUpdate} name="UpdatePassword" />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
