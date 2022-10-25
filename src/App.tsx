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

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Header />
      <Container>
        <Grid container spacing={2}>
          <Grid xs={12}>
          </Grid>
          <Grid xs={12} sx={{ px: 5, mt: 4 }} container justifyContent="space-between">
            <SpreadTypeCheck />
            <SourceSelector />
          </Grid>
        </Grid>
        <Divider light sx={{ my: 3 }} />
      </Container>
      <Container>
        <ExchangeInputs />
      </Container>
    </ThemeProvider>
  )
}

export default App
