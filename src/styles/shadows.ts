import { Platform } from "react-native";
import { COLORS } from "../assets/theme";

export const shadows = {
    cards: Platform.select({
    ios: {
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.08,
        shadowRadius: 5, 
      },
      android: {
        elevation: 4,
      },
  }),
};