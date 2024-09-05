import React from 'react';

import { TextField, FormControl, Autocomplete } from '@mui/material';

interface CurrencySelectProps {
  value: string;
  setFieldValue: any;
}

const CurrencySelect: React.FC<CurrencySelectProps> = ({ value, setFieldValue }) => {
  const currencies = [
    { label: 'USD Dollars', value: 'USD' },
    { label: 'EUR Euros', value: 'EUR' },
    { label: 'CLP Chilean Peso', value: 'CLP' },
    { label: 'VEF Venezuelan Bolivares', value: 'VES' },
  ];

  return (
    <FormControl fullWidth variant="standard">
      <Autocomplete
        id="currency"
        options={currencies}
        getOptionLabel={(option) => option.label}
        value={currencies.find((currency) => currency.value === value) || null}
        onChange={(event, newValue) => {
          if (newValue) {
            setFieldValue('moneda', newValue.value);
          }
        }}
        renderInput={(params) => <TextField {...params} label="Currency" variant="standard" />}
      />
    </FormControl>
  );
};

export default CurrencySelect;
