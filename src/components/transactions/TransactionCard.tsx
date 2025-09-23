import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'
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
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/types';

interface Props {
  item: Transaction
}

type NavigationProps = StackNavigationProp<RootStackParamList>;

const TransactionCard = ({item}: Props) => {
  const navigation = useNavigation<NavigationProps>();
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
        <Image source={require('../../assets/icons/right-chevron.png')} style={styles.icon} />
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
    right: { alignItems: 'flex-end' },
    icon: { width: 10, height: 10 }
});

export default TransactionCard