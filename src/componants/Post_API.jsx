import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const Post_API = () => {
  const [formData, setFormData] = useState({ id: '', name: '', email: '' });
  const handleFormData = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };
  const handleSubmit = async () => {
    try {
      const newData = await axios.post(
        'http://192.168.43.252:3000/Users',
        formData,
      );
    } catch (error) {
      console.log('error ---> ', error);
    }
    setFormData({ id: '', email: '', name: '' });
  };
  return (
    <View style={styles.mainConatiner}>
      <Text style={styles.heading}>Post_API</Text>
      <View style={{ marginTop: 30 }}>
        <TextInput
          placeholder="Enter Id"
          style={styles.textInputs}
          onChangeText={value => {
            handleFormData('id', value);
          }}
          value={formData.id}
        />
        <TextInput
          placeholder="Enter Name"
          style={styles.textInputs}
          onChangeText={value => {
            handleFormData('name', value);
          }}
          value={formData.name}
        />
        <TextInput
          placeholder="Enter email"
          style={styles.textInputs}
          onChangeText={value => {
            handleFormData('email', value);
          }}
          value={formData.email}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Post_API;

const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
    margin: 10,
  },
  heading: {
    fontSize: 30,
    textAlign: 'center',
  },
  textInputs: {
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    paddingHorizontal: 10,
  },
  button: {
    borderRadius: 10,
    margin: 10,
    padding: 9,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffff',
  },
});
