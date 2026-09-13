import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EmptyView from '@/components/screens/EmptyView';
import ChatsScreen from '@/components/screens/ChatsScreens';
import { Ionicons, Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator 
    initialRouteName="Chats"
    >

      <Tab.Screen 
      name="Status" 
      component={EmptyView} 
      options={{ tabBarIcon: ({color, size}) => <Ionicons name="person" size={size} color={color} /> }}
      />

      <Tab.Screen 
      name="Calls" 
      component={EmptyView} 
      options={{ tabBarIcon: ({color, size}) => <Ionicons name="call-outline" size={size} color={color} /> }}
      />

      <Tab.Screen 
      name="Camera" 
      component={EmptyView} 
      options={{ tabBarIcon: ({color, size}) => <Ionicons name="camera" size={size} color={color} /> }}
      />

      <Tab.Screen 
      name="Chats" 
      component={ChatsScreen} 
      options={{ 
        tabBarIcon: ({color, size}) => (<Ionicons name="person" size={size} color={color} />),
        headerRight: () => (
          <Entypo name="new-message" size={18} color={'royalblue'} style={{ marginRight: 10 }} />
        )
        
       }}
      />

      <Tab.Screen 
      name="Settings" 
      component={EmptyView} 
      options={{ 
        tabBarIcon: ({color, size}) => 
          (<Ionicons name="settings-outline" size={size} color={color} /> ),
      }}
      />

    </Tab.Navigator>
  );
};

export default MainTabNavigator;