import { StyleSheet, View } from 'react-native'
import { COLORS, FONTSIZE, SPACING } from '../../assets/theme';
import { shadows } from '../../styles/shadows';
import Number from '../atoms/Number';
import Caption from '../atoms/Caption';

interface Props {
  date: string
}

const DateCard = ({date}: Props) => {

  const dateStr = date;
  const currentDate = new Date(dateStr);
  const day = currentDate.getDate(); 
  const month = currentDate.toLocaleString('en-US', { month: 'short' })

  return (
    <View style={[styles.container, shadows.cards]}>
      <Number text={day} />
      <Caption text={month} fontSize={FONTSIZE.size_12} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      padding: SPACING.space_8,
      backgroundColor: COLORS.white,
      alignItems: 'center',
      justifyContent: 'center',
      margin: SPACING.space_4
    }
});

export default DateCard