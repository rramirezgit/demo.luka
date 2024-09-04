import React, { useState, useEffect } from 'react';

import { styled } from '@mui/material/styles';
import { Box, IconButton } from '@mui/material';

import { CONFIG } from 'src/config-global';
import { useFormStore } from 'src/store/demoFormStore';

import SvgCel from '../svg/Cel';
import SvgDesktop from '../svg/Desktop';

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

  const { setFieldValue, horizontalLayout, lukaInitialized } = useFormStore();
  const { urlCdn } = CONFIG;
  const handleToggle = (option: 'mobile' | 'desktop') => {
    setSelected(option);
    const isHorizontal = option === 'mobile';
    setFieldValue('horizontalLayout', isHorizontal);
    const html = document.getElementById('container-luka-demo');
    if (html) {
      html.innerHTML = '';
    }
  };

  useEffect(() => {
    if (lukaInitialized) {
      setTimeout(() => {
        document.getElementById('luka-loader-btn')?.click();
      }, 100);
    }
  }, [horizontalLayout, lukaInitialized]);

  return (
    <ToggleContainer>
      <IconButton
        onClick={() => handleToggle('desktop')}
        color={selected === 'desktop' ? 'primary' : 'default'}
      >
        <SvgDesktop
          style={{
            width: '24px',
            height: '24px',
            color: selected === 'desktop' ? '#3b82f6' : '#2F363E',
          }}
        />
      </IconButton>
      <Divider />
      <IconButton
        onClick={() => handleToggle('mobile')}
        color={selected === 'mobile' ? 'primary' : 'default'}
      >
        <SvgCel
          style={{
            width: '24px',
            height: '24px',
            color: selected === 'mobile' ? '#3b82f6' : '#2F363E',
          }}
        />
      </IconButton>
    </ToggleContainer>
  );
};

export default ToggleButton;
