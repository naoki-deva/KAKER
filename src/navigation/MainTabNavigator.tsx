import ChatsScreen from '@/components/screens/ChatsScreens';
import EmptyView from '@/components/screens/EmptyView';
import { Entypo } from '@expo/vector-icons';
import type { NativeBottomTabIcon } from '@react-navigation/bottom-tabs/unstable';
import {
  createNativeBottomTabNavigator,
} from '@react-navigation/bottom-tabs/unstable';
import { Platform } from 'react-native';
import type { SFSymbols7_0 } from 'sf-symbols-typescript';

const Tab = createNativeBottomTabNavigator();

const getTabIcon = (
  iosName: SFSymbols7_0,
  androidName: string,
) => (): NativeBottomTabIcon => Platform.OS === 'ios'
  ? {
    type: 'sfSymbol',
    name: iosName,
  }
  : {
    type: 'materialSymbol',
    name: androidName,
  } as unknown as NativeBottomTabIcon;

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Chats"
    >
      <Tab.Screen
        name="Status"
        component={EmptyView}
        options={{
          title: 'Status',
          tabBarIcon: getTabIcon(
            'person',
            'person'
          ),
        }}
      />

      <Tab.Screen
        name="Calls"
        component={EmptyView}
        options={{
          title: 'Calls',
          tabBarIcon: getTabIcon(
            'phone',
            'call',
          )
        }}
      />

      <Tab.Screen
        name="Camera"
        component={EmptyView}
        options={{
          title: 'Camera',
          tabBarIcon: getTabIcon(
            'camera',
            'photo_camera',
          )
        }}
      />

      <Tab.Screen
        name="Chats"
        component={ChatsScreen}
        options={({ navigation }) => ({
          title: 'Chats',
          tabBarIcon: getTabIcon(
            'message',
            'chat',
          ),
          headerRight: () => (
            <Entypo
              onPress={() => navigation.navigate('Contacts')}
              name="new-message"
              size={18}
              color="royalblue"
              style={{ marginRight: 10 }}
            />
          ),
        })}
      />

      <Tab.Screen
        name="Settings"
        component={EmptyView}
        options={{
          title: 'Settings',
          tabBarIcon: {
            type: 'sfSymbol',
            name: 'gearshape',
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;