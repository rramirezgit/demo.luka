// ActionFooter.tsx
import React from 'react';

import { Box, Button } from '@mui/material';

import { LukaLoaderButton } from 'src/components/demo/luka-loader-btn';

interface ActionFooterProps {
  buttonColor: string;
}

const ActionFooter: React.FC<ActionFooterProps> = ({ buttonColor }) => (
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
        color: buttonColor,
        borderColor: buttonColor,
        height: 50,
      }}
    >
      Update Amount
    </Button>
  </Box>
);

export default ActionFooter;
