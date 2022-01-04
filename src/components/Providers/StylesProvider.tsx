import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../../styles/theme';

interface StylesProviderProps {
  children: ReactNode;
}

function StylesProvider({ children }: StylesProviderProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export { StylesProvider };
