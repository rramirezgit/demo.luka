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
import StylesConfiguration from './StylesConfiguration';
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
        {/* Amount, Currency, and Payment Solutions */}
        <AmountField value={formStore.strMonto} setFieldValue={formStore.setFieldValue} />
        <CurrencySelect value={formStore.moneda} setFieldValue={formStore.setFieldValue} />
        <PaymentMethodsSelect setFieldValue={formStore.setFieldValue} />

        {/* General Settings and Currency Format */}
        {/* Aquí podrías agregar una sección de configuraciones generales si es necesario */}
        {/* Currency Format podría estar aquí si lo manejas como una sección específica */}

        {/* Styles Configuration */}
        <StylesConfiguration />

        {/* Shopper Information */}
        <ShopperInformation formStore={formStore} />

        {/* Scheduled Payments Setup */}
        <ScheduledPaymentsSetup formStore={formStore} />

        {/* Advanced Settings */}
        <AdvancedSettings formStore={formStore} />
      </Box>
    </Stack>
  );
};
