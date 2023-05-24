// Importieren der erforderlichen Module aus React Native
import { TouchableOpacity, Text } from "react-native";

// Importieren der Styles aus einer externen Datei namens "MainStyles"
import { Styles } from './MainStyles';

// Definition der Typen für die Props, die die Button-Komponente erwartet
interface ButtonProps {
  onPress: () => void;  // Funktion, die aufgerufen wird, wenn der Button gedrückt wird
  title: string;       // Titeltext des Buttons
  isBlue?: boolean;    // Optionaler Parameter, der angibt, ob der Button blau sein soll
  isGray?: boolean;    // Optionaler Parameter, der angibt, ob der Button grau sein soll
}

// Die Button-Komponente wird als Standardexport definiert
export default function Button({ title, onPress, isBlue, isGray }: ButtonProps) {
  // Rückgabewert der Button-Komponente
  return (
    <TouchableOpacity
      // Der style-Prop des TouchableOpacity-Elements wird basierend auf den übergebenen isBlue und isGray-Parametern festgelegt
      style={isBlue ? Styles.btnBlue : isGray ? Styles.btnDark : Styles.btnLight}
      onPress={onPress} // Die onPress-Funktion wird dem TouchableOpacity als Event-Handler zugewiesen
    >
      <Text
        // Der style-Prop des Text-Elements wird basierend auf den übergebenen isBlue und isGray-Parametern festgelegt
        style={isBlue || isGray ? Styles.smallTextLight : Styles.smallTextDark}
      >
        {title}  

      </Text>
    </TouchableOpacity>
  );
}
