import React, { FunctionComponent } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type BtnClearProps = {
 onPress: () => void;
}

const ButtonClear: FunctionComponent<BtnClearProps> = (props) => {

    return (<Pressable style={styles.button} onPress={() => props.onPress()} >
        <Text style={styles.buttonText}>Clear Word</Text>
        <View style={styles.buttonCircle} >
            <Text style={styles.buttonCirclerText} >X</Text>
        </View>
    </Pressable>)


}

const styles = StyleSheet.create({
    button: {
        padding: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
    },
    buttonText: {
        fontSize: 18
    },
    buttonCircle: {
        width: 32, height: 32, backgroundColor: "#344", borderRadius: 20, marginHorizontal: 10, alignItems: 'center', justifyContent: 'center'
    },
    buttonCirclerText: {
        color: 'white',
        fontSize:16,
        fontWeight:'bold'
    }
})

export default ButtonClear;