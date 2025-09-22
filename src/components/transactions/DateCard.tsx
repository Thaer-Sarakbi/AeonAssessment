import { StyleSheet, View } from 'react-native'
import { SPACING } from '../../assets/theme';
import { shadows } from '../../styles/shadows';

interface Props {
  date: string
}

const DateCard = ({date}: Props) => {

  return (
    <View style={[styles.container, shadows.cards]}>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      padding: SPACING.space_8
    }
});

export default DateCard