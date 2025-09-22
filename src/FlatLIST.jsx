import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatLIST = () => {
    const Data = [
        {
            id : 1,
            Name : "Yash Baba"
        },
        {
            id : 2,
            Name : "Kedar patil"
        },{
            id : 3,
            Name : "Rajesh Patil"
        },{
            id : 4,
            Name : "Komal pawar"
        },
        {
            id : 5,
            Name : "Suman Patil"
        },{
            id : 6,
            Name : "Vinayak patil"
        },{
            id : 7,
            Name : "Ram Patil"
        },
    ]
    const renderItem = ({item})=>{
        return(
            <View>
                <Text>{item.Name}</Text>
            </View>
        )
    }
  return (
    <View>
        <FlatList
        data={Data}
        renderItem={renderItem}
        contentContainerStyle={styles.constainer}
        />
    </View>
  )
}

export default FlatLIST

const styles = StyleSheet.create({
    constainer : {
        backgroundColor:"red",
        padding:10,
        margin:10
    }
})