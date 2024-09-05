// AmountField.tsx
import React from 'react';

import TextField from '@mui/material/TextField';

interface AmountFieldProps {
  value: string;
  setFieldValue: any;
}

const AmountField: React.FC<AmountFieldProps> = ({ value, setFieldValue }) => (
  <TextField
    fullWidth
    id="amount"
    label="Amount"
    variant="standard"
    value={value}
    onChange={(e) => setFieldValue('strMonto', e.target.value)}
  />
);

export default AmountField;
