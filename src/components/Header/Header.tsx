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
        height: '6rem',
        backgroundColor: 'primary.dark',
        color: 'primary.contrastText',
        '&:hover': {
          opacity: 'primary.dark',
        },
      }}
    >
      <Typography variant="subtitle1" sx={{fontWeight: 'bold'}} component="h3" align="center">
        Conversor de Pesos Argentinos a Dolares y viceversa.
      </Typography>
    </Box>
  );
}