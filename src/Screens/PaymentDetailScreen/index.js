//import liraries
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator
} from 'react-native';
// Assets
import UserIcons from '../../../assets/user.png';
import ArrowBack from '../../../assets/arrow.png';
// Styles
import { styles } from './style.js'
// Services
import { getDataDetail } from '../../Services'


const PaymentDetailScreen = ({ navigation }) => {
  const [isActive, setIsActive] = useState(false);
  const [dataDetail, setDataDetail] = useState(false);

  const handleSwitch = (params) => {
    if (params) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  useEffect(() => {
    getData();
  });

  getData = async () => {
    const data = await getDataDetail();
    const dataParse = JSON.parse(data);
    const dataDetail = dataParse?.data?.get_chosen_hotel;

    setDataDetail(dataDetail);
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
            {dataDetail && <Image source={{ uri: dataDetail?.chosen_hotel_detail?.images?.[0]?.thumbnail }} style={styles.imageCard} />}
            {dataDetail ? (
              <View style={styles.titleCardContainer}>
                <Text style={styles.titleCard}>{dataDetail?.chosen_hotel_detail?.hotel_name}</Text>
                <Text style={styles.subtitleCard}>
                  {
                    dataDetail?.chosen_hotel_room?.room_name + ' - ' +
                    dataDetail?.chosen_hotel_room?.meal + ' - ' +
                    dataDetail?.chosen_hotel_params?.total_room + ' Kamar ' +
                    dataDetail?.chosen_hotel_params?.guest_adult + ' Tamu ' +
                    dataDetail?.chosen_hotel_params?.total_room + ' Malam. '
                  }
                </Text>
              </View>
            ) : (
              <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: 70 }}>
                <ActivityIndicator size="small" color="#0000ff" />
              </View>
            )}
          </View>

          {/* check-in check-out date section */}
          <View style={styles.titleCheckContainer}>
            <Text style={styles.titleDetail}>Check-In</Text>
            {dataDetail
              ? <Text style={styles.subtitleCard}>{dataDetail?.chosen_hotel_params?.check_in}</Text>
              : <ActivityIndicator size="small" color="#0000ff" />
            }
          </View>
          <View style={styles.titleCheckContainer}>
            <Text style={styles.titleDetail}>Check-Out</Text>
            {dataDetail
              ? <Text style={styles.subtitleCard}>{dataDetail?.chosen_hotel_params?.check_out}</Text>
              : <ActivityIndicator size="small" color="#0000ff" />
            }
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
            <Text style={styles.subtitleCard}>+62-877-1036-6009</Text>
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
