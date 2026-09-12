import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EmptyView from '@/components/screens/EmptyView';
import ChatsScreen from '@/components/screens/ChatsScreens';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Chats">
      <Tab.Screen 
      name="Status" 
      component={EmptyView} 
      options={{ tabBarIcon: ({color, size}) => <Ionicons name="person" size={size} color={color} /> }}
      />
      <Tab.Screen name="Calls" component={EmptyView} />
      <Tab.Screen name="Camera" component={EmptyView} />
      <Tab.Screen name="Chats" component={ChatsScreen} />
      <Tab.Screen name="Settings" component={EmptyView} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;