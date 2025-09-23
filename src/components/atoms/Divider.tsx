import React from "react";
import { View, StyleSheet } from "react-native";
import { COLORS, SPACING } from "../../assets/theme";

const Divider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    borderBottomColor: COLORS.divider,
    borderBottomWidth: 0.5,
    marginVertical: SPACING.space_8,
    width: '100%',
    marginBottom: SPACING.space_8,
    margin: SPACING.space_8,
  },
});

export default Divider;
