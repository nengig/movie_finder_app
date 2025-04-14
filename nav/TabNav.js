import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DiscoverMovieScreen from '../screens/DiscoverMovieScreen';
import MyMoviesScreen from '../screens/MyMoviesScreen';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import globalStyles from '../shared/GlobalStyles';


const Tab = createBottomTabNavigator();

export default function TabNav() {

  const tabOptions = ({ route }) => ({
    headerShown: false,
    tabBarActiveTintColor: 'indigo',
    tabBarInactiveTintColor: 'gray',
    tabBarStyle: [
      {
        display: 'flex',
        height: 72,
        padding: 0,
        margin: 0
      }
    ],
    tabBarIcon: (({ focused }) => {
      let iconName;

      if (route.name === "Discover") {
        iconName = focused ? 'compass' : "compass-outline";
      }
      else if (route.name === "MyMovies") {
        iconName = focused ? 'heart-circle' : "heart-outline";
      }

      return (
        <Icon name={iconName} color={focused ? "indigo" : "gray"} size={30} />
      )
    }),
  });

  return (
    <Tab.Navigator screenOptions={tabOptions}>
      <Tab.Screen component={DiscoverMovieScreen} name="Discover" title="Discover" />
      <Tab.Screen component={MyMoviesScreen} name="MyMovies" title="My Movies" />
    </Tab.Navigator>
  );
}
