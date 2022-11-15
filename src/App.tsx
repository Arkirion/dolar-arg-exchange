import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Unstable_Grid2';
import { ThemeProvider } from '@mui/material/styles';
import { SpreadTypeCheck } from './components/SpreadTypeCheck/SpreadTypeCheck';
import SourceSelector from './components/SourceSelector/SourceSelector';
import Header from './components/Header/Header';


import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import { theme } from './common/customization'
import ExchangeInputs from './components/ExchangeInputs/ExchangeInputs';
import { useState } from 'react';

import { Source } from 'dolar-exchange-sdk';


function App() {
  const [spreadType , setSpreadType ]  = useState<any>('bid')
  const [source , setSource ]  = useState<any>(Source.DOLAR_SI)

  const FEATURES = {
    sourceFeature: false,
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Header />
      <Container>
        <Grid container spacing={2}>
          <Grid xs={12}>
          </Grid>
          <Grid xs={12} sx={{ px: 5, mt: 4 }} container justifyContent="space-between">
            <SpreadTypeCheck setSpreadType={setSpreadType} />
            { FEATURES.sourceFeature &&  <SourceSelector  setSource={setSource} />}
          </Grid>
        </Grid>
        <Divider light sx={{ my: 3 }} />
      </Container>
      <Container>
        <ExchangeInputs spreadType={spreadType} source={source} />
      </Container>
    </ThemeProvider>
  )
}

export default App
