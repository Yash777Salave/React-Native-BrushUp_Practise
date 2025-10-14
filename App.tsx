import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlatLIST from './src/FlatLIST'
import Login from './src/Login'
import Counter from './src/Screens/counter/Counter'
import Get_API from './src/componants/Get_API'

const App = () => {
  return (
    <View style={{flex:1}}>
      {/* <FlatLIST/> */}
      {/* <Login/> */}
      {/* <Counter/> */}
      <Get_API/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})