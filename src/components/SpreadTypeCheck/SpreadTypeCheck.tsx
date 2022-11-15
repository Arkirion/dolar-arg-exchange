import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export type SpreadTypeCheckProps = {
  setSpreadType: any;
}
 
export const SpreadTypeCheck = ( {setSpreadType} : SpreadTypeCheckProps ) => {
  const onChange = (event:any) => {
    setSpreadType(event.target.value)
  }

  return (
    <FormControl sx={{mt:'3.25rem'}}>
      <FormLabel id="demo-row-radio-buttons-group-label">Tipo de cambio</FormLabel>
      <RadioGroup
        onChange={(e) => onChange(e)}
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
