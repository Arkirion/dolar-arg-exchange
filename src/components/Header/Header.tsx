import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Header() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"

      sx={{
        height: '4rem',
        backgroundColor: 'primary.dark',
        color: 'primary.contrastText',
        '&:hover': {
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <Typography variant="subtitle1" component="h2" align="center">
        Conversor de Pesos Argentinos a Dolares y viceversa.
      </Typography>
    </Box>
  );
}