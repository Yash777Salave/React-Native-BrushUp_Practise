import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = () => {
    console.log('Email is = ', email);
    console.log('Password is = ', password);

    setEmail('');
    setPassword('');
  };

  return (
    <View>
      <View>
        <Text style={styles.loginText}>Login</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Email"
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Enter Password"
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainContainer: {},
  input: {
    borderWidth: 1,
    backgroundColor: '#ffff',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 50,
    borderColor: '#ccc',
    fontSize: 15,
    color: '#333',
    margin: 10,
  },
  inputContainer: {
    padding: 10,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: '#f0f0f0',
  },
  loginText: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
    marginTop: 20,
  },
  buttonContainer: {
    borderWidth: 1,
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
