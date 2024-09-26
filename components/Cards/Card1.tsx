import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { styles } from './Style';
import {Image} from "expo-image";

const Card = () => {
  return (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
    <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg' }}
        style={styles.image3}
      />
    </View>
    <View>
        <View style={styles.topContainer1}>
            <Text style={styles.title}>Header</Text>
            <Text style={styles.minute}>8m ago</Text>
        </View>
        <Text style={styles.content}>He'll want to use your yatch, and I 
          don't want this thing smelling like fish</Text>
    </View>
    
  </View>
  )
}

export default Card