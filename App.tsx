import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlatLIST from './src/FlatLIST'
import Login from './src/Login'
import Counter from './src/Screens/counter/Counter'

const App = () => {
  return (
    <View style={{flex:1}}>
      {/* <FlatLIST/> */}
      {/* <Login/> */}
      <Counter/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})