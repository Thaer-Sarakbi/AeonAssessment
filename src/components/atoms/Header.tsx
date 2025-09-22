import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Title from './Title'
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  const navigationBack = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigationBack}>
       <Text>+</Text>
      </TouchableOpacity>
      <Title text='Transaction Details' />
      <View />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
});

export default Header