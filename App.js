import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TabNav from './nav/TabNav';
import { store } from './redux/store';
import { SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CommonActions, NavigationContainer } from '@react-navigation/native';
import { SignIn } from './screens/signIn';
import { SignUp } from './screens/signUp';
import { Provider } from 'react-redux';
import globalStyles from './shared/GlobalStyles';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={globalStyles.safeArea}>
          <NavigationContainer style={globalStyles.safeArea}>
            <Stack.Navigator initialRouteName="SignIn">
              <Stack.Group>
                <Stack.Screen component={TabNav} name="TabNav" />
                <Stack.Screen component={SignIn} name="SignIn" />
                <Stack.Screen component={SignUp} name="SignUp" />
              </Stack.Group>
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
