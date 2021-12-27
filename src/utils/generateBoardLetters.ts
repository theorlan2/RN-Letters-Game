import {board} from '../data/test-board-1.json';
import {Letters} from '../types/Letters';

export function generateBoardsLetters(randomLenght: number = 16): Letters[] {
  let letters = [] as string[];
  let listLetters = [] as Letters[];

  if (!board) {
    letters = generateLettersString(randomLenght);
  } else {
    letters = board;
  }

  letters.map((item, indexLetter) => {
    listLetters.push({value: item, index: indexLetter});
  });
  return listLetters;
}

function generateLettersString(lengthStr: number) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const charactersLength = characters.length;
  let result = '';
  for (var i = 0; i <= lengthStr; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    result += ',';
  }

  return result.slice(0, lengthStr * 2 - 1).split(',');
}
