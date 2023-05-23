import { StyleSheet } from "react-native";

// Definition der Styles für die Komponente

export const Styles = StyleSheet.create({
    btnBlue: {
        width: 80,
        height: 80,
        backgroundColor: '#800080',
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
    },
    btnDark: {
        width: 80,
        height: 80,
        backgroundColor: '#888888',
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
    },
    btnLight: {
        width: 80,
        height: 80,
        backgroundColor: '#FFFFFF',
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
    },
    btnGray: {
        width: 80,
        height: 0,
        borderRadius: 1,
        backgroundColor: "#678983",
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
    },
    smallTextLight: {
        fontSize: 40,
        color: '#000000',
    },
    smallTextDark: {
        fontSize: 40,
        color: '#000000',
    },
    // Keyboard
    row: {
        maxWidth: '100%',
        flexDirection: "row",
    },
    viewBottom: {
        position: 'absolute',
        bottom: 70,
    },
    screenFirstNumber: {
        fontSize: 100,
        color: '#ffffff',
        fontWeight: '100',
        alignSelf: "flex-end",
    },
    screenSecondNumber: {
        fontSize: 40,
        color: '#ffffff',
        fontWeight: '100',
        alignSelf: "flex-end",
    },
});
