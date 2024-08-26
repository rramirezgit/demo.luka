import React, { useState, useEffect } from 'react';

import { styled } from '@mui/material/styles';
import { Box, IconButton } from '@mui/material';

import { CONFIG } from 'src/config-global';
import { useFormStore } from 'src/store/demoFormStore';

import { Iconify } from '../iconify';

const ToggleContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '300px',
  margin: '0 auto',
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
}));

const Divider = styled('div')(({ theme }) => ({
  width: '1px',
  height: '40px',
  backgroundColor: theme.palette.divider,
  margin: theme.spacing(0, 2),
}));

const ToggleButton = () => {
  const [selected, setSelected] = useState<'mobile' | 'desktop'>('desktop');

  const { setFieldValue, horizontal } = useFormStore();
  const { urlCdn } = CONFIG;
  const handleToggle = (option: 'mobile' | 'desktop') => {
    setSelected(option);
    const isHorizontal = option === 'mobile';
    setFieldValue('horizontal', isHorizontal);
    const html = document.getElementById('container-luka-demo');
    if (html) {
      html.innerHTML = '';
    }
  };

  useEffect(() => {
    setTimeout(() => {
      // document.getElementById('luka-loader-btn')?.click();
    }, 1000);
  }, [horizontal]);

  return (
    <ToggleContainer>
      <IconButton
        onClick={() => handleToggle('desktop')}
        color={selected === 'desktop' ? 'primary' : 'default'}
      >
        <Iconify icon="mdi:monitor" />
      </IconButton>
      <Divider />
      <IconButton
        onClick={() => handleToggle('mobile')}
        color={selected === 'mobile' ? 'primary' : 'default'}
      >
        <Iconify icon="mdi:cellphone" />
      </IconButton>
    </ToggleContainer>
  );
};

export default ToggleButton;
