import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ActivityIndicator,
} from 'react-native';

import {setupPlayer, addTrack} from '../SurahsRecitationServices';
import SurahPlayer from './screens/SurahPlayer';

function App(): React.JSX.Element {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  async function setup() {
    let isSetup = await setupPlayer();
    if (isSetup) {
      await addTrack();
    }

    setIsPlayerReady(isSetup);
  }

  useEffect(() => {
    setup();
  }, []);

  if (!isPlayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <SurahPlayer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
