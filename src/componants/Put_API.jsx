import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const Put_API = () => {
  const [formData, setFormData] = useState({ id: '', name: '', email: '' });

  const handleFormData = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };
  const handleSubmitForm = async () => {
    console.log('New data ==', formData.name, formData.email);
    try {
      const response = await axios.put(
        `http://192.168.43.252:3000/Users/${formData.id}`,
        {
          name: formData.name,
          email: formData.email,
        },
      );
      setFormData({ id: '', name: '', email: '' });
      Alert.alert('Updated Data Successfully !!');
    } catch (error) {
      Alert.alert('Fail to Update Data !!');
    }
  };
  return (
    <View>
      <Text style={styles.heading}>Put_API</Text>
      <TextInput
        placeholder="Enter ID"
        style={styles.inputBar}
        onChangeText={value => {
          handleFormData('id', value);
        }}
        value={formData.id}
      />
      <TextInput
        placeholder="Enter Name"
        style={styles.inputBar}
        onChangeText={value => {
          handleFormData('name', value);
        }}
        value={formData.name}
      />
      <TextInput
        placeholder="Enter Email"
        style={styles.inputBar}
        onChangeText={value => {
          handleFormData('email', value);
        }}
        value={formData.email}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmitForm}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Put_API;

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 30,
  },
  inputBar: {
    borderWidth: 1,
    borderRadius: 20,
    margin: 8,
    marginHorizontal: 15,
    paddingHorizontal: 12,
  },
  button: {
    margin: 8,
    marginHorizontal: 15,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    padding: 6,
    color: '#ffff',
  },
});
