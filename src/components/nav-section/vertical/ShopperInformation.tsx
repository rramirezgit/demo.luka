// ShopperInformation.tsx

import React from 'react';

import {
  Stack,
  Accordion,
  TextField,
  Typography,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';

import { Iconify } from 'src/components/iconify';
import SvgShopperinfo from 'src/components/svg/Shopperinfo';

interface ShopperInformationProps {
  formStore: any;
}

const ShopperInformation: React.FC<ShopperInformationProps> = ({ formStore }) => (
  <Accordion disableGutters>
    <AccordionSummary
      expandIcon={<Iconify icon="fluent:chevron-down-12-regular" width={17} height={17} />}
    >
      <SvgShopperinfo style={{ marginRight: 8, width: 24, height: 24 }} />
      <Typography>Shopper information</Typography>
    </AccordionSummary>
    <AccordionDetails sx={{ padding: '2px 10px 15px 10px' }}>
      <Stack spacing={2}>
        <TextField
          fullWidth
          id="email"
          label="Email"
          variant="standard"
          value={formStore.email}
          onChange={(e) => formStore.setFieldValue('email', e.target.value)}
        />
        <TextField
          fullWidth
          id="lukapayId"
          label="LukaPay ID"
          variant="standard"
          value={formStore.lukapayId}
          onChange={(e) => formStore.setFieldValue('lukapayId', e.target.value)}
        />
        <TextField
          fullWidth
          id="reference"
          label="Reference"
          variant="standard"
          value={formStore.referencia}
          onChange={(e) => formStore.setFieldValue('referencia', e.target.value)}
        />
      </Stack>
    </AccordionDetails>
  </Accordion>
);

export default ShopperInformation;
