import React, { useState, useEffect } from 'react';

import {
  Box,
  Chip,
  List,
  Popover,
  MenuItem,
  TextField,
  IconButton,
  ListItemText,
  InputAdornment,
  ListItemSecondaryAction,
} from '@mui/material';

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
      Nombre: 'Scheduled Payments',
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

const PaymentMethodsSelectWithSearch: React.FC<PaymentMethodsSelectProps> = ({ setFieldValue }) => {
  const [paymentMethodsOptions, setPaymentMethodsOptions] = useState<PaymentMethod[]>([]);
  const [selectedPaymentMethods, setSelectedPaymentMethods] = useState<PaymentMethod[]>([]);
  const [searchInput, setSearchInput] = useState('');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { moneda } = useFormStore();

  useEffect(() => {
    const methods = paymentMethodsByCurrency[moneda] || [];
    setPaymentMethodsOptions(methods);
    setSelectedPaymentMethods([{ Nombre: 'All', Tipo: 'all', Imagen: '' }]);
    setFieldValue('metodos', methods.map((method: any) => method.Tipo).join(','));
    setSearchInput('');
  }, [moneda, setFieldValue]);

  const handleTextFieldClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSearchInput('');
  };

  const open = Boolean(anchorEl);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const filteredOptions = paymentMethodsOptions.filter((option) =>
    option.Nombre.toLowerCase().includes(searchInput.toLowerCase())
  );

  const isAllSelected =
    selectedPaymentMethods.length === 1 && selectedPaymentMethods[0].Tipo === 'all';

  const handleOptionToggle = (option: PaymentMethod) => {
    if (isAllSelected) {
      const newSelectedMethods = paymentMethodsOptions.filter(
        (method) => method.Tipo !== option.Tipo
      );
      setSelectedPaymentMethods(newSelectedMethods);
      updateFieldValue(newSelectedMethods);
    } else {
      let newSelectedMethods;
      if (selectedPaymentMethods.some((method) => method.Tipo === option.Tipo)) {
        newSelectedMethods = selectedPaymentMethods.filter((method) => method.Tipo !== option.Tipo);
      } else {
        newSelectedMethods = [...selectedPaymentMethods, option];
      }

      if (newSelectedMethods.length === paymentMethodsOptions.length) {
        newSelectedMethods = [{ Nombre: 'All', Tipo: 'all', Imagen: '' }];
        setSearchInput('');
      }

      setSelectedPaymentMethods(newSelectedMethods);
      updateFieldValue(newSelectedMethods);
    }
  };

  const handleOptionDisable = (option: PaymentMethod) => {
    const newSelectedMethods = selectedPaymentMethods.map((method) =>
      method.Tipo === option.Tipo ? { ...method, disabled: !method.disabled } : method
    );
    setSelectedPaymentMethods(newSelectedMethods);
    updateFieldValue(newSelectedMethods);
  };

  const handleOptionDelete = (option: PaymentMethod) => {
    if (option.Tipo === 'all') {
      setSelectedPaymentMethods([]);
      setFieldValue('metodos', '');
    } else {
      const newSelectedMethods = selectedPaymentMethods.filter(
        (method) => method.Tipo !== option.Tipo
      );
      setSelectedPaymentMethods(newSelectedMethods);
      updateFieldValue(newSelectedMethods);
    }
  };

  const handleClearAll = () => {
    setSelectedPaymentMethods([]);
    setFieldValue('metodos', '');
  };

  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectedPaymentMethods([]);
      setFieldValue('metodos', '');
      setSearchInput('');
    } else {
      setSelectedPaymentMethods([{ Nombre: 'All', Tipo: 'all', Imagen: '' }]);
      setFieldValue('metodos', '');
      setSearchInput('');
    }
  };

  const updateFieldValue = (methods: PaymentMethod[]) => {
    if (methods.length === 1 && methods[0].Tipo === 'all') {
      const formattedMethods = paymentMethodsOptions.map((method) => method.Tipo);
      setFieldValue('metodos', formattedMethods.join(','));
    } else {
      const formattedMethods = methods.map((method) =>
        method.disabled ? `${method.Tipo}:disabled` : method.Tipo
      );
      setFieldValue('metodos', formattedMethods.join(','));
    }
  };

  return (
    <>
      <TextField
        label="Payment Methods"
        variant="standard"
        onClick={handleTextFieldClick}
        InputProps={{
          startAdornment: (
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                maxHeight: '100%',
                width: '100%',
                overflowY: 'auto',
                padding: '4px 0',
                '&::-webkit-scrollbar': {
                  width: '6px',
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: '#c1c1c1',
                  borderRadius: '3px',
                },
              }}
            >
              {selectedPaymentMethods.map((option) => (
                <Chip
                  key={option.Tipo}
                  label={option.disabled ? `${option.Nombre}:disabled` : option.Nombre}
                  onDelete={() => handleOptionDelete(option)}
                  deleteIcon={
                    option.Tipo !== 'all' ? (
                      <>
                        <IconButton onClick={() => handleOptionDisable(option)} size="small">
                          <Iconify
                            icon={option.disabled ? 'bi:eye-slash' : 'bi:eye'}
                            width={16}
                            height={16}
                          />
                        </IconButton>
                        <IconButton onClick={() => handleOptionDelete(option)} size="small">
                          <Iconify icon="bi:trash" width={16} height={16} />
                        </IconButton>
                      </>
                    ) : undefined
                  }
                  style={{ margin: '2px' }}
                />
              ))}
            </Box>
          ),
          endAdornment: selectedPaymentMethods.length > 0 && (
            <InputAdornment position="end">
              <IconButton onClick={handleClearAll}>
                <Iconify icon="eva:close-outline" width={20} height={20} />
              </IconButton>
            </InputAdornment>
          ),
          readOnly: true,
        }}
        multiline
        minRows={selectedPaymentMethods.length > 0 ? 1 : undefined}
        maxRows={4}
        sx={{
          mt: 2,
          mb: 1,
          '& .MuiInputBase-input': {
            display: 'none',
          },
        }}
      />
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        slotProps={{
          paper: {
            style: {
              maxHeight: '300px', // Altura máxima del Popover
              overflow: 'auto', // Habilitar scroll
              scrollbarWidth: 'thin', // Para navegadores que soportan esta propiedad
            },
          },
        }}
      >
        <div style={{ padding: 16, width: 300 }}>
          <Box sx={{ position: 'absolute', top: 0, right: 0 }}>
            <IconButton onClick={handleClose} size="small">
              <Iconify icon="eva:close-outline" width={15} height={15} />
            </IconButton>
          </Box>
          {!isAllSelected && (
            <TextField
              variant="outlined"
              placeholder="Search..."
              value={isAllSelected ? '' : searchInput} // Clear search input if "All" is selected
              onChange={handleSearchChange}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Iconify icon="eva:search-outline" width={20} height={20} />
                  </InputAdornment>
                ),
              }}
              sx={{ marginBottom: '8px', mt: 1 }}
              disabled={isAllSelected} // Disable search when "All" is selected
            />
          )}
          <List dense>
            <MenuItem onClick={handleSelectAll} style={{ height: 40 }}>
              <ListItemText primary="All" />
            </MenuItem>
            {filteredOptions.map((option) => {
              const isSelected =
                isAllSelected ||
                selectedPaymentMethods.some((method) => method.Tipo === option.Tipo);
              const isDisabled = selectedPaymentMethods.find(
                (method) => method.Tipo === option.Tipo
              )?.disabled;

              return (
                <MenuItem
                  key={option.Tipo}
                  onClick={() => handleOptionToggle(option)}
                  selected={isSelected}
                  style={{ height: 40 }}
                >
                  <ListItemText
                    primary={option.Nombre}
                    style={{ textDecoration: isDisabled ? 'line-through' : 'none' }}
                  />
                  {isSelected &&
                    option.Tipo !== 'all' && ( // Don't show disable for "All"
                      <ListItemSecondaryAction>
                        <IconButton
                          edge="end"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOptionDisable(option);
                          }}
                          size="small"
                        >
                          <Iconify
                            icon={isDisabled ? 'bi:eye-slash' : 'bi:eye'}
                            width={16}
                            height={16}
                          />
                        </IconButton>
                      </ListItemSecondaryAction>
                    )}
                </MenuItem>
              );
            })}
          </List>
        </div>
      </Popover>
    </>
  );
};

export default PaymentMethodsSelectWithSearch;
