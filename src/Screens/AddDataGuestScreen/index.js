//import liraries
import React, { Component, useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';
// Assets
import ArrowBack from '../../../assets/arrow.png';
import TrashIcon from '../../../assets/trash-can.png';
// Styles
import { styles } from './style.js';


const AddDataScreen = ({ navigation }) => {
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
          <View style={styles.contentEditContainer}>
            <View style={styles.genderContainer}>
              <Text style={styles.titleGender}>Mr</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Nama Tamu"
            />
            <TouchableOpacity>
              <Image source={TrashIcon} style={styles.iconTrash} />
            </TouchableOpacity>
          </View>

          {/* button add data guest section */}
          <TouchableOpacity style={styles.addDataContainer}>
            <Text style={styles.titleAddData}>+ Tambah Data Tamu</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
      {/* button save section */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonSave}>
          <Text style={styles.titleButton}>Simpan</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddDataScreen;
