// AdvancedSettings.tsx

import React from 'react';

import {
  Stack,
  Select,
  MenuItem,
  Checkbox,
  Accordion,
  Typography,
  InputLabel,
  FormControl,
  AccordionSummary,
  AccordionDetails,
  FormControlLabel,
} from '@mui/material';

import { Iconify } from 'src/components/iconify';
import SvgAdvancedsettings from 'src/components/svg/Advancedsettings';

interface AdvancedSettingsProps {
  formStore: any;
}

const AdvancedSettings: React.FC<AdvancedSettingsProps> = ({ formStore }) => (
  <Accordion>
    <AccordionSummary
      expandIcon={<Iconify icon="fluent:chevron-down-12-regular" width={17} height={17} />}
    >
      <SvgAdvancedsettings style={{ marginRight: 8, width: 24, height: 24 }} />
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
            value={formStore.terminos}
            onChange={(e) => formStore.setFieldValue('terminos', e.target.value)}
          >
            <MenuItem value="checkbox">Checkbox</MenuItem>
            <MenuItem value="link">Link</MenuItem>
          </Select>
        </FormControl>
        <FormControlLabel
          control={
            <Checkbox
              id="saveCard"
              checked={formStore.guardarTarjeta}
              onChange={(e) => formStore.setFieldValue('guardarTarjeta', e.target.checked)}
            />
          }
          label="Save Card to Vault"
        />
      </Stack>
    </AccordionDetails>
  </Accordion>
);

export default AdvancedSettings;
