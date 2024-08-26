import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Select,
  Button,
  Checkbox,
  MenuItem,
  TextField,
  Accordion,
  InputLabel,
  Typography,
  FormControl,
  FormControlLabel,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';

import { useFormStore } from 'src/store/demoFormStore';

import { Iconify } from 'src/components/iconify';
import { LukaLoaderButton } from 'src/components/demo/luka-loader-btn';

import { navSectionCssVars } from '../css-vars';

import type { NavSectionProps } from '../types';

// ----------------------------------------------------------------------

export function NavSectionVertical({
  sx,
  data,
  render,
  slotProps,
  enabledRootRedirect,
  cssVars: overridesVars,
}: NavSectionProps) {
  const theme = useTheme();
  const cssVars = {
    ...navSectionCssVars.vertical(theme),
    ...overridesVars,
  };

  const {
    strMonto,
    strDecimales,
    color,
    terminos,
    metodos,
    sepDecimal,
    sepMiles,
    seleccion,
    guardarTarjeta,
    email,
    idioma,
    trazaId,
    lukapayId,
    referencia,
    fechaCuotas,
    tipoPagoCuota,
    checkCuotas,
    frecuenciaCuotas,
    cantidadCuotas,
    idConfigCuotas,
    moneda,
    horizontal,
    setFieldValue,
  } = useFormStore();

  return (
    <Stack sx={{ ...cssVars, ...sx, paddingX: 1 }}>
      <Box sx={{ flex: '1 1 auto' }}>
        {/* Setup Information */}
        <Accordion>
          <AccordionSummary expandIcon={<Iconify icon="bi:chevron-down" />}>
            <Iconify icon="carbon:settings-adjust" style={{ marginRight: 8 }} />
            <Typography>Shopper information</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              padding: '2px 10px 15px 10px',
            }}
          >
            <Stack spacing={2}>
              <TextField
                fullWidth
                id="email"
                label="Email"
                variant="standard"
                value={email}
                onChange={(e) => setFieldValue('email', e.target.value)}
              />
              <TextField
                fullWidth
                id="lukapayId"
                label="LukaPay ID"
                variant="standard"
                value={lukapayId}
                onChange={(e) => setFieldValue('lukapayId', e.target.value)}
              />
              <TextField
                fullWidth
                id="reference"
                label="Reference"
                variant="standard"
                value={referencia}
                onChange={(e) => setFieldValue('referencia', e.target.value)}
              />
              {/* <FormControl variant="standard" sx={{ minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Language</InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  fullWidth
                  id="language"
                  label="Language"
                  variant="standard"
                  value={idioma}
                  onChange={(e) => setFieldValue('idioma', e.target.value)}
                >
                  <MenuItem value="esp">Spanish</MenuItem>
                  <MenuItem value="eng">English</MenuItem>
                  <MenuItem value="jpn">Japanese</MenuItem>
                </Select>
              </FormControl> */}
            </Stack>
          </AccordionDetails>
        </Accordion>

        {/* Currency Format */}
        <Accordion>
          <AccordionSummary expandIcon={<Iconify icon="bi:chevron-down" />}>
            <Iconify icon="mdi:currency-usd" style={{ marginRight: 8 }} />
            <Typography>Currency Format</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={2}>
              <TextField
                fullWidth
                id="amount"
                label="Amount"
                variant="standard"
                value={strMonto}
                onChange={(e) => setFieldValue('strMonto', e.target.value)}
              />
              <TextField
                fullWidth
                id="decimals"
                label="Number of Decimals"
                variant="standard"
                value={strDecimales}
                onChange={(e) => setFieldValue('strDecimales', e.target.value)}
              />
              <TextField
                fullWidth
                id="thousandsSeparator"
                label="Thousands Separator"
                variant="standard"
                value={sepMiles ?? ''}
                onChange={(e) => setFieldValue('sepMiles', e.target.value)}
              />
              <TextField
                fullWidth
                id="decimalSeparator"
                label="Decimal Separator"
                variant="standard"
                value={sepDecimal}
                onChange={(e) => setFieldValue('sepDecimal', e.target.value)}
              />
              <FormControl variant="standard" sx={{ minWidth: 120 }}>
                <InputLabel id="currency-label">Currency</InputLabel>
                <Select
                  labelId="currency-label"
                  fullWidth
                  id="currency"
                  label="Currency"
                  variant="standard"
                  value={moneda}
                  onChange={(e) => setFieldValue('moneda', e.target.value)}
                >
                  <MenuItem value="USD">USD</MenuItem>
                  <MenuItem value="EUR">Euro</MenuItem>
                  <MenuItem value="VES">Bolivares</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </AccordionDetails>
        </Accordion>

        {/* Styles */}
        <Accordion>
          <AccordionSummary expandIcon={<Iconify icon="bi:chevron-down" />}>
            <Iconify icon="ic:round-color-lens" style={{ marginRight: 8 }} />
            <Typography>Styles</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={2}>
              <TextField
                fullWidth
                id="color"
                label="Color"
                variant="standard"
                value={color}
                onChange={(e) => setFieldValue('color', e.target.value)}
              />
              <FormControl variant="standard" sx={{ minWidth: 120 }}>
                <InputLabel id="tabType-label">Tab Type</InputLabel>
                <Select
                  labelId="tabType-label"
                  fullWidth
                  id="tabType"
                  variant="standard"
                  value={seleccion}
                  onChange={(e) => setFieldValue('seleccion', e.target.value)}
                >
                  <MenuItem value="imagen">Image</MenuItem>
                  <MenuItem value="texto">Text</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </AccordionDetails>
        </Accordion>

        {/* Scheduled Payments Setup */}
        <Accordion>
          <AccordionSummary expandIcon={<Iconify icon="bi:chevron-down" />}>
            <Iconify icon="bx:bx-dollar-circle" style={{ marginRight: 8 }} />
            <Typography>Scheduled Payments Setup</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={2}>
              <FormControlLabel
                control={
                  <Checkbox
                    id="checkInstallments"
                    checked={checkCuotas}
                    onChange={(e) => setFieldValue('checkCuotas', e.target.checked)}
                  />
                }
                label="Installment Options"
              />
              <TextField
                fullWidth
                id="installmentEndDate"
                label="Installment End Date"
                variant="standard"
                value={fechaCuotas ?? ''}
                onChange={(e) => setFieldValue('fechaCuotas', e.target.value)}
              />
              <TextField
                fullWidth
                id="installmentFrequency"
                label="Frequency"
                variant="standard"
                value={frecuenciaCuotas}
                onChange={(e) => setFieldValue('frecuenciaCuotas', e.target.value)}
              />
              <TextField
                fullWidth
                id="installmentCount"
                label="Number of Installments"
                variant="standard"
                value={cantidadCuotas}
                onChange={(e) => setFieldValue('cantidadCuotas', e.target.value)}
              />
              <TextField
                fullWidth
                id="installmentConfigId"
                label="Installment Config ID"
                variant="standard"
                value={idConfigCuotas}
                onChange={(e) => setFieldValue('idConfigCuotas', e.target.value)}
              />
            </Stack>
          </AccordionDetails>
        </Accordion>

        {/* Advanced Settings */}
        <Accordion>
          <AccordionSummary expandIcon={<Iconify icon="bi:chevron-down" />}>
            <Iconify icon="mdi:cog-outline" style={{ marginRight: 8 }} />
            <Typography>Advanced Settings</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={2}>
              <FormControl variant="standard" sx={{ minWidth: 120 }}>
                <InputLabel id="termsType-label">Terms & Conditions Type</InputLabel>
                <Select
                  labelId="termsType-label"
                  fullWidth
                  id="termsType"
                  variant="standard"
                  value={terminos}
                  onChange={(e) => setFieldValue('terminos', e.target.value)}
                >
                  <MenuItem value="checkbox">Checkbox</MenuItem>
                  <MenuItem value="link">Link</MenuItem>
                </Select>
              </FormControl>
              <TextField
                fullWidth
                id="paymentMethods"
                label="Payment Methods"
                variant="standard"
                value={metodos}
                onChange={(e) => setFieldValue('metodos', e.target.value)}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    id="saveCard"
                    checked={guardarTarjeta}
                    onChange={(e) => setFieldValue('guardarTarjeta', e.target.checked)}
                  />
                }
                label="Save Card to Vault"
              />
            </Stack>
          </AccordionDetails>
        </Accordion>
      </Box>

      <Box
        sx={{
          position: 'sticky',
          bottom: 0,
          backgroundColor: 'white',
          zIndex: 1000,
          padding: '10px 16px',
          boxShadow: '0px -2px 4px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          gap: 3,
          justifyContent: 'space-between',
        }}
      >
        <LukaLoaderButton />
        <Button
          fullWidth
          variant="outlined"
          sx={{
            paddingX: 4,
            color: '#1E90FF',
            borderColor: '#1E90FF',
            height: 50,
          }}
        >
          Update Amount
        </Button>
      </Box>
    </Stack>
  );
}
