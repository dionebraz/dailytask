import { StyleSheet } from "react-native";
import COLORS from "./theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
    paddingTop: 32,
    paddingBottom: 128,
  },

  title: {
    fontSize: 24,
    marginBottom: 16,
    color: COLORS.white
  },

  task_container: {
    flex: 1,
    width: "90%",
    borderRadius: 8,
    padding: 16,
    backgroundColor: COLORS.primary,
  },

  hero_image: {
    width: 170,
    height: 152.02,
  },

  empty_tasks: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  empty_tasks_text: {
    marginTop: 8,
    fontSize: 16,
    textAlign: "center",
    color: COLORS.secondary,
  }
})

export default styles
