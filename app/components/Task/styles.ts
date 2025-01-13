import COLORS from "@/app/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  task_container: {
    flex: 1,
    padding: 12,
    marginBottom: 4,
    borderRadius: 8,
    flexDirection: "column",
    justifyContent: "space-between",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: COLORS.background,
    backgroundColor: COLORS.inputBG,
  },

  task_text: {
    width: "100%",
    color: COLORS.white,
  },

  task_line: {
    color: COLORS.secondary,
  },

  task_createdAt: {
    flexDirection: "row",
    marginTop: 4,
    bottom: -4,
    gap: 4,
  },

  task_createdAt_text: {
    fontSize: 10,
    color: COLORS.secondary,
  },

  bottomSheetOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fundo semi-transparente
    justifyContent: "flex-end", // Move o conteúdo para a parte inferior
  },

  bottomSheetContent: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 20,
    paddingTop: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Sombra para Android
  },

  // Estilos para o modal
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: COLORS.white,
    padding: 20,
    width: "80%",
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalInput: {
    maxHeight: 54,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalBottomSheetButtons: {
    paddingTop: 32,
    flexDirection: "row",
    gap: 32,
  },
  modalButton: {
    padding: 10,
    width: "45%",
    borderRadius: 5,
    alignSelf: "center",
    backgroundColor: COLORS.blue,
  },
  modalButtonSave: {
    padding: 10,
    width: "45%",
    borderRadius: 5,
    backgroundColor: COLORS.green,
  },
  modalButtonText: {
    color: COLORS.white,
    textAlign: "center",
    fontWeight: '700',
  },
  modalButtonEdit: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: COLORS.blue,
  },
  modalButtonDelete: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: COLORS.red,
  },
  closeButton: {
    position: "absolute",
    top: 8,
    right: 8,
    zIndex: 1,
    backgroundColor: COLORS.secondary,
    padding: 4,
    borderRadius: 50,
  },

  viewModalContent: {
    backgroundColor: COLORS.white,
    padding: 3,
    paddingBottom: 16,
    width: "80%",
    borderRadius: 10,
  },
  fullTaskText: {
    fontSize: 14,
    marginBottom: 16,
    textAlign: "center",
    borderRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    padding: 16,
    color: COLORS.secondary,
    backgroundColor: COLORS.background,
  },
})

export default styles