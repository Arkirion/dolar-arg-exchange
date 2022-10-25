import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export const SpreadTypeCheck = () => {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Tipo de cambio</FormLabel>
      <RadioGroup
        row
        defaultValue="bid"
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="bid" control={<Radio />} label="Compra" />
        <FormControlLabel value="ask" control={<Radio />} label="Venta" />
      </RadioGroup>
    </FormControl>
  );
}
