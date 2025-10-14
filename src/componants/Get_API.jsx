import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Get_API = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log('inside useeffect');
    axios
      .get('http://192.168.43.252:3000/Users')
      .then(response => {
        console.log('response is - ', response.data);
        setUsers(response.data);
      })
      .catch(error => {
        console.log('Error details ---> ', JSON.stringify(error, null, 2));
      });
  }, []);
  return (
    <View>
      <Text style={styles.heading}>GET_API</Text>
      <Text>
        {users.map(item => (
          <View key={item.id}>
            <Text style={styles.name}>{item.name}</Text>
          </View>
        ))}
      </Text>
    </View>
  );
};

export default Get_API;

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  name: {
    fontSize: 17,
    justifyContent: 'center',
  },
});
