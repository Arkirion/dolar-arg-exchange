import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function SourceSelector() {
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
      >
        <option value={10}>DolarSi</option>
        <option value={20}>DolarHoy</option>
      </NativeSelect>
    </FormControl>
  );
}
