import React from 'react'
import { StyleSheet, Text, TouchableOpacityProps } from 'react-native';
import { COLORS, FONTSIZE } from '../../assets/theme';

interface NumberProps extends TouchableOpacityProps {
    text: number
    color?: string
    fontSize?: number;
    align?: 'left' | 'right' | 'center';
    numberOfLines?: number;
    textLeft?: string | React.ReactNode
    textRight?: string | React.ReactNode
}

const Number = ({ text, color = COLORS.black, fontSize = FONTSIZE.size_14, align = 'left', numberOfLines, textLeft, textRight }: NumberProps) => {
    const displayText = text !== undefined && text !== null ? String(text) : '';

    let children = <Text style={[styles.text, { color, fontSize, textAlign: align}]} numberOfLines={numberOfLines}>{textLeft}{displayText}{textRight}</Text>;
    return children;
}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        flexShrink:1,
        flexWrap: 'wrap',
    },
});

export default Number