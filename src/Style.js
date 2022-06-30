import { StyleSheet } from "react-native";

export default StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        textAlign: "center",
        fontSize: 32,
        margin: 10,
        color: '#b00',
    },
    textSmall: {
        textAlign: "center",
        fontSize: 20,
        margin: 10,
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 5,
        width: '80%',
    },
    pressable: {
        backgroundColor: '#fff',
        padding: 20,
        margin: 10
    },
    button: {
        alignItems: "center",

        padding: 10,
        margin: 20,
        borderRadius: 5,

    },
    buttonText: {
        fontSize: 16,
    },
})