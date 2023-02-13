import React, { FunctionComponent, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Letters } from '../models/Letters.model';
import { formatTextFromArray } from '../utils/validateBoardSelected';

type Props = {
    resultLetters: Letters[];
    isValid: boolean;
}

const InputResult: FunctionComponent<Props> = (props) => {

    const [resultText, setResultText] = useState('')

    useEffect(() => {
        if (props.resultLetters && props.resultLetters.length > 0) {
            const result = formatTextFromArray(props.resultLetters);
            setResultText(result);
        } else {
            setResultText('');
        }
    }, [props.resultLetters])




    return (<View style={styles.contentText}>
        <View style={styles.contentTextRow}>
            <Text style={styles.textResult} >{resultText}</Text>
            <Text style={styles.textStatus} >{props.isValid ? 'valid' : 'invalid'}</Text>
        </View>
    </View>)

}
const styles = StyleSheet.create({
    contentText: {
        width: '90%',
        marginHorizontal: '5%',
        borderWidth: 1,
    },
    contentTextRow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    textResult: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 0
    },
    textStatus: {
        fontSize: 20,
        margin: 5,
    }
})

export default InputResult;
