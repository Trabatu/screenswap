import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    TextInput,
} from 'react-native'
import MyButton from "./MyButton";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Style from "./Style";

const HomeScreen = ({ navigation, route }) => {

    useEffect(() => {

        getName()
        console.log('Name:' + name)
    }, [])

    const [name, setName] = useState("")


    const last = route.params ? route.params.last : ""
    const main = route.params ? route.params.main : ""
    
    const changeScreen = () => {
        saveName()
        navigation.navigate("MainScreen", { firstName: name, home: 'HomeScreen' })

    }
    const goThird = () => {
        navigation.navigate('LastScreen', { firstName: name, home: 'HomeScreen' })
    }
    const getName = async () => {
        try {
            const value = await AsyncStorage.getItem('name')
            if (value !== null) {
                setName(value)
            }
        } catch (e) {
            console.log("Błąd odczytu z pamięci: " + e)
        }
    }



    const saveName = async () => {
        try {
            await AsyncStorage.setItem('name', name)
        } catch (error) {
            console.log("Błąd zapisu do pamięci: " + error)
        }

    }


    const reset = async () => {
        try {
            setName("")
            await AsyncStorage.removeItem('name')
        } catch (error) {
            console.log("Błąd czyszczenia pamięci: " + error)
        }
    }


    return (
        <View style={Style.view}>
            <Text style={Style.textSmall}> </Text>
            <Text style={Style.text}>Ekran Pierwszy 'Home'</Text>
            <Text style={Style.textSmall}>Podaj swoje imię:</Text>
            <TextInput
                style={Style.textInput}
                onChangeText={setName}
                value={name}
            />
            {// hidden name}
            }
            <Text style={Style.textSmall}>
                {name && 'Twoje imię to: ' + name}
            </Text>
            <MyButton
                onPressFunction={changeScreen}
                buttonText={"Przejdź do drugiego ekranu"}
                color={'#ccc'}
            />
            <MyButton
                onPressFunction={goThird}
                buttonText={"Przejdź do trzeciego ekranu"}
                color={'#ccc'}
            />

            <MyButton
                onPressFunction={reset}
                buttonText={"Wyczyść pamięć"}
                color={'#ccc'}
            />
            <Text style={Style.textSmall}>Wywołano z: {last} {main}</Text>
        </View>

    )

}



export default HomeScreen