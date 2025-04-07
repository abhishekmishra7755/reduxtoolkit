// ColorModeSelect.js
import React from 'react';
import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
// import { useThemeContext } from './ThemeContext';

import { useTheme } from '@mui/material/styles';

const ColorModeSelect = () => {
  const { toggleTheme } = useThemeContext();
  const theme = useTheme();

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};

export default ColorModeSelect;
