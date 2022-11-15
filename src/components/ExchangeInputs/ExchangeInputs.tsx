import Grid from '@mui/material/Unstable_Grid2';
import { Box, FormControl, NativeSelect, TextField, Typography, CircularProgress } from '@mui/material'
import { NumberFormatValues, NumericFormat } from 'react-number-format';
import { useEffect, useState, useRef } from 'react';
import { Currencies, Source, CurrencySymbol, exchangeInputs } from 'dolar-exchange-sdk';

export type NativeSelectDemoProps = {
  /**
   * Spread type
   */
  spreadType: string // TODO, CHANGE TO TYPE 'Ask | Buy '
  /**
   * api source
   */
  source: Source;
}

const MAX_LIMIT = 1000000000;
const INITIAL_PRICE_VALUE = '1';
const INITIAL_TYPE_VALUE = 'blue';

export default function NativeSelectDemo({ spreadType, source }: NativeSelectDemoProps) {
  const [exchange, setExchange] = useState<any>(null)
  const [dolarPrice, setDolarPrice] = useState<string>(INITIAL_PRICE_VALUE);
  const [argsPrice, setArgsPrice] = useState<string>(INITIAL_PRICE_VALUE);
  const [exchangeType, setExchangeType] = useState<any>(INITIAL_TYPE_VALUE)

  const dolarRef = useRef<any>();
  const argsRef = useRef<any>();

  useEffect(() => {
    const currency = new Currencies(source);
    async function fetchPrices() {
      await currency.initiateData();
      setExchange(currency)
    }

    fetchPrices()
  }, [source])

  useEffect(() => {
    if (exchange) {
      handleDollarInput(dolarRef?.current?.value)
    }
  }, [exchange, spreadType, exchangeType ])


  const handleSourceSelectOnchange = (event: any) => {
    setExchangeType(event.target.value)
  }


  const getValue = ({ amount, from, to }: exchangeInputs): string => {
    const exchangeCalculation = exchange.getExchange({ amount, from, to })
    const selectedDolarType = exchangeCalculation.find((item: any): boolean => item.label === exchangeType);
    const exchangeAmount: string = parseFloat(selectedDolarType[spreadType]).toLocaleString('es-AR', { minimumFractionDigits: 3 }).replace(/\,0+$/, "");
    const sanatizedAmount = isNaN(parseInt(exchangeAmount)) ? '0' : exchangeAmount;
    return sanatizedAmount;
  }

  const handleArgsInput = (value: string) => {
    const amount = value.replaceAll('.', '').replace(',', '.');
    const exchangeAmount = getValue({ amount, from: CurrencySymbol.ARG, to: CurrencySymbol.USD });
    setDolarPrice(exchangeAmount)
  }

  const handleDollarInput = (value: string) => {
    const amount = value.replaceAll('.', '').replace(',', '.');
    const exchangeAmount = getValue({ amount, from: CurrencySymbol.USD, to: CurrencySymbol.ARG });
    setArgsPrice(exchangeAmount)
  }

  return (
    <>
      {
        exchange ?
          <Grid container spacing={2} justifyContent="space-between" sx={{ mt: '3.25rem' }}>
            
            <Grid xs={12} md={6} display="flex" flexDirection={"column"}>
              <Grid xs={12} sx={{ lineHeight: "1.8px" }} display="flex" justifyContent="center" >
                <FormControl fullWidth >
                  <NativeSelect
                    defaultValue={exchangeType}
                    onChange={(event) => handleSourceSelectOnchange(event)}
                    inputProps={{
                      name: 'dolar',
                      id: 'uncontrolled-native',
                    }}
                  >
                    {exchange.getCurrency().map((price: any) => (<option style={{ textAlign: "center" }} key={price.label} value={price.label}> {`DOLAR ${price.label.toUpperCase()} ( $${price[spreadType]} )`}</option>))}
                  </NativeSelect>
                </FormControl>
              </Grid>
              <Grid xs={12} sx={{ lineHeight: "1.8px" }} display="flex" justifyContent="center">
                <FormControl fullWidth>
                  <NumericFormat
                    inputRef={dolarRef}
                    onKeyUp={(event: any) => handleDollarInput(event.target.value as string)}
                    onCopyCapture={(event: any) => handleDollarInput(event.target.value as string)}
                    allowLeadingZeros
                    customInput={TextField}
                    decimalSeparator=","
                    thousandSeparator="."
                    decimalScale={3}
                    autoComplete='off'
                    fullWidth
                    value={dolarPrice}
                    sx={{ input: { textAlign: "center", fontSize: '3rem' } }}
                    isAllowed={({ floatValue }: NumberFormatValues): boolean => floatValue === undefined || floatValue <= MAX_LIMIT}
                  />
                </FormControl>
              </Grid>
            </Grid>

            <Grid xs={12} md={6} display="flex" flexDirection={"column"} sx={{ mt: '7.5px' }}>
              <Grid display="flex" justifyContent="center">
                <Typography>
                  {"PESOS ARGENTINOS"}
                </Typography>
              </Grid>
              <Grid display="flex" direction="column" justifyContent="center">
                <FormControl fullWidth>
                  <NumericFormat
                    onKeyUp={(event: any) => handleArgsInput(event.target.value as string)}
                    inputRef={argsRef}

                    onCopyCapture={(event: any) => handleArgsInput(event.target.value as string)}
                    allowLeadingZeros
                    customInput={TextField}
                    decimalSeparator=","
                    thousandSeparator="."
                    decimalScale={3}
                    fullWidth
                    autoComplete='off'
                    value={argsPrice}
                    sx={{ input: { textAlign: "center", fontSize: '3rem' } }}
                    isAllowed={({ floatValue }: NumberFormatValues): boolean => floatValue === undefined || floatValue <= MAX_LIMIT}
                  />
                </FormControl>
              </Grid>
            </Grid>

          </Grid>
          : <Grid container spacing={2} justifyContent="center">
            <Box sx={{ display: 'flex', mt:'4rem' }}>
              <CircularProgress size={'7rem'} />
            </Box>
          </Grid>
      }
    </>
  );
}
