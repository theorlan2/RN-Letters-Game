/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { FunctionComponent, useEffect, useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Board from './components/BoardGame/Board';
import ButtonClear from './components/ButtonClear';
import InputResult from './components/InputResult';
import { Letters } from './types/Letters';
import { generateBoardsLetters } from './utils/generateBoardLetters';
import { formatTextFromArray, validateSelected } from './utils/validateBoardSelected';


const LettersGame: FunctionComponent = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [letters, setLetters] = useState([] as Letters[])
  const [columnsBoardSize] = useState(4)
  const [isValidSelected, setIsValidSelected] = useState(false)
  const [lastIndexSelect, setLastIndexSelect] = useState(0)
  const [lettersSelect, setLettersSelect] = useState([] as Letters[])

  useEffect(() => {
    generateBoard()
  }, [])
  useEffect(() => {
    validate();
  }, [lettersSelect]);

  function generateBoard() {
    const result = generateBoardsLetters();
    setLetters(result)
  }

  function clearWord() {
    setLettersSelect([]);
  }

  function checkLetterExist(index: number): boolean {
    return lettersSelect.find(item => item.index == index) ? true : false;
  }

  function validateLetter(value: string, indexLetter: number) {
    if (!checkLetterExist(indexLetter)) {
      let isValid = false;
      let listLetters = [...lettersSelect];
      if (lettersSelect.length > 0) {
        isValid = validateTileTwice(indexLetter);
      } else {
        isValid = true;
      }

      if (isValid) {
        listLetters.push({ value, index: indexLetter });
        setLastIndexSelect(indexLetter);
        setLettersSelect(listLetters);
      }
    }
  }

  function validateTileTwice(index: number): boolean {

    const nTopLeft = lastIndexSelect - columnsBoardSize - 1;
    const nTop = lastIndexSelect - columnsBoardSize;
    const nTopRight = lastIndexSelect - columnsBoardSize + 1;
    const nBottomLeft = lastIndexSelect + columnsBoardSize - 1;
    const nBottom = lastIndexSelect + columnsBoardSize;
    const nBottomRight = lastIndexSelect + columnsBoardSize + 1;
    const nleft = lastIndexSelect - 1;
    const nRight = lastIndexSelect + 1;

    const resultIndexValids = [
      nTopLeft,
      nTop,
      nTopRight,
      nBottomLeft,
      nBottom,
      nBottomRight,
      nleft,
      nRight,
    ];
    return resultIndexValids.find(indexValid => indexValid == index) ? true : false;
  }

  function validate() {
    const resultStr = formatTextFromArray(lettersSelect);
    const resultValidation = validateSelected(resultStr)
    setIsValidSelected(resultValidation);
  }

  return (
    <View style={{ ...backgroundStyle, flex: 1, }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View
        style={{ ...backgroundStyle, ...styles.container }}>
        <View style={styles.contBtnClear} >
          <ButtonClear onPress={clearWord} />
        </View>
        <View style={styles.contBoard} >
          <Board isValid={isValidSelected} letters={letters} lettersSelect={lettersSelect} validateLetter={validateLetter} />
        </View>
        <View style={styles.contResult} >
          <InputResult isValid={isValidSelected} resultLetters={lettersSelect} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, flexDirection: 'column', justifyContent: 'space-between'
  },
  contBtnClear: {
    flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'
  },
  contBoard: {
    flex: 3, marginVertical: 20, width: '100%', justifyContent: 'center', alignItems: 'center', alignContent: 'center'
  },
  contResult: {
    flex: 1,
  }
});

export default LettersGame;
