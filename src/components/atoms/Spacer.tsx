import React from 'react'
import { View } from 'react-native'

interface SpacerProps {
    height?: number;
    width?: number;
    flexGrow?: number;
    flex?: number
}

const Spacer = ({height, width, flexGrow, flex }: SpacerProps) => {
  return (
    <View style={{height, width, flexGrow, flex }} />
  )
}

export default Spacer