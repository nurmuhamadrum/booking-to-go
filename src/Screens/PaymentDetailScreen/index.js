//import liraries
import React, { Component, useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
// Assets
import UserIcons from '../../../assets/user.png';
import ArrowBack from '../../../assets/arrow.png';
// Styles
import { styles } from './style.js'


const PaymentDetailScreen = ({ navigation }) => {
  const [isActive, setIsActive] = useState(false)

  const handleSwitch = (params) => {
    if (params) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <ScrollView>
        {/* header section */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={ArrowBack} style={styles.arrow} />
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text style={styles.titleHeader}>Payment Details</Text>
          </View>
        </View>

        {/* detail step section */}
        <View style={styles.stepContainer}>
          <View style={styles.numberStepCircle}>
            <Text style={styles.titleNumberStep}>1</Text>
          </View>
          <Text style={styles.titleStep}>Detail Pesanan</Text>
        </View>

        {/* content section */}
        <View style={styles.contentContainer}>
          <Text style={styles.titleDetail}>Detail Pesanan</Text>

          {/* card content section */}
          <View style={styles.cardContainer}>
            <Image source={{ uri: 'https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768' }} style={styles.imageCard} />
            <View style={styles.titleCardContainer}>
              <Text style={styles.titleCard}>Novotel Tangerang</Text>
              <Text style={styles.subtitleCard}>Executive Suit Room with Breakfast 1 Kamar + Quadrule + 2 Tamu + 10 Malam</Text>
            </View>
          </View>

          {/* check-in check-out date section */}
          <View style={styles.titleCheckContainer}>
            <Text style={styles.titleDetail}>Check-In</Text>
            <Text style={styles.subtitleCard}>30 November 2020</Text>
          </View>
          <View style={styles.titleCheckContainer}>
            <Text style={styles.titleDetail}>Check-Out</Text>
            <Text style={styles.subtitleCard}>14 Desember 2020</Text>
          </View>
          <View style={styles.titleRefundContainer}>
            <Text style={styles.titleRefund}>Rp - Dapat direfund jika dibatalkan</Text>
          </View>
          <View style={styles.divider} />

          {/* detail order content section */}
          <Text style={styles.titleDetail}>Detail Pemesan</Text>
          <View style={styles.cardContainerOrder}>
            <Text style={styles.titleDetail}>Tn. Nur Muhamad Rum</Text>
            <View style={styles.emailContainer}>
              <Text style={styles.subtitleCard}>nurmuhamadrum@gmail.com</Text>
              <TouchableOpacity>
                <Text style={styles.titleEdit}>Edit</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.subtitleCard}>+628 7710 366 009</Text>
          </View>

          {/* radio button order section */}
          <View style={styles.radioButtonContainer}>
            <View style={styles.radioButtonItem}>
              <TouchableOpacity style={styles.radioButton} onPress={() => handleSwitch(true)}>
                <View style={[isActive ? styles.circleRadioActive : styles.circleRadioInActive]} />
              </TouchableOpacity>
              <Text>Saya memesan untuk sendiri</Text>
            </View>
            <View style={styles.radioButtonItem}>
              <TouchableOpacity style={styles.radioButton} onPress={() => handleSwitch(false)}>
                <View style={[isActive ? styles.circleRadioInActive : styles.circleRadioActive]} />
              </TouchableOpacity>
              <Text>Saya memesan untuk orang lain</Text>
            </View>
          </View>

          {/* guest data order section */}
          <Text style={styles.titleDetail}>Data Tamu</Text>
          <View style={styles.cardContainerUser}>
            <Image source={UserIcons} style={styles.iconUser} />
            <Text>Tn. John Doe</Text>
          </View>
          <View style={styles.cardContainerUser}>
            <Image source={UserIcons} style={styles.iconUser} />
            <Text>Tn. Doel</Text>
          </View>
          <View style={styles.cardContainerUser}>
            <Image source={UserIcons} style={styles.iconUser} />
            <Text>Tn. Johny Doe Doe</Text>
          </View>
          <View style={styles.editGuestDataContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('AddDataScreen')}>
              <Text style={styles.titleEdit}>Ubah Data Tamu</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentDetailScreen;
