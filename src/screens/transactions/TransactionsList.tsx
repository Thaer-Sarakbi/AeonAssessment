import { FlatList, StyleSheet, Image } from 'react-native'
import Container from '../../components/Container'
import TransactionCard from '../../components/transactions/TransactionCard'
import { useState } from 'react'
import useTransferStore from '../../stores/useTransferStore'
import Spacer from '../../components/atoms/Spacer'
import { FONTSIZE, SPACING } from '../../assets/theme'
import Title from '../../components/atoms/Title'

const TransactionsList = () => {
  const [isRefreshing, setIsRefreshing] = useState(false)
  const transfers = useTransferStore((state) => state.data);
  const sortedData = [...transfers].sort(
    (a, b) => new Date(b.transferDate).getTime() - new Date(a.transferDate).getTime()
  )

  const onRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 3000);
  };

  return (
    <Container>
      <Image source={require('../../assets/images/visa.png')} resizeMode='cover' style={styles.image} height={250} />
      <Spacer height={SPACING.space_8} />
      <Title text='Transactions History' fontSize={FONTSIZE.size_16} />
      <Spacer height={SPACING.space_8} />
      <FlatList 
        onRefresh={onRefresh} 
        refreshing={isRefreshing}
        data={sortedData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TransactionCard item={item} />}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
  image: { height: '100%', width: '100%', borderRadius: 8 }
});

export default TransactionsList