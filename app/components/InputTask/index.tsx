import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import COLORS from "@/app/theme";

interface InputTaskProps {
  onAddTask: (task: string) => void; // Função que recebe a tarefa
}

export default function InputTask({ onAddTask }: InputTaskProps) {
  const [task, setTask] = useState(""); // Estado para o texto do input
  const maxLength = 96; // Limite de caracteres

  const handleAddTask = () => {
    if (task.trim() === "") {
      Alert.alert("Aviso", "Digite uma tarefa antes de adicionar!");
      return;
    }

    onAddTask(task); // Chama a função passada via props para adicionar a tarefa
    setTask(""); // Limpa o campo de texto
  };

  return (
    <View style={styles.input_box}>
      <View style={{ flex: 1, flexDirection: "row", alignItems: "center", }}>
        <TextInput
          keyboardType="default"
          style={styles.input}
          placeholder="Digite sua tarefa..."
          placeholderTextColor={COLORS.white}
          value={task} // Valor controlado pelo estado
          onChangeText={setTask} // Atualiza o estado ao digitar
          maxLength={maxLength} // Limite de caracteres
        />
        {/* <TouchableOpacity style={styles.input_button} onPress={handleAddTask}>
        <Text style={styles.button_text}>Adicionar</Text>
      </TouchableOpacity> */}
        <View style={styles.counterContainer}>
          <Text style={styles.counterText}>
            {task.length}/{maxLength}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.input_button} onPress={handleAddTask}>
        <Text style={styles.button_text}>Adicionar</Text>
      </TouchableOpacity>
    </View >
  )
}