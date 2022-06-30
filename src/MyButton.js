import React from "react";
import {
    Pressable,
    Text,
} from 'react-native'

import Style from "./Style";

const MyButton = (props) => {
    return(
        <Pressable
            onPress={props.onPressFunction}
            
            style={({ pressed }) => [Style.button, { backgroundColor: pressed ? '#fff' : props.color }]}
            hitSlop={10}
          >
            <Text style={Style.buttonText}>{props.buttonText}</Text>
          </Pressable>
    )
}


export default MyButton