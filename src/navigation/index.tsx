import { NavigationContainer } from '@react-navigation/native';
import  { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatsScreen from '@/components/screens/ChatsScreens';
import ChatScreen from '@/components/screens/ChatScreen';

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
       <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Chats" component={ChatsScreen} />
          <Stack.Screen name="Chat" component={ChatScreen} />
        </Stack.Navigator>
       </NavigationContainer>
    )
}

export default Navigator;