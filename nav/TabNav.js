import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DiscoverMovieScreen from '../screens/DiscoverMovieScreen';
import MyMoviesScreen from '../screens/MyMoviesScreen';
import SearchMoviesScreen from '../screens/SearchMoviesScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { UserProfile } from '../screens/UserProfile.js';


const Tab = createBottomTabNavigator();

export default function TabNav() {

  const tabOptions = ({ route }) => ({
    // headerTransparent: true,
    headerStyle: {
      height: 80,
      backgroundColor: 'rgba(0, 0, 0, 0.9)', 

    },
    headerTitleStyle: {
      fontSize: 20,
      color:  '#f0f0f0',
    },


    // headerShown: false,
    tabBarActiveTintColor: '#00ccf7',
    tabBarInactiveTintColor: '#f0f0f0',
    tabBarStyle: [
      {

        display: 'flex',
        height: 75,
        padding: 0,
        margin: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.85)', 
        borderTopWidth: 0,
        elevation: 0,
      }
    ],
    tabBarIcon: (({ focused }) => {
      let iconName;

      if (route.name === "Discover") {
        iconName = focused ? 'compass' : "compass-outline";
      }
      else if (route.name === "My Movies") {
        iconName = focused ? 'heart-circle' : "heart-outline";
      } else if (route.name === 'Search') {
        iconName = focused ? 'search' : 'search-outline';
      } else if (route.name === 'UserProfile') {
        iconName = focused ? 'person-circle' : 'person-circle-outline';
      }
      

      // <Icon name="person-circle-outline" color="black" size={30} />

      return (
        <Icon name={iconName} color={focused ? "#00ccf7" : "#f0f0f0"} size={30} />
      )
    })
  });

  return (
    <Tab.Navigator screenOptions={tabOptions}>
      <Tab.Screen component={DiscoverMovieScreen} name="Discover" title="Discover" />
      <Tab.Screen component={SearchMoviesScreen} name="Search" />
      <Tab.Screen component={MyMoviesScreen} name="My Movies" title="My Movies" />
      <Tab.Screen component={UserProfile} name="UserProfile"/>
    </Tab.Navigator>
  );
}
