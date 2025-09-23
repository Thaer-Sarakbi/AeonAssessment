import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import Title from './Title'
import { useNavigation } from '@react-navigation/native';
import { SPACING } from '../../assets/theme';

const Header = () => {
  const navigation = useNavigation();

  const navigationBack = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigationBack}>
       <Image source={require('../../assets/icons/arrow.png')} style={styles.icon} />
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
      alignItems: 'center',
      paddingHorizontal: SPACING.space_12
    },
    icon: { width: 16, height: 16 }
});

export default Header