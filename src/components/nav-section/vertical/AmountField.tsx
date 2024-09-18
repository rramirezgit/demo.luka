// AmountField.tsx
import React from 'react';

import TextField from '@mui/material/TextField';

import { useFormStore } from 'src/store/demoFormStore';

interface AmountFieldProps {
  value: string;
  setFieldValue: any;
}

const AmountField: React.FC<AmountFieldProps> = ({ value, setFieldValue }) => {
  const { errors, setErrors } = useFormStore();

  return (
    <TextField
      error={Boolean(errors.strMonto)}
      fullWidth
      id="amount"
      helperText={errors?.strMonto || ' '}
      label="Amount"
      variant="standard"
      value={value}
      onChange={(e) => {
        const newValue = e.target.value;
        if (/^\d*$/.test(newValue)) {
          // Solo permite números
          setErrors('strMonto', '');
          setFieldValue('strMonto', newValue);
        }
      }}
      inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} // Configuración para solo números
    />
  );
};

export default AmountField;
