import { StyleSheet, View } from 'react-native'
import { COLORS, FONTSIZE, SPACING } from '../../assets/theme';
import { shadows } from '../../styles/shadows';
import Number from '../atoms/Number';
import Caption from '../atoms/Caption';
import Title from '../atoms/Title';

interface Props {
  property: string,
  value: string | undefined
}

const TransactionInfo = ({property, value}: Props) => {

  return (
    <View style={styles.container}>
      <Caption text={property}/>
      <Title text={value} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
});

export default TransactionInfo