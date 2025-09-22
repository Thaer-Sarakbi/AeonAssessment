import { StyleSheet, TouchableOpacity, View } from 'react-native'
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

const TransactionDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); 
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

  // async function generatePDF(transfer) {
  //   const html = `
  //     <h1>Transfer Details</h1>
  //     <p>Ref ID: ${transfer.refId}</p>
  //     <p>Date: ${transfer.transferDate}</p>
  //     <p>Recipient: ${transfer.recipientName}</p>
  //     <p>Transfer Name: ${transfer.transferName}</p>
  //     <p>Amount: ${transfer.amount}</p>
  //   `;
  
  //   const file = await RNHTMLtoPDF.convert({
  //     html,
  //     fileName: `transfer_${transfer.refId}`,
  //     base64: false, // set true if you need base64
  //   });
  
  //   return file.filePath; // Local path to the generated PDF
  // }

  // async function shareTransferPDF(filePath) {
  //   await Share.open({
  //     title: 'Share Transfer Details',
  //     url: `file://${filePath}`,   // 👈 must use file:// scheme
  //     type: 'application/pdf',
  //     failOnCancel: false,
  //   });
  // }

  // async function handleShare(transfer) {
  //   const pdfPath = await generatePDF(transfer);
  //   await shareTransferPDF(pdfPath);
  // }

  // const generatePDF = async () => {
  //   try {
  //     // Capture the view as image
  //     const uri = await viewShotRef.current.capture();
      
  //     // Create PDF document
  //     const pdfDoc = PDFDocument.create();
      
  //     // Add page with the captured image
  //     const page = PDFPage.create()
  //       .setMediaBox(200, 300)
  //       .drawImage(uri, {
  //         x: 5,
  //         y: 5,
  //         width: 190,
  //         height: 290,
  //       });
      
  //     pdfDoc.addPage(page);
      
  //     const pdfPath = await pdfDoc.write(`${PDFDocument.DocumentsDirectory}/transfer_${data.refId}.pdf`);
      
  //     // Share the PDF
  //     await Share.open({
  //       title: 'Share Transfer Receipt',
  //       url: `file://${pdfPath}`,
  //       type: 'application/pdf',
  //     });
      
  //   } catch (error) {
  //     Alert.alert('Error', error.message);
  //   }
  // };

  const createPdf = async () => {
    let options = {
      html: '<h1>PDF TEST</h1>',
      fileName: 'test',
      directory: 'Documents',
    };

    let results = await generatePDF(options);
    console.log(results);
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
           <View style={{ backgroundColor: transaction?.transferName === 'Refund' ? COLORS.negativeSecondary : COLORS.positiveSecondary, alignSelf: 'center', paddingVertical: SPACING.space_4, paddingHorizontal: SPACING.space_8, borderRadius: 40 }}>
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
        <Caption text='Share' align='center' fontSize={20}/>
      </TouchableOpacity>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  footer: {  width: '100%', height: 100, position: 'absolute', bottom: 0, paddingHorizontal: SPACING.space_12 },
  button: { backgroundColor: COLORS.white, padding: SPACING.space_8, borderRadius: 8 }
});

export default TransactionDetails