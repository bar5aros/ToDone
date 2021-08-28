import React from 'react';
import {
  StyleSheet,
  useColorScheme,
  View,
  Text,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { colors } from 'react-native-elements';
import AppHeader from './src/components/AppHeader';
import Colors from './assets/colors/Colors';
import TodoItem from './src/components/TodoItem';
import AddItem from './src/components/AddItem';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar hidden={false} />
      <View style={styles.header}>
        {/* <Text>aminakoyayim</Text> */}
        <AppHeader />
      </View>
      <View style={styles.flatlistArea}>
        {/* <Text>gun bitmiyo</Text> */}
        <TodoItem title="Drink at least 3 lt of water" />
      </View>
      <View style={styles.bottom}>
        <AddItem />
      </View>
      {/* <AppHeader />
      <TodoItem title="Drink at least 3 lt of water" />
      <AddItem /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    height: hp('10%'),
    width: wp('100%'),
    backgroundColor: 'red',
  },
  flatlistArea: {
    height: hp('80%'),
    width: wp('100%'),
    alignItems: 'center',
    paddingVertical: hp('1.5%'),
    backgroundColor: Colors.purple_light,
  },
  bottom: {
    height: hp('10%'),
    width: wp('100%'),
    flexDirection: 'row',
    backgroundColor: 'blue',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: wp('2%'),
  },
});

export default App;
