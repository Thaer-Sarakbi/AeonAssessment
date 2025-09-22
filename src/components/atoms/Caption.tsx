import React from 'react'
import { StyleSheet, Text, TouchableOpacityProps } from 'react-native';
import { COLORS, FONTSIZE } from '../../assets/theme';

interface CaptionProps extends TouchableOpacityProps {
    text: string
    color?: string
    fontSize?: number;
    align?: 'left' | 'right' | 'center';
    numberOfLines?: number;
    textLeft?: string | React.ReactNode
    textRight?: string | React.ReactNode
}

const Caption = ({ text, color = COLORS.caption, fontSize = 12, align = 'left', numberOfLines, textLeft, textRight }: CaptionProps) => {
    const displayText = text !== undefined && text !== null ? String(text) : '';

    let children = <Text style={[styles.text, { color, fontSize, textAlign: align}]} numberOfLines={numberOfLines}>{textLeft}{displayText}{textRight}</Text>;
    return children;
}

const styles = StyleSheet.create({
    text: {
        fontSize: FONTSIZE.size_10,
        fontWeight: '500',
        flexShrink:1,
        flexWrap: 'wrap',
    },
});

export default Caption