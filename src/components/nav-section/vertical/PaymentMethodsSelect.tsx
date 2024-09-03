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
  value: string;
  setFieldValue: any;
  currency: string; // Nueva prop para recibir la moneda
}

const paymentMethodsByCurrency: any = {
  USD: [
    {
      Nombre: 'Crédito / Débito',
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
      Nombre: 'Transferencia',
      Tipo: 'usd_transfer',
      Imagen: 'transfer.svg',
    },
    {
      Nombre: 'Pago en Efectivo',
      Tipo: 'cash',
      Imagen: 'cash.svg',
    },
    {
      Nombre: 'Pago en Cuotas',
      Tipo: 'pago_cuotas',
      Imagen: 'pago_cuotas.svg',
    },
  ],
  VES: [
    {
      Nombre: 'Débito Mercantil',
      Tipo: 'tdd_mc',
      Imagen: 'mercantil.svg',
    },
    {
      Nombre: 'Tarjetas de Crédito Bs.',
      Tipo: 'tdc_mc',
      Imagen: 'pago-tarjetas.svg',
    },
    {
      Nombre: 'Pago Móvil C2P',
      Tipo: 'c2p',
      Imagen: 'pagomovil.svg',
    },
    {
      Nombre: 'Pago Móvil Bancamiga',
      Tipo: 'pm_bamiga',
      Imagen: 'pagomovil.svg',
    },
    {
      Nombre: 'Débito Banesco',
      Tipo: 'banesco',
      Imagen: 'banescopagos.svg',
    },
    {
      Nombre: 'Pago Móvil BNC',
      Tipo: 'pm_bnc',
      Imagen: 'pagomovil.svg',
    },
    {
      Nombre: 'Pago Móvil Banplus',
      Tipo: 'pm_banplus',
      Imagen: 'pagomovil.svg',
    },
    {
      Nombre: 'Débito Credicard',
      Tipo: 'tdd_ccard',
      Imagen: 'credicard.png',
    },
    {
      Nombre: 'Tarjeta de Crédito',
      Tipo: 'tdc_ccard',
      Imagen: 'credicard.png',
    },
    {
      Nombre: 'Tarjeta de Débito BNC',
      Tipo: 'tdd_bnc',
      Imagen: 'bnc.svg',
    },
    {
      Nombre: 'Tarjetas de Crédito BNC',
      Tipo: 'tdc_bnc',
      Imagen: 'pago-tarjetas.svg',
    },
    {
      Nombre: 'Pago Móvil Banesco',
      Tipo: 'pm_banesco',
      Imagen: 'pagomovil.svg',
    },
    {
      Nombre: 'Pago Móvil BDV',
      Tipo: 'pm_bdv',
      Imagen: 'pagomovil.svg',
    },
    {
      Nombre: 'Botón de Pago BDV',
      Tipo: 'bdv',
      Imagen: 'bdv.svg',
    },
    {
      Nombre: 'Pago Móvil Mi Banco',
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
      Nombre: 'Pago Cuenta a Cuenta',
      Tipo: 'khipu',
      Imagen: 'khipu.png',
    },
    {
      Nombre: 'Transferencia Bancaria',
      Tipo: 'etpay',
      Imagen: 'transfer.svg',
    },
  ],
  EUR: [
    {
      Nombre: 'Crédito / Débito',
      Tipo: 'tdc_bs',
      Imagen: 'pago-tarjetas.svg',
    },
    {
      Nombre: 'Paypal',
      Tipo: 'paypal',
      Imagen: 'paypal.svg',
    },
    {
      Nombre: 'Transferencia Bancaria',
      Tipo: 'truelayer',
      Imagen: 'transfer.svg',
    },
  ],
};

const PaymentMethodsSelect: React.FC<PaymentMethodsSelectProps> = ({ value, setFieldValue }) => {
  const [paymentMethodsOptions, setPaymentMethodsOptions] = useState<PaymentMethod[]>([]);
  const [selectedPaymentMethods, setSelectedPaymentMethods] = useState<PaymentMethod[]>([]);
  const { moneda } = useFormStore();

  useEffect(() => {
    const fetchPaymentMethods = async () => {
      try {
        const methods = paymentMethodsByCurrency[moneda] || [];
        setPaymentMethodsOptions([
          { Tipo: 'all', Nombre: 'Todos', Imagen: '', disabled: false },
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
      sx={{ mb: 2 }}
    />
  );
};

export default PaymentMethodsSelect;
