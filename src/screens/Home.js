import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from  "../components/header"
import Main from '../components/main';
import GameWin from '../components/game-win';
export default function Home() {
  return (
    <View>
        <Header/>
        <Main/>
        <GameWin/>
      </View>

  );
}

