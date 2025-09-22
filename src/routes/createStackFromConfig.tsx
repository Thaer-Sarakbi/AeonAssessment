import { TScreenName } from './ScreenName'

type TStack = ReturnType<typeof import('@react-navigation/stack').createStackNavigator>
export const createStackFromConfig = (screens: TScreenName, Stack: TStack) => {
  return Object.entries(screens).map(([name, { screen, options }]) => (
   <Stack.Screen key={name} name={name as never} component={screen as never} options={options} />
  ))
}