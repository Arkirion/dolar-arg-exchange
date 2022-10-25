import Grid from '@mui/material/Unstable_Grid2';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { NumberFormatValues, NumericFormat } from 'react-number-format';

export default function NativeSelectDemo() {
  const MAX_LIMIT = 1000000000;
  return (
    <Grid container spacing={2} justifyContent="space-between" >
      <Grid xs={5} display="flex" alignItems="flex-end" direction="row" justifyContent="center">
        <Typography>
          {"Pesos Argentinos"}
        </Typography>
      </Grid>
      <Grid xs={5} sx={{ lineHeight: "1.8px" }} display="flex" alignItems="flex-end" direction="row" justifyContent="center">
        <FormControl fullWidth sx={{ width: 160 }}>
          <NativeSelect
            defaultValue={"dolarBlue"}
            inputProps={{
              name: 'dolar',
              id: 'uncontrolled-native',
            }}
          >
            <option value="dolarBlue">Dolar Blue</option>
            <option value="dolarOficial">Dolar Oficial</option>
            <option value="dolarBolsa">Dolar Bolsa</option>
            <option value="dolarCCL">Dolar CCL</option>
          </NativeSelect>
        </FormControl>
      </Grid>

      <Grid xs={5} display="flex" alignItems="flex-end" direction="row" justifyContent="center">
        <FormControl fullWidth>
          <NumericFormat
            allowLeadingZeros
            customInput={TextField}
            decimalSeparator=","
            thousandSeparator="."
            decimalScale={2}
            fullWidth
            value={1}
            sx={{ input: { textAlign: "center" } }}
            isAllowed={({ floatValue }: NumberFormatValues): boolean => floatValue === undefined || floatValue <= MAX_LIMIT}
          />
        </FormControl>
      </Grid>
      <Grid xs={5} sx={{ lineHeight: "1.8px" }} display="flex" alignItems="flex-end" direction="row" justifyContent="center">
        <FormControl fullWidth>
          <NumericFormat
            allowLeadingZeros
            customInput={TextField}
            decimalSeparator=","
            thousandSeparator="."
            decimalScale={2}
            fullWidth
            value={1}
            sx={{ input: { textAlign: "center" } }}
            isAllowed={({ floatValue }: NumberFormatValues): boolean => floatValue === undefined || floatValue <= MAX_LIMIT}
          />
        </FormControl>
      </Grid>

    </Grid>

  );
}
