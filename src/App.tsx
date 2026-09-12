import * as SplashScreen from 'expo-splash-screen';
import { StatusBar, StyleSheet, View } from 'react-native';
import ChatScreen from '@/components/screens/ChatScreen';
import Navigator from '@/navigation';


SplashScreen.preventAutoHideAsync();



export default function TabLayout() {
  return(
    <View style={styles.container}>
      <Navigator />

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
