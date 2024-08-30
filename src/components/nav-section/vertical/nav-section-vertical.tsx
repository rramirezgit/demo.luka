// NavSectionVertical.tsx
import React from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';

import { useFormStore } from 'src/store/demoFormStore';

import AmountField from './AmountField';
import CurrencySelect from './CurrencySelect';
import { navSectionCssVars } from '../css-vars';
import AdvancedSettings from './AdvancedSettings';
import ShopperInformation from './ShopperInformation';
import PaymentMethodsSelect from './PaymentMethodsSelect';
import ScheduledPaymentsSetup from './ScheduledPaymentsSetup';

import type { NavSectionProps } from '../types';

export const NavSectionVertical: React.FC<NavSectionProps> = ({
  sx,
  data,
  render,
  slotProps,
  enabledRootRedirect,
  cssVars: overridesVars,
}) => {
  const theme = useTheme();
  const cssVars = {
    ...navSectionCssVars.vertical(theme),
    ...overridesVars,
  };

  const formStore = useFormStore();

  return (
    <Stack sx={{ ...cssVars, ...sx }}>
      <Box sx={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <AmountField value={formStore.strMonto} setFieldValue={formStore.setFieldValue} />
        <CurrencySelect value={formStore.moneda} setFieldValue={formStore.setFieldValue} />
        <PaymentMethodsSelect value={formStore.metodos} setFieldValue={formStore.setFieldValue} />
        <ShopperInformation formStore={formStore} />
        {/* <StylesConfiguration /> */}
        <ScheduledPaymentsSetup formStore={formStore} />
        <AdvancedSettings formStore={formStore} />
      </Box>
    </Stack>
  );
};
