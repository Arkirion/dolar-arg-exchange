import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { Source } from 'dolar-exchange-sdk';

export type SourceSelectorProps = {
  /**
   * Source api
   */
  setSource: any;
}

export default function SourceSelector({ setSource }: SourceSelectorProps) {
  const handleOnchange = (value: string) => { 
    setSource(value)
  }
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel variant="standard" htmlFor="uncontrolled-native">
        Fuente
      </InputLabel>
      <NativeSelect
        defaultValue={'DolarHoy'}
        inputProps={{
          name: 'Fuente',
          id: 'uncontrolled-native',
        }}
        onChange={ event => handleOnchange(event.target.value)}
      >
        <option value={Source.DOLAR_SI}>DolarSi</option>
        <option value={Source.DOLAR_HOY}>DolarHoy</option>
      </NativeSelect>
    </FormControl>
  );
}
