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
        setErrors('strMonto', '');
        setFieldValue('strMonto', e.target.value);
      }}
    />
  );
};

export default AmountField;
