import React from 'react';
import {
  View, Text, StyleSheet, useColorScheme,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useFonts, Exo2_800ExtraBold } from '@expo-google-fonts/exo-2';
import AppLoading from 'expo-app-loading';
import Colors from '../../assets/colors/Colors';

const Appheader = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [fontsLoaded] = useFonts({
    Exo2_800ExtraBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View
      style={[
        styles.header,
        {
          backgroundColor: isDarkMode ? Colors.purple_main : Colors.purple_dark,
        },
      ]}
    >
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>ToDone</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: hp('10%'),
    width: wp('100%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    height: hp('10%'),
    width: wp('20%'),
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  textContainer: {
    height: hp('10%'),
    width: wp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  headerText: {
    fontSize: hp('5%'),
    fontFamily: 'Exo2_800ExtraBold',
  },
});

export default Appheader;
