import { StackNavigationOptions } from "@react-navigation/stack";
import TransactionsList from "../screens/transactions/TransactionsList";
import TransactionDetails from "../screens/transactions/TransactionDetails";

export enum ScreenName {
  TRANSACTIONS_LIST = 'TransactionsList',
  TRANSACTION_DETAILS = 'TransactionDetails',
}

export type TScreenName  = Partial<Record<ScreenName, { screen: React.ComponentType<any>, options?: StackNavigationOptions}>>

export const transactionsScreens = {
[ScreenName.TRANSACTIONS_LIST]: {
    screen: TransactionsList,
    options: {
      headerShown: false,
    }
  },
  [ScreenName.TRANSACTION_DETAILS]: {
    screen: TransactionDetails,
    options: {
      headerShown: false
    }
  },
} satisfies TScreenName;
