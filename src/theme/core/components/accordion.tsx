import type { Theme, Components } from '@mui/material/styles';

import { accordionClasses } from '@mui/material/Accordion';
import { typographyClasses } from '@mui/material/Typography';
import { accordionSummaryClasses } from '@mui/material/AccordionSummary';

// ----------------------------------------------------------------------

const MuiAccordion: Components<Theme>['MuiAccordion'] = {
  /** **************************************
   * STYLE
   *************************************** */
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: 'transparent',
      padding: 0,
      [`&.${accordionClasses.expanded}`]: {
        boxShadow: 'none',

        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.vars.palette.background.paper,
      },
      '&:before': {
        display: 'none',
      },
      [`&.${accordionClasses.disabled}`]: { backgroundColor: 'transparent' },
    }),
  },
};

// ----------------------------------------------------------------------

const MuiAccordionSummary: Components<Theme>['MuiAccordionSummary'] = {
  /** **************************************
   * STYLE
   *************************************** */
  styleOverrides: {
    root: ({ theme }) => ({
      padding: 0,
      [`&.${accordionSummaryClasses.disabled}`]: {
        opacity: 1,
        color: theme.vars.palette.action.disabled,
        [`& .${typographyClasses.root}`]: { color: 'inherit' },
      },
      /// expanded
      [`&.${accordionSummaryClasses.expanded}`]: {
        minHeight: 48,
        '& .MuiAccordionSummary-content': { margin: '5px 0' },
      },
    }),
    expandIconWrapper: { color: 'inherit' },
  },
};

// ----------------------------------------------------------------------

export const accordion = { MuiAccordion, MuiAccordionSummary };
