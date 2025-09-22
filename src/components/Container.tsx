import React from 'react'
import { ColorValue, StatusBar, StatusBarStyle, StyleSheet, View, Dimensions, Platform, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Edges, SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';
import { SPACING } from '../assets/theme';
import Header from './atoms/Header';
// import Header from './atom/headers/Header';
// import { SPACING } from '../assets/theme';

const { height } = Dimensions.get("window");
const statusBarHeight = (StatusBar.currentHeight ?? 0)
/**
 * Container prop
 *
 * @interface ContainerProps
 * @typedef {ContainerProps}
 * @extends {SafeAreaViewProps}
 */
interface ContainerProps extends SafeAreaViewProps {
    barStyle?: StatusBarStyle;
    barBackgroundColor?: ColorValue;
    allowBack?: boolean;
    backgroundColor?: ColorValue;
    headerMiddle?: React.ReactNode;
    FooterComponent?: React.FC;
    edges?: Edges;
    hasInput?: boolean;
    usingPaddingBottom?: boolean;
    headerBottomLine?: boolean;
    usingPaddingTop?: boolean;
    barHidden?: boolean;
    noPadding?: boolean
    EnableRight?: React.ReactNode;
}


/**
 * Container 
 *
 * @param {ContainerProps} param0
 * @param {*} param0.children
 * @param {*} param0.style
 * @param {StatusBarStyle} [param0.barStyle="default"]
 * @param {ColorValue} [param0.barBackgroundColor="transparent"]
 * @returns {*}
 */

const Container = ({ children, style, barStyle = "dark-content", barBackgroundColor = "transparent", allowBack = false, hasInput = false, backgroundColor = '#FFFFFF', edges, usingPaddingBottom = true, usingPaddingTop = true, headerBottomLine = false, barHidden = false, noPadding = false, FooterComponent, EnableRight}: ContainerProps) => {
    return (
        <SafeAreaView style={[style, styles.container, { backgroundColor }]} edges={edges}>
            <StatusBar translucent backgroundColor={barBackgroundColor} barStyle={barStyle} hidden={barHidden} />
            {allowBack && <Header/>}


<View style={[styles.wrapper,  (!usingPaddingBottom || FooterComponent) && {paddingBottom:0}, !usingPaddingTop && {paddingTop: 0}, { padding: noPadding ? 0 : 16 }]}>
                    {children}
                </View>
            {/* {FooterComponent && <View><FooterComponent /></View>} */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        minHeight: height,
        flexGrow: 1,
    },
    wrapper: {
        padding: SPACING.space_12,
        flex: 1,
    },
    scrollView: {
        flexGrow: 1,
    }
});

export default Container