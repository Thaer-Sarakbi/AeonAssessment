import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { COLORS, SPACING } from '../../assets/theme';
import { shadows } from '../../styles/shadows';
import { Transaction } from '../../stores/types';
import Title from '../atoms/Title';
import Caption from '../atoms/Caption';

interface Props {
  item: Transaction
}

const TransactionCard = ({item}: Props) => {
  const { id, refId, transferDate, recipientName, transferName, amount } = item;

  return (
    <TouchableOpacity style={[styles.container, shadows.cards]}>
      <View>
        <Title text={item.transferName} />
        <Caption text={item.recipientName} />
      </View>
      <View>
        {/* <Icon name="chevron-right" color={'black'}/> */}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
      padding: SPACING.space_8,
      marginBottom: 8,
      marginHorizontal: 8,
      backgroundColor: COLORS.white
    }
});

export default TransactionCard