import React, { useState } from 'react';
import {
  View, Text, StyleSheet, useColorScheme, Modal,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  useFonts,
  NunitoSans_400Regular,
} from '@expo-google-fonts/nunito-sans';
import AppLoading from 'expo-app-loading';
import { colors } from 'react-native-elements';
import Colors from '../../assets/colors/Colors';

const TodoItem = (props) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [modalVisible, setModalVisible] = useState(false);
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,

  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{props.title}</Text>
      </View>

      <Modal
        animationType="fade"
        presentationStyle="fullScreen"
        statusBarTranslucent="false"
        supportedOrientations={['portrait']}
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalTitleContainer}>
            <Text>{props.title}</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp('95%'),
    height: hp('10%'),
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    width: wp('95%'),
    height: hp('10%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: Colors.yellow_main,
  },
  title: {
    fontSize: hp('3%'),
    fontFamily: 'NunitoSans_400Regular',
  },
});

export default TodoItem;
