import * as SplashScreen from 'expo-splash-screen';
import { StatusBar, StyleSheet, View } from 'react-native';

import ChatListItem from '@/components/ChatListItem';
import ChatsScreen from '@/components/screens/ChatsScreens';


SplashScreen.preventAutoHideAsync();



export default function TabLayout() {
  return(
    <View style={styles.container}>
      <ChatsScreen />

      <StatusBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});