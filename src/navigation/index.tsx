import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import ChatsScreen from '@/components/screens/ChatsScreens';

const Navigator = () => {
    return (
       <NavigationContainer>
        <ChatsScreen />
       </NavigationContainer>
    )
}

export default Navigator;