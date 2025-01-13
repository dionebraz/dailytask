import COLORS from "@/app/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  baseText: {
    fontSize: 28,
    fontWeight: "900",
    textAlign: "center",
    color: COLORS.white,
    paddingTop: 32,
    backgroundColor: COLORS.background,
  },

  span: {
    color: COLORS.blue
  }
})

export default styles