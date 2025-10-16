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

const Delete_API = () => {
  const [ID, setID] = useState();

  const handleSubmit = async () => {
    try {
      const response = await axios.delete(
        `http://192.168.43.252:3000/Users/${ID}`,
      );
      setID('');
      Alert.alert('Delete Successfully');
    } catch (error) {}
  };
  return (
    <View>
      <Text style={styles.heading}>Delete API</Text>
      <TextInput
        placeholder="Enter ID"
        onChangeText={text => {
          setID(text);
        }}
        value={ID}
        style={styles.inputBox}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Delete_API;

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    marginBottom: 30,
  },
  inputBox: {
    borderWidth: 1,
    margin: 10,
    marginHorizontal: 15,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  button: {
    margin: 15,
    marginHorizontal: 15,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'red',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#ffff',
  },
});
