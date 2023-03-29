//import liraries
import React, { Component, useState, useCallback } from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { Picker } from '@react-native-picker/picker'
// Assets
import ArrowBack from '../../../assets/arrow.png';
import TrashIcon from '../../../assets/trash-can.png';
// Styles
import { styles } from './style.js';
// Actions
import { addOrder, delOrder } from '../../Actions/orderActions'


const AddDataScreen = ({ navigation }) => {
  const orders = useSelector(state => state.orderReducer.orders);
  const dispatch = useDispatch();
  const [dataOrder, setDataOrder] = useState([...orders]);

  _handleAddData = () => {
    const newArr = [...dataOrder];
    newArr.push({ 'gender': 'Mr', 'name': '' });
    setDataOrder(newArr);
  }

  _handleDeleteOrder = (id) => {
    const newArr = [...dataOrder];
    newArr.splice(id, 1);
    setDataOrder(newArr);
  };

  _handleSaveData = () => {
    dispatch(addOrder(dataOrder));
    navigation.navigate('PaymentDetailScreen');
  }

  _handleOnChangeInput = (id, text) => {
    let newArr = [...dataOrder];
    newArr[id].name = text;
    setDataOrder(newArr);
  }

  _handleChangeGender = (value, id) => {
    let newArr = [...dataOrder];
    newArr[id].gender = value == 'Mr' ? 'Ms' : 'Mr';
    setDataOrder(newArr);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <ScrollView>
        {/* header section */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={ArrowBack} style={styles.arrow} />
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text style={styles.titleHeader}>Tambah Data Tamu</Text>
          </View>
        </View>

        {/* content section */}
        <View style={styles.contentContainer}>
          <Text style={styles.titleDataGuest}>Data Tamu</Text>

          {/* guest name input section */}
          {dataOrder.map((element, key) => {
            return (
              <View key={key} style={styles.contentEditContainer}>
                <View style={styles.genderContainer}>
                  <Picker
                    selectedValue={element.gender}
                    style={styles.picker}
                    onValueChange={() => _handleChangeGender(element.gender, key)}
                  >
                    <Picker.Item label="Mr" value="Mr" />
                    <Picker.Item label="Ms" value="Ms" />
                  </Picker>
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="Input Nama Tamu"
                  value={element.name}
                  onChangeText={(text) => _handleOnChangeInput(key, text)}
                />
                <TouchableOpacity onPress={() => _handleDeleteOrder(key)}>
                  <Image source={TrashIcon} style={styles.iconTrash} />
                </TouchableOpacity>
              </View>
            )
          })}

          {/* button add data guest section */}
          <TouchableOpacity style={styles.addDataContainer} onPress={() => _handleAddData()}>
            <Text style={styles.titleAddData}>+ Tambah Data Tamu</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
      {/* button save section */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonSave} onPress={() => _handleSaveData()}>
          <Text style={styles.titleButton}>Simpan</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddDataScreen;
