import React from "react";
import { View, StyleSheet } from "react-native";
import { COLORS, SPACING } from "../../assets/theme";

const Divider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    borderBottomColor: COLORS.divider, // Change color as per your preference
    borderBottomWidth: 0.5, // Change thickness as per your preference
    marginVertical: SPACING.space_8,
    width: '100%',
    marginBottom: SPACING.space_8,
    margin: 8,
  },
});

export default Divider;
