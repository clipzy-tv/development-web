import { createTheme, type CSSVariablesResolver, type MantineColorsTuple } from '@mantine/core';

// Palette from the desktop app: D:/Clipzy/src/theme/clipzyTheme.ts.
export const clipzyTokens = {
  background: '#242424',
  surface: '#1F1F1F',
  elevated: '#2E2E2E',
  hover: '#3B3B3B',
  border: '#363636',
  borderStrong: '#424242',
  primary: '#1971C2',
  primaryHover: '#1864AB',
  primaryLight: '#0C3256',
  textPrimary: '#C9C9C9',
  textSecondary: '#828282',
} as const;

const clipzyBlue: MantineColorsTuple = [
  '#E7F5FF', '#D0EBFF', '#A5D8FF', '#74C0FC', '#4DABF7',
  '#339AF0', '#228BE6', '#1C7ED6', clipzyTokens.primary, clipzyTokens.primaryHover,
];

const clipzyDark: MantineColorsTuple = [
  clipzyTokens.textPrimary, '#B8B8B8', clipzyTokens.textSecondary, '#696969',
  clipzyTokens.borderStrong, clipzyTokens.hover, clipzyTokens.elevated,
  clipzyTokens.background, clipzyTokens.surface, '#141414',
];

export const theme = createTheme({
  fontFamily: '"Inter", "Segoe UI", Arial, sans-serif',
  primaryColor: 'clipzy',
  primaryShade: 8,
  colors: { clipzy: clipzyBlue, dark: clipzyDark },
  defaultRadius: 'sm',
  headings: { fontFamily: '"Inter", "Segoe UI", Arial, sans-serif', fontWeight: '500' },
});

export const clipzyCssVariables: CSSVariablesResolver = () => ({
  variables: {
    '--clipzy-background': clipzyTokens.background,
    '--clipzy-surface': clipzyTokens.surface,
    '--clipzy-elevated': clipzyTokens.elevated,
    '--clipzy-border': clipzyTokens.border,
    '--clipzy-border-strong': clipzyTokens.borderStrong,
    '--clipzy-primary': clipzyTokens.primary,
    '--clipzy-primary-hover': clipzyTokens.primaryHover,
    '--clipzy-primary-light': clipzyTokens.primaryLight,
    '--clipzy-text': clipzyTokens.textPrimary,
    '--clipzy-text-secondary': clipzyTokens.textSecondary,
  },
  light: {},
  dark: {
    '--mantine-color-body': clipzyTokens.background,
    '--mantine-color-text': clipzyTokens.textPrimary,
    '--mantine-color-default-border': clipzyTokens.border,
    '--mantine-color-default': clipzyTokens.elevated,
    '--mantine-color-default-hover': clipzyTokens.hover,
    '--mantine-color-dimmed': clipzyTokens.textSecondary,
  },
});
