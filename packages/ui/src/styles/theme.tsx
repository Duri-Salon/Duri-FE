import { palette } from './palette';
import { typo } from './typo';

export interface TypeOfTheme {
  typo: TypeOfTypo;
  palette: TypeOfPalette;
}

export const theme: TypeOfTheme = {
  typo,
  palette,
};

export type TypeOfPalette = typeof palette;
export type KeyOfPalette = keyof typeof palette;

export type TypeOfTypo = typeof typo;
export type KeyOfTypo = keyof typeof typo;
