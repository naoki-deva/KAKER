import * as SplashScreen from 'expo-splash-screen';
import { StatusBar, StyleSheet, View } from 'react-native';
import ChatsScreen from '@/components/screens/ChatsScreens';
import ChatScreen from '@/components/screens/ChatScreen';


SplashScreen.preventAutoHideAsync();



export default function TabLayout() {
  return(
    <View style={styles.container}>
      <ChatScreen />

      <StatusBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',


    paddingVertical: 50,
  }
});