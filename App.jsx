/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import LoginPage from "./components/LoginPage";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet,Alert, Button } from "react-native";
import DashboardScreen from "./components/DashboardScreen";
import InformationScreen from "./components/InformationScreen";
import AnnouncementScreen from "./components/AnnouncementScreen";
import Icon from 'react-native-vector-icons/Ionicons';


// Create a stack navigator
const Stack = createStackNavigator();

// Create a bottom tab navigator for the tab screens
const Tab = createBottomTabNavigator();

const handleLogout = (navigation) => {
    Alert.alert('Logout', 'You have been logged out successfully.');
    navigation.navigate('LoginPage');
};

function DashboardStack({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = 'home';
          } else if (route.name === 'Information') {
            iconName = 'information-circle';
          } else if (route.name === 'Announcement') {
            iconName = 'megaphone';
          } else if (route.name === 'Logout') {
            iconName = 'log-out';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Dashboard" component={DashboardScreen} options={{headerShown : false}}/>
      <Tab.Screen name="Information" component={InformationScreen} options={{headerShown : false}}/>
      <Tab.Screen name="Announcement" component={AnnouncementScreen} options={{headerShown : false}}/>
      <Tab.Screen name="Logout" options={{tabBarLabel: 'Logout'}} >
        {() => (
          <Button title="Logout" onPress={handleLogout(navigation)} />
        )}
        </Tab.Screen>
    </Tab.Navigator>
  );
}
// for commit purpose

function App(){
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="LoginPage" component={LoginPage} options={{headerShown : false}}/>
        <Stack.Screen name="DashboardStack" component={DashboardStack} options={{headerShown : false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  }
})


export default App;
