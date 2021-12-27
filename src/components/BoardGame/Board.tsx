import React, { FunctionComponent, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Letters } from '../../types/Letters';
import ButtonBoard from './ButtonBoard';

type BoardProps = {
    isValid: boolean;
    letters: Letters[];
    lettersSelect: Letters[];
    validateLetter: (value: string, indexLetter: number) => void;
}

const Board: FunctionComponent<BoardProps> = (props) => {

    function checkIsSelect(letter: Letters): boolean {
        return props.lettersSelect.find(item => item.index == letter.index) ? true : false
    }

    return (<View style={styles.boardContainer}>
        {props.letters.map((letter, indexLetter) => <View  key={'cont-button-board-' + indexLetter}style={{ flex: 1, flexBasis: '25%', justifyContent: 'center', alignItems: 'center', marginVertical: 5 }} >
            <ButtonBoard isValid={checkIsSelect(letter) ? props.isValid: undefined} indexLetter={indexLetter} textContent={letter.value} onPress={(letter, index) => props.validateLetter(letter, index)} isActive={checkIsSelect(letter)} />
        </View>)}
    </View>)

}

const styles = StyleSheet.create({
    boardContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        alignContent:'center',
    },

})

export default Board;