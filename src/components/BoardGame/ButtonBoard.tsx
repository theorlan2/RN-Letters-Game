import React, { FunctionComponent, useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type ButtonProps = {
    isActive: boolean;
    isValid?: boolean;
    textContent: string;
    indexLetter: number;
    onPress?: (value: string, indexLetter: number) => void;
}

const ButtonBoard: FunctionComponent<ButtonProps> = (props) => {

    const colorInActive = '#EC7202';
    const colorValid = '#76B820';
    const colorError = '#C3303D';

    const [colorBtn, setColorBtn] = useState(colorInActive);

    function selectLetter() {
        if (props.onPress) {
            props.onPress(props.textContent, props.indexLetter);
        }
    }

    useEffect(() => {
        switch (props.isValid) {
            case false:
                setColorBtn(colorError);
                break;
            case true:
                setColorBtn(colorValid);
                break;
            default:
                setColorBtn(colorInActive);
                break;
        }
    }, [props.isValid])

    return (<Pressable onPress={selectLetter} style={{ ...styles.button, backgroundColor: colorBtn, borderWidth: props.isActive ? 0 : 2 }} >
        <Text style={styles.textButton}>{props.textContent}</Text>
    </Pressable>)

}
const styles = StyleSheet.create({
    button: {
        width: '90%',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: '10%',
        borderColor: '#C3303D'
    },
    textButton: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white'
    }
})

export default ButtonBoard;