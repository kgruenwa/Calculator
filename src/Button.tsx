// Import der benötigten Komponenten und Styles
import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { Styles } from './MainStyles';

// Definition des Interface für die Button-Props
interface ButtonProps {
    onPress: () => void; // Funktion, die aufgerufen wird, wenn der Button gedrückt wird
    title: string; // Titeltext des Buttons
    isBlue?: boolean; // Optionaler Parameter, der angibt, ob der Button blau sein soll
    isGray?: boolean; // Optionaler Parameter, der angibt, ob der Button grau sein soll
}

// Button-Komponente
export default function Button({ title, onPress, isBlue, isGray }: ButtonProps) {
    return (
        <TouchableOpacity
            style={
                // Dynamische Auswahl des Button-Stils basierend auf den übergebenen Parametern
                isBlue ? Styles.btnBlue : isGray ? Styles.btnDark : Styles.btnLight
            }
            onPress={onPress}
        >
            <Text
                style={
                    // Dynamische Auswahl des Text-Stils basierend auf den übergebenen Parametern
                    isBlue || isGray
                        ? Styles.smallTextLight
                        : Styles.smallTextDark
                }
            >
                {title} // Anzeige des Button-Titels
            </Text>
        </TouchableOpacity>
    );
}
