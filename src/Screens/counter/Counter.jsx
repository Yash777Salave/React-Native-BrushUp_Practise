import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { counterEvent } from 'react-native/Libraries/Performance/Systrace';

const Counter = () => {
  const [count, setCount] = useState(0);
  const incrementFun = () => {
    setCount(count + 1);
  };
  const decrementFun = () => {
    if (count > 0) setCount(count - 1);
  };
  return (
    <View style={styles.mainCOntainer}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Counter :-</Text>
        <Text style={styles.count}> {count}</Text>
      </View>
      <TouchableOpacity
        style={styles.incrementButoonContainer}
        onPress={incrementFun}
      >
        <Text style={styles.incrementText}>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.decrementButoonContainer}
        onPress={decrementFun}
      >
        <Text style={styles.decrementText}>Decrement</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  mainCOntainer: {
    flex: 1,
  },
  heading: {
    fontSize: 45,
    textAlign: 'center',
  },
  incrementButoonContainer: {
    padding: 10,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: 'green',
    margin: 10,
  },
  decrementButoonContainer: {
    padding: 10,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: 'red',
    margin: 10,
  },
  incrementText: {
    fontSize: 15,
    color: '#ffff',
    fontWeight: 'bold',
  },
  decrementText: {
    fontSize: 15,
    color: '#ffff',
    fontWeight: 'bold',
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  count: {
    fontSize: 45,
    textAlign: 'center',
    alignItems: 'center',
    color: 'blue',
  },
});
