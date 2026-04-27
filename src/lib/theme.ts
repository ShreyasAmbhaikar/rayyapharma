export const THEME_STORAGE_KEY = 'rayya-pharma-theme';

export const themeColors = {
  light: '#085693',
  dark: '#071a2a',
} as const;

export type ThemeName = keyof typeof themeColors;

export function isThemeName(value: string | null): value is ThemeName {
  return value === 'light' || value === 'dark';
}
