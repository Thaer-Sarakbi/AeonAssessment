import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { RootNavigation } from './RootNavigation';

type Props = {
  colorScheme: 'dark' | 'light' | null | undefined;
}

export function Navigation({ colorScheme }: Props) {
  return (
    <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
     <RootNavigation />
    </NavigationContainer>
  );
}