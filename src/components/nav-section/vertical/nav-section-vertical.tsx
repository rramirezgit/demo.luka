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
  Typography,
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
        {/* Datos Generales */}
        <Accordion>
          <AccordionSummary expandIcon={<Iconify icon="bi:chevron-down" />}>
            <Iconify icon="carbon:settings-adjust" style={{ marginRight: 8 }} />
            <Typography>Datos Generales</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              padding: '2px 10px 15px 10px',
            }}
          >
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
              id="referencia"
              label="Referencia"
              variant="standard"
              value={referencia}
              onChange={(e) => setFieldValue('referencia', e.target.value)}
            />
            <Select
              fullWidth
              id="idioma"
              label="Idioma"
              variant="standard"
              value={idioma}
              onChange={(e) => setFieldValue('idioma', e.target.value)}
            >
              <MenuItem value="esp">Español</MenuItem>
              <MenuItem value="eng">Inglés</MenuItem>
              <MenuItem value="jpn">Japonés</MenuItem>
            </Select>
          </AccordionDetails>
        </Accordion>

        {/* Configuración Monetaria */}
        <Accordion>
          <AccordionSummary expandIcon={<Iconify icon="bi:chevron-down" />}>
            <Iconify icon="mdi:currency-usd" style={{ marginRight: 8 }} />
            <Typography>Configuración Monetaria</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              fullWidth
              id="monto"
              label="Monto"
              variant="standard"
              value={strMonto}
              onChange={(e) => setFieldValue('strMonto', e.target.value)}
            />
            <TextField
              fullWidth
              id="decimales"
              label="Cantidad de Decimales"
              variant="standard"
              value={strDecimales}
              onChange={(e) => setFieldValue('strDecimales', e.target.value)}
            />
            <TextField
              fullWidth
              id="sepMiles"
              label="Separador Miles"
              variant="standard"
              value={sepMiles ?? ''}
              onChange={(e) => setFieldValue('sepMiles', e.target.value)}
            />
            <TextField
              fullWidth
              id="sepDecimal"
              label="Separador Decimal"
              variant="standard"
              value={sepDecimal}
              onChange={(e) => setFieldValue('sepDecimal', e.target.value)}
            />
            <Select
              fullWidth
              id="moneda"
              label="Moneda"
              variant="standard"
              value={moneda}
              onChange={(e) => setFieldValue('moneda', e.target.value)}
            >
              <MenuItem value="USD">Dólar US</MenuItem>
              <MenuItem value="EUR">Euro</MenuItem>
            </Select>
          </AccordionDetails>
        </Accordion>

        {/* Configuración de Estilo */}
        <Accordion>
          <AccordionSummary expandIcon={<Iconify icon="bi:chevron-down" />}>
            <Iconify icon="ic:round-color-lens" style={{ marginRight: 8 }} />
            <Typography>Configuración de Estilo</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              fullWidth
              id="color"
              label="Color"
              variant="standard"
              value={color}
              onChange={(e) => setFieldValue('color', e.target.value)}
            />
            <Select
              fullWidth
              id="tipoPestanas"
              variant="standard"
              label="Tipo de Pestañas"
              value={seleccion}
              onChange={(e) => setFieldValue('seleccion', e.target.value)}
            >
              <MenuItem value="imagen">Imagen</MenuItem>
              <MenuItem value="texto">Texto</MenuItem>
            </Select>
            <FormControlLabel
              control={
                <Checkbox
                  id="horizontal"
                  checked={horizontal}
                  onChange={(e) => setFieldValue('horizontal', e.target.checked)}
                />
              }
              label="Horizontal"
            />
          </AccordionDetails>
        </Accordion>

        {/* Configuración de Cuotas */}
        <Accordion>
          <AccordionSummary expandIcon={<Iconify icon="bi:chevron-down" />}>
            <Iconify icon="bx:bx-dollar-circle" style={{ marginRight: 8 }} />
            <Typography>Configuración de Cuotas</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormControlLabel
              control={
                <Checkbox
                  id="checkCuotas"
                  checked={checkCuotas}
                  onChange={(e) => setFieldValue('checkCuotas', e.target.checked)}
                />
              }
              label="Opciones de Cuotas"
            />
            <TextField
              fullWidth
              id="fechaCuotas"
              label="Fecha Final de la Cuota"
              variant="standard"
              value={fechaCuotas ?? ''}
              onChange={(e) => setFieldValue('fechaCuotas', e.target.value)}
            />
            <TextField
              fullWidth
              id="frecuenciaCuotas"
              label="Frecuencia"
              variant="standard"
              value={frecuenciaCuotas}
              onChange={(e) => setFieldValue('frecuenciaCuotas', e.target.value)}
            />
            <TextField
              fullWidth
              id="cantidadCuotas"
              label="Cantidad de Cuotas"
              variant="standard"
              value={cantidadCuotas}
              onChange={(e) => setFieldValue('cantidadCuotas', e.target.value)}
            />
            <TextField
              fullWidth
              id="idConfigCuotas"
              label="ID Config Cuotas"
              variant="standard"
              value={idConfigCuotas}
              onChange={(e) => setFieldValue('idConfigCuotas', e.target.value)}
            />
          </AccordionDetails>
        </Accordion>

        {/* Opciones Avanzadas */}
        <Accordion>
          <AccordionSummary expandIcon={<Iconify icon="bi:chevron-down" />}>
            <Iconify icon="mdi:cog-outline" style={{ marginRight: 8 }} />
            <Typography>Opciones Avanzadas</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Select
              fullWidth
              id="terminos"
              variant="standard"
              label="Tipo de Término y Condiciones"
              value={terminos}
              onChange={(e) => setFieldValue('terminos', e.target.value)}
            >
              <MenuItem value="checkbox">Checkbox</MenuItem>
              <MenuItem value="link">Link</MenuItem>
            </Select>
            <TextField
              fullWidth
              id="metodos"
              label="Métodos de Pago"
              variant="standard"
              value={metodos}
              onChange={(e) => setFieldValue('metodos', e.target.value)}
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="guardarTarjeta"
                  checked={guardarTarjeta}
                  onChange={(e) => setFieldValue('guardarTarjeta', e.target.checked)}
                />
              }
              label="Guardar Tarjeta en la Bóveda"
            />
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
          Actualizar monto
        </Button>
      </Box>
    </Stack>
  );
}
