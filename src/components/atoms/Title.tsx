import React from 'react'
import { StyleSheet, Text, TouchableOpacityProps } from 'react-native';
import { COLORS, FONTSIZE } from '../../assets/theme';

interface TitleProps extends TouchableOpacityProps {
    text: string
    color?: string
    fontSize?: number;
    align?: 'left' | 'right' | 'center';
    numberOfLines?: number;
    textLeft?: string | React.ReactNode
    textRight?: string | React.ReactNode
}

const Title = ({ text, color = COLORS.black, fontSize = 12, align = 'left', numberOfLines, textLeft, textRight }: TitleProps) => {
    const displayText = text !== undefined && text !== null ? String(text) : '';

    let children = <Text style={[styles.text, { color, fontSize, textAlign: align}]} numberOfLines={numberOfLines}>{textLeft}{displayText}{textRight}</Text>;
    return children;
}

const styles = StyleSheet.create({
    text: {
        fontSize: FONTSIZE.size_12,
        fontWeight: 'bold',
        flexShrink:1,
        flexWrap: 'wrap',
    },
});

export default Title