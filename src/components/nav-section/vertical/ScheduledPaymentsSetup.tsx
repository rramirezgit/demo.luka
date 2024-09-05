// ScheduledPaymentsSetup.tsx

import React from 'react';

import {
  Stack,
  Checkbox,
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

const ScheduledPaymentsSetup: React.FC<ScheduledPaymentsSetupProps> = ({ formStore }) => (
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
        <TextField
          fullWidth
          id="installmentEndDate"
          label="Installment End Date"
          variant="standard"
          value={formStore.fechaCuotas ?? ''}
          onChange={(e) => formStore.setFieldValue('fechaCuotas', e.target.value)}
        />
        <TextField
          fullWidth
          id="installmentFrequency"
          label="Frequency"
          variant="standard"
          value={formStore.frecuenciaCuotas}
          onChange={(e) => formStore.setFieldValue('frecuenciaCuotas', e.target.value)}
        />
        <TextField
          fullWidth
          id="installmentCount"
          label="Number of Installments"
          variant="standard"
          value={formStore.cantidadCuotas}
          onChange={(e) => formStore.setFieldValue('cantidadCuotas', e.target.value)}
        />
        <TextField
          fullWidth
          id="installmentConfigId"
          label="Installment Config ID"
          variant="standard"
          value={formStore.idConfigCuotas}
          onChange={(e) => formStore.setFieldValue('idConfigCuotas', e.target.value)}
        />
      </Stack>
    </AccordionDetails>
  </Accordion>
);

export default ScheduledPaymentsSetup;
