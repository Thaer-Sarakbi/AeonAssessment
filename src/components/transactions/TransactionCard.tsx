import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { COLORS, SPACING } from '../../assets/theme';
import { shadows } from '../../styles/shadows';
import { Transaction } from '../../stores/types';
import Title from '../atoms/Title';
import Caption from '../atoms/Caption';
import Spacer from '../atoms/Spacer';
import DateCard from './DateCard';
import Number from '../atoms/Number';

interface Props {
  item: Transaction
}

const TransactionCard = ({item}: Props) => {
  const { refId, transferDate, recipientName, transferName, amount } = item;

  return (
    <TouchableOpacity style={[styles.container, shadows.cards]}>
      <View style={styles.left}>
        <DateCard date={transferDate} />
        <Spacer width={SPACING.space_8} />
        <View>
          <Title text={transferName} />
          <Spacer height={SPACING.space_4} />
          <View style={{ flexDirection: 'row' }}>
            <Caption text='ref Id: ' color={COLORS.black} />
            <Caption text={refId} />
          </View>
          <Spacer height={SPACING.space_4} />
          <Caption text={recipientName} />
        </View>
      </View>
      <View>
        {/* <Icon name="chevron-right" color={'black'}/> */}
        <Number text={amount} color={String(amount).includes('-') ? COLORS.negative : COLORS.positive } />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: SPACING.space_8,
      marginBottom: 8,
      marginHorizontal: 8,
      backgroundColor: COLORS.white
    },
    left: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }
});

export default TransactionCard