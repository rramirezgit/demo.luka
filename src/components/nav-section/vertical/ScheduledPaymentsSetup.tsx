// ScheduledPaymentsSetup.tsx

import React, { useState } from 'react';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import {
  Stack,
  Select,
  Checkbox,
  MenuItem,
  Accordion,
  TextField,
  Typography,
  AccordionSummary,
  AccordionDetails,
  FormControlLabel,
} from '@mui/material';

import { Iconify } from 'src/components/iconify';
import SvgScheduledpayments from 'src/components/svg/Scheduledpayments';

interface ScheduledPaymentsSetupProps {
  formStore: any;
}

const ScheduledPaymentsSetup: React.FC<ScheduledPaymentsSetupProps> = ({ formStore }) => {
  const [installmentPaymentType, setInstallmentPaymentType] = useState('');

  const handleInstallmentPaymentTypeChange = (newType: string) => {
    setInstallmentPaymentType(newType);

    // Reiniciar valores relacionados con las opciones de pago
    formStore.setFieldValue('fechaCuotas', null);
    formStore.setFieldValue('frecuenciaCuotas', '');
    formStore.setFieldValue('idConfigCuotas', '');
    formStore.setFieldValue('cantidadCuotas', '');
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<Iconify icon="fluent:chevron-down-12-regular" width={17} height={17} />}
      >
        <SvgScheduledpayments style={{ marginRight: 8, width: 24, height: 24 }} />
        <Typography>Scheduled Payments</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack spacing={2}>
          <FormControlLabel
            control={
              <Checkbox
                id="checkInstallments"
                checked={formStore.checkCuotas}
                onChange={(e) => formStore.setFieldValue('checkCuotas', e.target.checked)}
              />
            }
            label="Enable Scheduled Payments"
          />

          <Select
            fullWidth
            id="installmentPaymentType"
            value={installmentPaymentType}
            onChange={(e) => handleInstallmentPaymentTypeChange(e.target.value as string)}
            displayEmpty
            variant="standard"
          >
            <MenuItem value="" disabled>
              Installment Payment Type
            </MenuItem>
            <MenuItem value="dynamic">Dynamic</MenuItem>
            <MenuItem value="pre-config">Pre-Configured</MenuItem>
            <MenuItem value="fixes">Fixes</MenuItem>
          </Select>

          {installmentPaymentType === 'dynamic' && (
            <>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Installment End Date"
                  value={formStore.fechaCuotas ?? null}
                  onChange={(e) => formStore.setFieldValue('fechaCuotas', e)}
                  slots={{
                    textField: TextField,
                  }}
                  slotProps={{
                    textField: {
                      variant: 'standard',
                      fullWidth: true,
                    },
                  }}
                />
              </LocalizationProvider>

              <TextField
                select
                fullWidth
                id="installmentFrequency"
                label="Frequency"
                value={formStore.frecuenciaCuotas}
                onChange={(e) => formStore.setFieldValue('frecuenciaCuotas', e.target.value)}
                variant="standard"
              >
                <MenuItem value="15">15</MenuItem>
                <MenuItem value="30">30</MenuItem>
              </TextField>
            </>
          )}

          {installmentPaymentType === 'pre-config' && (
            <TextField
              fullWidth
              type="number"
              id="installmentConfigId"
              label="Installment Config ID"
              variant="standard"
              value={formStore.installmentConfigId}
              onChange={(e) => formStore.setFieldValue('idConfigCuotas', e.target.value)}
            />
          )}

          {installmentPaymentType === 'fixes' && (
            <>
              <TextField
                select
                fullWidth
                id="installmentFrequency"
                label="Frequency"
                value={formStore.frecuenciaCuotas}
                onChange={(e) => formStore.setFieldValue('frecuenciaCuotas', e.target.value)}
                variant="standard"
              >
                <MenuItem value="15">15</MenuItem>
                <MenuItem value="30">30</MenuItem>
              </TextField>

              <TextField
                fullWidth
                type="number"
                id="installmentNumber"
                label="Number of Installments"
                variant="standard"
                inputProps={{ min: 1, max: 10 }}
                value={formStore.cantidadCuotas}
                onChange={(e) => {
                  formStore.setFieldValue('cantidadCuotas', e.target.value);
                }}
              />
            </>
          )}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};

export default ScheduledPaymentsSetup;
