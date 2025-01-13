import COLORS from "@/app/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  input_box: {
    width: "100%",
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    bottom: 0,
    padding: 10,
    gap: 16,
    backgroundColor: COLORS.primary
  },

  input: {
    flex: 1,
    maxHeight: 54,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    padding: 16,
    paddingRight: 8,
    color: COLORS.white,
    backgroundColor: COLORS.inputBG
  },

  input_button: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: COLORS.green
  },

  button_text: {
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.white,
  },

  counterContainer: {
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    paddingRight: 16,
    backgroundColor: COLORS.inputBG,
  },

  counterText: {
    color: COLORS.secondary,
    fontSize: 10,
  },
})

export default styles