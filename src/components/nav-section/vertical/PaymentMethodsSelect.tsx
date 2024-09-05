import React, { useState, useEffect } from 'react';

import { Chip, TextField, IconButton, Autocomplete } from '@mui/material';

import { useFormStore } from 'src/store/demoFormStore';

import { Iconify } from 'src/components/iconify';

interface PaymentMethod {
  Tipo: string;
  Imagen: string;
  Nombre: string;
  disabled?: boolean;
}

interface PaymentMethodsSelectProps {
  setFieldValue: any;
}

const paymentMethodsByCurrency: any = {
  USD: [
    {
      Nombre: 'Credit / Debit',
      Tipo: 'tdc_bs',
      Imagen: 'pago-tarjetas.svg',
    },
    {
      Nombre: 'Paypal',
      Tipo: 'paypal',
      Imagen: 'paypal.svg',
    },
    {
      Nombre: 'Zelle',
      Tipo: 'zelle',
      Imagen: 'zelle.svg',
    },
    {
      Nombre: 'Bank Transfer',
      Tipo: 'usd_transfer',
      Imagen: 'transfer.svg',
    },
    {
      Nombre: 'Cash Payment',
      Tipo: 'cash',
      Imagen: 'cash.svg',
    },
    {
      Nombre: 'Installment Payment',
      Tipo: 'pago_cuotas',
      Imagen: 'pago_cuotas.svg',
    },
  ],
  VES: [
    {
      Nombre: 'Mercantil Debit',
      Tipo: 'tdd_mc',
      Imagen: 'mercantil.svg',
    },
    {
      Nombre: 'Bolívar Credit Cards',
      Tipo: 'tdc_mc',
      Imagen: 'pago-tarjetas.svg',
    },
    {
      Nombre: 'C2P Mobile Payment',
      Tipo: 'c2p',
      Imagen: 'pagomovil.svg',
    },
    {
      Nombre: 'Bancamiga Mobile Payment',
      Tipo: 'pm_bamiga',
      Imagen: 'pagomovil.svg',
    },
    {
      Nombre: 'Banesco Debit',
      Tipo: 'banesco',
      Imagen: 'banescopagos.svg',
    },
    {
      Nombre: 'BNC Mobile Payment',
      Tipo: 'pm_bnc',
      Imagen: 'pagomovil.svg',
    },
    {
      Nombre: 'Banplus Mobile Payment',
      Tipo: 'pm_banplus',
      Imagen: 'pagomovil.svg',
    },
    {
      Nombre: 'Credicard Debit',
      Tipo: 'tdd_ccard',
      Imagen: 'credicard.png',
    },
    {
      Nombre: 'Credit Card',
      Tipo: 'tdc_ccard',
      Imagen: 'credicard.png',
    },
    {
      Nombre: 'BNC Debit Card',
      Tipo: 'tdd_bnc',
      Imagen: 'bnc.svg',
    },
    {
      Nombre: 'BNC Credit Cards',
      Tipo: 'tdc_bnc',
      Imagen: 'pago-tarjetas.svg',
    },
    {
      Nombre: 'Banesco Mobile Payment',
      Tipo: 'pm_banesco',
      Imagen: 'pagomovil.svg',
    },
    {
      Nombre: 'BDV Mobile Payment',
      Tipo: 'pm_bdv',
      Imagen: 'pagomovil.svg',
    },
    {
      Nombre: 'BDV Payment Button',
      Tipo: 'bdv',
      Imagen: 'bdv.svg',
    },
    {
      Nombre: 'Mi Banco Mobile Payment',
      Tipo: 'pm_mibanco',
      Imagen: 'pagomovil.svg',
    },
  ],
  CLP: [
    {
      Nombre: 'Webpay - Transbank',
      Tipo: 'tbk_wpay',
      Imagen: 'webpay.svg',
    },
    {
      Nombre: 'Account to Account Payment',
      Tipo: 'khipu',
      Imagen: 'khipu.png',
    },
    {
      Nombre: 'Bank Transfer',
      Tipo: 'etpay',
      Imagen: 'transfer.svg',
    },
  ],
  EUR: [
    {
      Nombre: 'Credit / Debit',
      Tipo: 'tdc_bs',
      Imagen: 'pago-tarjetas.svg',
    },
    {
      Nombre: 'Paypal',
      Tipo: 'paypal',
      Imagen: 'paypal.svg',
    },
    {
      Nombre: 'Bank Transfer',
      Tipo: 'truelayer',
      Imagen: 'transfer.svg',
    },
  ],
};

const PaymentMethodsSelect: React.FC<PaymentMethodsSelectProps> = ({ setFieldValue }) => {
  const [paymentMethodsOptions, setPaymentMethodsOptions] = useState<PaymentMethod[]>([]);
  const [selectedPaymentMethods, setSelectedPaymentMethods] = useState<PaymentMethod[]>([]);
  const { moneda } = useFormStore();

  useEffect(() => {
    const fetchPaymentMethods = async () => {
      try {
        const methods = paymentMethodsByCurrency[moneda] || [];
        setPaymentMethodsOptions([
          { Tipo: 'all', Nombre: 'All', Imagen: '', disabled: false },
          ...methods,
        ]);
      } catch (error) {
        console.error('Failed to fetch payment methods', error);
      }
    };

    fetchPaymentMethods();
  }, [moneda]);

  const handlePaymentMethodChange = (event: any, newValue: PaymentMethod[]) => {
    let finalSelection = newValue;

    // Si "Todos" es seleccionado, selecciona todos los métodos de pago disponibles
    if (newValue.some((method) => method.Tipo === 'all')) {
      finalSelection = paymentMethodsOptions.filter((method) => method.Tipo !== 'all');
    }

    setSelectedPaymentMethods(finalSelection);
    const formattedMethods = finalSelection.map((method) =>
      method.disabled ? `${method.Tipo}:disabled` : method.Tipo
    );
    setFieldValue('metodos', formattedMethods.join(','));
  };

  const handleDelete = (method: PaymentMethod) => {
    const updatedMethods = selectedPaymentMethods.filter(
      (selectedMethod) => selectedMethod.Tipo !== method.Tipo
    );
    handlePaymentMethodChange(null, updatedMethods);
  };

  const handleDisable = (method: PaymentMethod) => {
    const updatedMethods = selectedPaymentMethods.map((selectedMethod) =>
      selectedMethod.Tipo === method.Tipo
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
      getOptionLabel={(option) => option.Nombre}
      value={selectedPaymentMethods}
      onChange={handlePaymentMethodChange}
      renderTags={(value1, getTagProps) =>
        value1.map((option, index) => (
          <Chip
            label={option.disabled ? `${option.Nombre}:disabled` : option.Nombre}
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
          label="Payments Solutions "
          placeholder="Search..."
        />
      )}
    />
  );
};

export default PaymentMethodsSelect;
