import {words} from '../data/dictionary.json';
import {Letters} from '../types/Letters';

export function formatTextFromArray(listLetters: Letters[]): string {
  let result = listLetters.map(item => item.value);
  return result.join('');
}

export function validateSelected(str: string): boolean {
  return words.find(item => item.toLocaleLowerCase() == str.toLocaleLowerCase()) ? true : false;
}
