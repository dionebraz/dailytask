import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import styles from "./styles";
import { useState } from "react";
import COLORS from "@/app/theme";

interface TaskProps {
  title: string;
  taskId: string;
  createdAt: string;
  onEdit: (task: { id: string; title: string, createdAt: string; }) => void;
  isEditing: boolean; // Se essa tarefa está sendo editada
  onSave: (id: string, newTitle: string) => void; // Função para salvar a tarefa editada
  onDelete: (id: string) => void; // Função para excluir a tarefa
}

export default function Task({ title, taskId, createdAt, onEdit, isEditing, onSave, onDelete }: TaskProps) {
  const [editedTitle, setEditedTitle] = useState(title);
  const [showEditModal, setShowEditModal] = useState(false); // Modal para edição
  const [showViewModal, setShowViewModal] = useState(false); // Modal para exibir texto completo
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleView = () => {
    setShowViewModal(true); // Abre o modal de visualização
  };

  const handleSave = () => {
    if (editedTitle.trim() !== "") {
      onSave(taskId, editedTitle); // Chama a função para salvar a tarefa
      setShowEditModal(false); // Fecha o modal após salvar
    }
  };

  const handleCancel = () => {
    setEditedTitle(title); // Restaura o título original se cancelar
    setShowEditModal(false); // Fecha o modal
  };

  const handleEditModal = () => {
    setShowBottomSheet(false)
    setShowEditModal(true)
  }

  return (
    <View style={styles.task_container}>
      <View style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      >
        <TouchableOpacity
          onPress={handleView} // Mostra o modal ao clicar no item
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            width: 230,
          }}
        >
          <BouncyCheckbox
            style={{ width: 26 }}
            size={24}
            fillColor={COLORS.secondary}
            innerIconStyle={{ borderWidth: 2 }}
            isChecked={isChecked}
            onPress={() => setIsChecked(!isChecked)}
          />
          <Text
            style={[
              styles.task_text,
              isChecked && { textDecorationLine: "line-through", opacity: 0.25 },
            ]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {title}
          </Text>
        </TouchableOpacity>

        <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
          <TouchableOpacity
            style={{ flexDirection: "row", gap: 4, alignItems: "center" }}
            onPress={() => setShowBottomSheet(true)} // Abre o modal ao clicar em "Editar"
          >
            <MaterialCommunityIcons name="menu-open" size={24} color={COLORS.secondary} />
            {/* <MaterialCommunityIcons name="comment-edit-outline" size={24} color={COLORS.secondary} /> */}
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => onDelete(taskId)}>
            <MaterialCommunityIcons name="delete-outline" size={24} color={COLORS.red} />
          </TouchableOpacity> */}
        </View>

        {/* Modal para edição */}
        <Modal
          transparent={true}
          visible={showEditModal}
          animationType="fade"
          onRequestClose={handleCancel} // Fechar modal se pressionar o "back" no Android
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Editar Tarefa</Text>
              <TextInput
                style={styles.modalInput}
                value={editedTitle}
                onChangeText={setEditedTitle} // Atualiza o título enquanto edita
              />
              <View style={styles.modalButtons}>
                <TouchableOpacity onPress={handleSave} style={styles.modalButtonSave}>
                  <Text style={styles.modalButtonText}>Salvar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleCancel} style={styles.modalButton}>
                  <Text style={styles.modalButtonText}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        {/* Modal para exibir o texto completo */}
        <Modal
          transparent={true}
          visible={showViewModal}
          animationType="fade"
          onRequestClose={handleView} // Fechar modal no botão "voltar"
        >
          <View style={styles.modalOverlay}>
            <View style={styles.viewModalContent}>
              <Text style={styles.fullTaskText}>{title}</Text>
              <TouchableOpacity onPress={() => setShowViewModal(false)} style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Bottom Sheet Modal */}
        <Modal
          transparent={true}
          visible={showBottomSheet}
          animationType="fade"
          onRequestClose={() => setShowBottomSheet(false)}
        >
          <View style={styles.bottomSheetOverlay}>
            <View style={styles.bottomSheetContent}>
              <Text style={{
                fontWeight: "700",
                fontSize: 24,
                textAlign: "center",
                color: COLORS.secondary
              }}
              >
                Selecione uma das opções
              </Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setShowBottomSheet(false)} // Fecha o modal
              >
                <MaterialCommunityIcons name="close" size={24} color={COLORS.white} />
              </TouchableOpacity>
              <View style={styles.modalBottomSheetButtons}>
                <TouchableOpacity style={styles.modalButtonEdit} onPress={handleEditModal}>
                  <Text style={styles.modalButtonText}>Editar</Text>
                  <MaterialCommunityIcons name="comment-edit-outline" size={24} color={COLORS.white} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onDelete(taskId)} style={styles.modalButtonDelete}>
                  <Text style={styles.modalButtonText}>Excluir</Text>
                  <MaterialCommunityIcons name="delete-outline" size={24} color={COLORS.white} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View >
      <View style={styles.task_createdAt}>
        <MaterialCommunityIcons name="calendar" size={16} color={COLORS.secondary} />
        <Text style={styles.task_createdAt_text}>
          {new Date(createdAt).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "2-digit",
          })}
        </Text>
        <MaterialCommunityIcons name="clock-outline" size={16} color={COLORS.secondary} />
        <Text style={styles.task_createdAt_text}>
          {new Date(createdAt).toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Text>
      </View>
    </View >
  );
}