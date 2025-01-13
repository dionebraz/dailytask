import { Text } from "react-native";
import styles from "./styles";

export default function Header() {
  return (
    <Text style={styles.baseText}>
      <Text>Daily <Text style={styles.span}>Tasks</Text></Text>
    </Text>
  )
}