import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import Caption from '../../components/atoms/Caption'
import Divider from '../../components/atoms/Divider'
import Title from '../../components/atoms/Title'
import Container from '../../components/Container'
import TransactionInfo from '../../components/transactions/TransactionInfo'
import { COLORS, SPACING } from '../../assets/theme'
import { useRoute } from '@react-navigation/native'
import useTransferStore from '../../stores/useTransferStore'
import Spacer from '../../components/atoms/Spacer'
import { useEffect, useState } from 'react'
import { shadows } from '../../styles/shadows'
import PlaceHolder from '../../components/atoms/PlaceHolder'
import { generatePDF } from 'react-native-html-to-pdf';
import Share from 'react-native-share';
import RNFS from 'react-native-fs';

const TransactionDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500); 
  }, []);

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

  const sharePdf = async (filePath: string, fileName: string) => {
    const path = `${RNFS.CachesDirectoryPath}/${fileName}`;
    await RNFS.copyFile(filePath, path);

    try {
      const shareOptions = {
        title: 'Share PDF',
        url: `file://${path}`, 
        type: 'application/pdf',
        filename: fileName,
      };

      console.log(shareOptions)
      await Share.open(shareOptions);
    } catch (error) {
      console.error('Error sharing PDF:', error);
    }
  };

      const html = `
      <h1>Transfer Details</h1>
      <p>Ref ID: ${transaction?.refId}</p>
      <p>Date: ${transaction?.transferDate}</p>
      <p>Recipient: ${transaction?.recipientName}</p>
      <p>Transfer Name: ${transaction?.transferName}</p>
      <p>Amount: ${transaction?.amount}</p>
    `;

  const createPdf = async () => {
    let options = {
      html,
      fileName: 'Transaction',
      directory: 'Documents',
    };

    let results = await generatePDF(options);
    console.log(results.filePath);

    sharePdf(results.filePath, 'test.pdf');
  };


  return (
    <>
    <Container allowBack={true}>
      {
        !isLoading ? (
         <>
           <Spacer height={SPACING.space_20} />
           <Caption text='Total Amount' align='center' fontSize={16} />
           <Spacer height={SPACING.space_20} />
           <Title text={transaction?.amount.toString()} align='center' fontSize={20} />
           <Spacer height={SPACING.space_20} />
           <View style={[styles.status, {backgroundColor: transaction?.transferName === 'Refund' ? COLORS.negativeSecondary : COLORS.positiveSecondary}]}>
             <Caption text={transaction?.transferName} color={transaction?.transferName === 'Refund' ? COLORS.negative : COLORS.positive} />
          </View>
          <Spacer height={SPACING.space_10} />
          <Title text='Transfer Details' />
          <Spacer height={SPACING.space_20} />
          <TransactionInfo property='Transfer Id' value={transaction?.refId} />
          <Divider />
          <TransactionInfo property='Transfer Date' value={formatted} />
          <Divider />
          <TransactionInfo property='Recipient Name' value={transaction?.recipientName} />
          <Divider />
          <TransactionInfo property='Amount' value={transaction?.amount.toString()} />
        </>
        ) : (
          <PlaceHolder />
        )
      }
    </Container>
    <View style={styles.footer}>
      <TouchableOpacity style={[styles.button, shadows.cards]} onPress={createPdf}>
        <Image source={require('../../assets/icons/share.png')} style={styles.icon} />
        <Spacer width={SPACING.space_8} />
        <Caption text='Share' align='center' fontSize={20} color={COLORS.black}/>
      </TouchableOpacity>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  footer: {  width: '100%', height: 100, position: 'absolute', bottom: 0, paddingHorizontal: SPACING.space_12 },
  button: { backgroundColor: COLORS.white, padding: SPACING.space_12, borderRadius: 8, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  status: { alignSelf: 'center', paddingVertical: SPACING.space_4, paddingHorizontal: SPACING.space_8, borderRadius: 40 },
  icon: { width: 20, height: 20 }
});

export default TransactionDetails