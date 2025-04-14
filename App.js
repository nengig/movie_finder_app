
import globalStyles from './shared/GlobalStyles';
//import ToolBar from './nav/ToolBar.js';
import { store } from './redux/store';
import TabNav from './nav/TabNav';
import { Login } from './screens/Login.js';
import { UserProfile } from './screens/UserProfile.js';
import { PasswordUpdate } from './screens/PasswordUpdate.js';
import { CreateAccount } from './screens/CreateAccount.js';

import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackActions, NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const Stack = createNativeStackNavigator();

const HeaderOptions = () => ({
  headerTitle: '',
  headerTintColor: 'black'
  //headerBackVisible: false
})
const ToolBar = ({navigation}) => ({
  headerRight: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("UserProfile")
      }}
    >
      <Icon name="person-circle-outline" color="black" size={30} />
    </TouchableOpacity>
  )
})
export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={globalStyles.safeArea}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
              <Stack.Group screenOptions={HeaderOptions}>
                <Stack.Screen component={TabNav} name="TabNav" options={ToolBar} />
                <Stack.Screen component={UserProfile} name="UserProfile"/>
                <Stack.Screen component={Login} name="Login" />
                <Stack.Screen component={CreateAccount} name="SignUp" />
                <Stack.Screen component={PasswordUpdate} name="UpdatePassword" />
              </Stack.Group>

            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  )
}
