import React, { useState, useEffect } from 'react';

import { Chip, TextField, IconButton, Autocomplete } from '@mui/material';

import { Iconify } from 'src/components/iconify';

interface PaymentMethod {
  id: string;
  name: string;
  logo: string;
  disabled?: boolean;
}

interface PaymentMethodsSelectProps {
  value: string;
  setFieldValue: any;
}

const PaymentMethodsSelect: React.FC<PaymentMethodsSelectProps> = ({ value, setFieldValue }) => {
  const [paymentMethodsOptions, setPaymentMethodsOptions] = useState<PaymentMethod[]>([]);
  const [selectedPaymentMethods, setSelectedPaymentMethods] = useState<PaymentMethod[]>([]);

  useEffect(() => {
    const fetchPaymentMethods = async () => {
      try {
        setPaymentMethodsOptions([
          {
            id: '1',
            name: 'Zelle',
            logo: '/static/icons/ic_visa.svg',
          },
          {
            id: '2',
            name: 'BlueSnap',
            logo: '/static/icons/ic_mastercard.svg',
          },
          {
            id: '3',
            name: 'PayPal',
            logo: '/static/icons/ic_paypal.svg',
          },
          {
            id: '4',
            name: 'Moov',
            logo: '/static/icons/ic_stripe.svg',
          },
        ]);
      } catch (error) {
        console.error('Failed to fetch payment methods', error);
      }
    };

    fetchPaymentMethods();
  }, []);

  const handlePaymentMethodChange = (event: any, newValue: PaymentMethod[]) => {
    setSelectedPaymentMethods(newValue);
    const formattedMethods = newValue.map((method) =>
      method.disabled ? `${method.name}:disabled` : method.name
    );
    setFieldValue('metodos', formattedMethods.join(','));
  };

  const handleDelete = (method: PaymentMethod) => {
    const updatedMethods = selectedPaymentMethods.filter(
      (selectedMethod) => selectedMethod.id !== method.id
    );
    handlePaymentMethodChange(null, updatedMethods);
  };

  const handleDisable = (method: PaymentMethod) => {
    const updatedMethods = selectedPaymentMethods.map((selectedMethod) =>
      selectedMethod.id === method.id
        ? { ...selectedMethod, disabled: !selectedMethod.disabled }
        : selectedMethod
    );
    handlePaymentMethodChange(null, updatedMethods);
  };

  return (
    <Autocomplete
      multiple
      id="payment-methods"
      options={paymentMethodsOptions}
      getOptionLabel={(option) => option.name}
      value={selectedPaymentMethods}
      onChange={handlePaymentMethodChange}
      renderTags={(value1, getTagProps) =>
        value1.map((option, index) => (
          <Chip
            label={option.disabled ? `${option.name}:disabled` : option.name}
            {...getTagProps({ index })}
            deleteIcon={
              <>
                <IconButton aria-label="Disable" onClick={() => handleDisable(option)} size="small">
                  <Iconify
                    icon={option.disabled ? 'bi:eye-slash' : 'bi:eye'}
                    width={16}
                    height={16}
                  />
                </IconButton>
                <IconButton aria-label="Delete" onClick={() => handleDelete(option)} size="small">
                  <Iconify icon="bi:trash" width={16} height={16} />
                </IconButton>
              </>
            }
            onDelete={() => handleDelete(option)}
          />
        ))
      }
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label="Select Payment Methods"
          placeholder="Search..."
        />
      )}
      sx={{ mb: 2 }}
    />
  );
};

export default PaymentMethodsSelect;
