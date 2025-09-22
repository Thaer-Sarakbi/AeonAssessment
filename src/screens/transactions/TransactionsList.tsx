import { FlatList, StyleSheet, Image } from 'react-native'
import Container from '../../components/Container'
import TransactionCard from '../../components/transactions/TransactionCard'
import { useState } from 'react'
import useTransferStore from '../../stores/useTransferStore'
import LottieView from 'lottie-react-native'
import Spacer from '../../components/atoms/Spacer'
import { SPACING } from '../../assets/theme'

const TransactionsList = () => {
  const [isRefreshing, setIsRefreshing] = useState(false)
  const transfers = useTransferStore((state) => state.data);

  const onRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 3000);
  };

  return (
    <Container>
      <Image source={require('../../assets/images/visa.png')} resizeMode='cover' style={{ height: '100%', width: '100%', borderRadius: 8 }} height={250}  />
      <Spacer height={SPACING.space_12} />
      <FlatList 
        onRefresh={onRefresh} 
        refreshing={isRefreshing}
        data={transfers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TransactionCard item={item} />}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
    container: {
      width: '100%', 
      height: '100%' 
    }
});

export default TransactionsList