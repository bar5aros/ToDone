import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  Modal,
  Pressable,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Icon } from 'react-native-elements';
import Colors from '../../assets/colors/Colors';
import fontConfig from '../../assets/fonts/FontConfig';

const AddItem = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.addItemButton}>
      <Icon
        name="add-outline"
        type="ionicon"
        color={Colors.yellow_light}
        size={30}
        onPress={() => setModalVisible(!modalVisible)}
      />
      {/* Add Item Modal */}
      <Modal
        animationType="fade"
        presentationStyle="fullScreen"
        // statusBarTranslucent="false"
        supportedOrientations={['portrait']}
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>title</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>description</Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.closeButton}>
              <Icon
                name="close-outline"
                type="ionicon"
                color={Colors.yellow_light}
                size={30}
                onPress={() => setModalVisible(!modalVisible)}
              />
            </View>
          </View>
        </View>
      </Modal>
      {/* End of modal */}
    </View>
  );
};

const styles = StyleSheet.create({
  addItemButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: hp('8%'),
    height: hp('8%'),
    backgroundColor: 'black',
  },
  // Modal styles
  modalContainer: {
    flex: 1,
  },
  titleContainer: {
    height: hp('50%'),
    width: wp('100%'),
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: 'orange',
  },
  title: {
    fontSize: fontConfig.size650,
    fontFamily: fontConfig.nunitoSansRegular,
  },
  descriptionContainer: {
    height: hp('40%'),
    width: wp('100%'),
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    fontSize: fontConfig.size450,
    fontFamily: fontConfig.nunitoSansRegular,
  },
  footer: {
    height: hp('10%'),
    width: wp('100%'),
    backgroundColor: 'pink',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: wp('2%'),
  },
  closeButton: {
    height: hp('8%'),
    width: hp('8%'),
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },

});

export default AddItem;
