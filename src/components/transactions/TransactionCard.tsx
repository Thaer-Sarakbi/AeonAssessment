import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS, SPACING } from '../../assets/theme';
import { shadows } from '../../styles/shadows';
import { Transaction } from '../../stores/types';
import Title from '../atoms/Title';
import Caption from '../atoms/Caption';
import Spacer from '../atoms/Spacer';
import DateCard from './DateCard';
import Number from '../atoms/Number';
import { useNavigation } from '@react-navigation/native';
import { ScreenName } from '../../routes/ScreenName';

interface Props {
  item: Transaction
}

const TransactionCard = ({item}: Props) => {
  const navigation = useNavigation();
  const { refId, transferDate, recipientName, transferName, amount } = item;

  return (
    <TouchableOpacity style={[styles.container, shadows.cards]} onPress={() => navigation.navigate(ScreenName.TRANSACTION_DETAILS, { refId })}>
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
      <View style={styles.right}>
        <Icon name="arrow-right" color={'black'}/>
        <Spacer height={20} />
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
      backgroundColor: COLORS.white,
      borderRadius: 8
    },
    left: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
    right: { alignItems: 'flex-end' }
});

export default TransactionCard