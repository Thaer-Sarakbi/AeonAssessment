import { TouchableOpacity, View } from 'react-native'
import Caption from '../../components/atoms/Caption'
import Divider from '../../components/atoms/Divider'
import Title from '../../components/atoms/Title'
import Container from '../../components/Container'
import TransactionInfo from '../../components/transactions/TransactionInfo'
import { COLORS, SPACING } from '../../assets/theme'
import { useRoute } from '@react-navigation/native'
import useTransferStore from '../../stores/useTransferStore'

const TransactionDetails = () => {
  const route = useRoute();
  const { refId } = route.params as { refId: string };

  const transaction = useTransferStore(
    (state) => state.data.find((t) => t.refId === refId)
  );

  const date = new Date(transaction?.transferDate as string);

  const formatted = `${date.getDate()} ${date.toLocaleString('en-US', { month: 'short' })}, ${date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })}`;
  
  return (
    <>
    <Container allowBack={true}>
      <Caption text='Total Amount' align='center' />
      <Title text='123.09' align='center' />
      <View style={{ backgroundColor: COLORS.positiveSecondary, alignSelf: 'center', paddingVertical: SPACING.space_4, paddingHorizontal: SPACING.space_8, borderRadius: 40 }}>
        <Caption text='Payment' color={COLORS.positive} />
      </View>
      <Title text='Transfer Details' />
      <TransactionInfo property='Transfer Id' value={transaction?.refId} />
      <Divider />
      <TransactionInfo property='transfer Date' value={formatted} />
      <Divider />
      <TransactionInfo property='recipient Name' value={transaction?.recipientName} />
      <Divider />
      <TransactionInfo property='amount' value={transaction?.amount.toString()} />
      <Divider />
    </Container>
    <View style={{ backgroundColor: 'red', width: '100%', height: 100, position: 'absolute', bottom: 0 }}>
      <TouchableOpacity style={{ backgroundColor: 'green' }}>
        <Caption text='Share' />
      </TouchableOpacity>
    </View>
    </>
  )
}

export default TransactionDetails