import { FlatList } from 'react-native'
import Container from '../../components/Container'
import TransactionCard from '../../components/transactions/TransactionCard'
import { useState } from 'react'

const data = [
    {
    id: '1',
    refId: "123ABC",
    transferDate: "2024-10-15T12:34:56Z", // Mock transfer date in UTC
    recipientName: "John Doe",
    transferName: "Salary Payment",
    amount: 1500.00
    },
    {
    id: '2',
    refId: "456DEF",
    transferDate: "2024-09-21T09:12:45Z", // Mock transfer date in UTC
    recipientName: "Jane Smith",
    transferName: "Invoice Payment",
    amount: 2300.75
    },
    {
    id: '3',
    refId: "789GHI",
    transferDate: "2024-10-05T16:18:30Z", // Mock transfer date in UTC
    recipientName: "Robert Brown",
    transferName: "Refund",
    amount: -500.00 // Negative amount for a refund
    },
    {
    id: '4',
    refId: "101JKL",
    transferDate: "2024-08-30T11:47:22Z", // Mock transfer date in UTC
    recipientName: "Emily Davis",
    transferName: "Bonus Payment",
    amount: 1200.00
    }
]

const TransactionsList = () => {
  const [isRefreshing, setIsRefreshing] = useState(false)

  const onPullToRefresh = () => {
    setIsRefreshing(true)
    setTimeout(()=>{
      setIsRefreshing(false)
    },2000)
  }

  return (
    <Container>
      <FlatList 
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TransactionCard item={item} />}
      />
    </Container>
  )
}

export default TransactionsList