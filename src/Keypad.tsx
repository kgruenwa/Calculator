// Import der benötigten Komponenten und Styles
import * as React from "react";
import Button from "./Button";
import { View, Text } from "react-native";
import { Styles } from "./MainStyles";

// Definition der Keypad-Komponente
export default function Keypad() {
    // Zustandsvariablen für die Eingaben und das Ergebnis
    const [firstNumber, setFirstNumber] = React.useState("");
    const [secondNumber, setSecondNumber] = React.useState("");
    const [operation, setOperation] = React.useState("");
    const [result, setResult] = React.useState<Number | null>(null);

    // Funktion zum Hinzufügen einer Ziffer zur ersten Zahl
    const handleNumberPress = (buttonValue: string) => {
        if (firstNumber.length < 10) {
            setFirstNumber(firstNumber + buttonValue);
        }
    };

    // Funktion zum Festlegen der Operation und Verschieben der ersten Zahl zur zweiten Zahl
    const handleOperationPress = (buttonValue: string) => {
        setOperation(buttonValue);
        setSecondNumber(firstNumber);
        setFirstNumber("");
    };

    // Funktion zum Zurücksetzen aller Eingaben und des Ergebnisses
    const clear = () => {
        setFirstNumber("");
        setSecondNumber("");
        setOperation("");
        setResult(null);
    };

    // Funktion zum Anzeigen der ersten Zahl auf dem Bildschirm
    const firstNumberDisplay = () => {
        if (result !== null) {
            // Wenn ein Ergebnis vorhanden ist, wird es angezeigt
            return <Text style={result < 99999 ? [Styles.screenFirstNumber, { color: '#46D5B2' }] : [Styles.screenFirstNumber, { fontSize: 50, color: '#46D5B2' }]}>{result?.toString()}</Text>;
        }
        if (firstNumber && firstNumber.length < 6) {
            // Wenn die erste Zahl kleiner als 6 Zeichen ist, wird sie angezeigt
            return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>;
        }
        if (firstNumber === "") {
            // Wenn keine erste Zahl vorhanden ist, wird 0 angezeigt
            return <Text style={Styles.screenFirstNumber}>{"0"}</Text>;
        }
        if (firstNumber.length > 5 && firstNumber.length < 8) {
            // Wenn die erste Zahl zwischen 6 und 7 Zeichen lang ist, wird sie mit einer größeren Schriftgröße angezeigt
            return (
                <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}>
                    {firstNumber}
                </Text>
            );
        }
        if (firstNumber.length > 7) {
            // Wenn die erste Zahl länger als 7 Zeichen ist, wird sie mit einer etwas kleineren Schriftgröße angezeigt
            return (
                <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]}>
                    {firstNumber}
                </Text>
            );
        }
    };

    // Funktion zum Berechnen des Ergebnisses basierend auf der ausgewählten Operation
    const getResult = () => {
        switch (operation) {
            case "+":
                clear();
                var additionResult = parseFloat(secondNumber) + parseFloat(firstNumber);
                setResult(additionResult);
                setFirstNumber("" + additionResult);
                break;
            case "-":
                clear();
                var subtractionResult = parseFloat(secondNumber) - parseFloat(firstNumber);
                setResult(subtractionResult);
                setFirstNumber("" + subtractionResult);
                break;
            case "*":
                clear();
                var multiplicationResult = parseFloat(secondNumber) * parseFloat(firstNumber);
                setResult(multiplicationResult);
                setFirstNumber("" + multiplicationResult);
                break;
            case "/":
                clear();
                var divisionResult = parseFloat(secondNumber) / parseFloat(firstNumber);
                setResult(divisionResult);
                setFirstNumber("" + divisionResult);
                break;
            case "^":
                clear();
                var powerResult = Math.pow(parseInt(secondNumber), parseInt(firstNumber));
                setResult(powerResult);
                setFirstNumber("" + powerResult);
                break;
            case "%":
                clear();
                var percentageResult = (parseFloat(secondNumber) * parseFloat(firstNumber)) / 100;
                setResult(percentageResult);
                setFirstNumber("" + percentageResult);
                break;
        }
    };
    

    return (
        <View style={Styles.viewBottom}>
            <View
                style={{
                    height: 120,
                    width: "90%",
                    justifyContent: "flex-end",
                    alignSelf: "center",
                }}>
                <Text style={Styles.screenSecondNumber}>
                    {secondNumber}
                    <Text style={{ color: "purple", fontSize: 40, fontWeight: '300' }}>{operation}</Text>
                </Text>
                {firstNumberDisplay()} 
            </View>
            <View style={Styles.row}>
                <Button title="Del" isGray onPress={() => setFirstNumber(firstNumber.slice(0, -1))} />
                <Button title="^" isGray onPress={() => handleOperationPress("^")} />
                <Button title="%" isGray onPress={() => handleOperationPress("%")} />
                <Button title="AC" isGray onPress={clear} />
            </View>
            <View style={Styles.row}>
                <Button title="7" onPress={() => handleNumberPress("7")} />
                <Button title="8" onPress={() => handleNumberPress("8")} />
                <Button title="9" onPress={() => handleNumberPress("9")} />
                <Button title="÷" isGray onPress={() => handleOperationPress("/")} />
            </View>
            <View style={Styles.row}>
                <Button title="4" onPress={() => handleNumberPress("4")} />
                <Button title="5" onPress={() => handleNumberPress("5")} />
                <Button title="6" onPress={() => handleNumberPress("6")} />
                <Button title="x" isGray onPress={() => handleOperationPress("*")} />
            </View>
            <View style={Styles.row}>
                <Button title="1" onPress={() => handleNumberPress("1")} />
                <Button title="2" onPress={() => handleNumberPress("2")} />
                <Button title="3" onPress={() => handleNumberPress("3")} />
                <Button title="-" isGray onPress={() => handleOperationPress("-")} />
            </View>
            <View style={Styles.row}>
                <Button title="." onPress={() => handleNumberPress(".")} />
                <Button title="0" onPress={() => handleNumberPress("0")} />
                <Button title="=" isBlue onPress={() => getResult()} />
                <Button title="+" isGray onPress={() => handleOperationPress("+")} />
            </View>
        </View>
    );
}
