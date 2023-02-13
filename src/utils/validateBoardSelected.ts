import {words} from '../data/dictionary.json';
import {Letters} from '../models/Letters.model';

export function formatTextFromArray(listLetters: Letters[]): string {
  const result = listLetters.map(item => item.value);
  return result.join('');
}

export function validateSelected(str: string): boolean {
  return words.find(
    item => item.toLocaleLowerCase() === str.toLocaleLowerCase(),
  )
    ? true
    : false;
}
