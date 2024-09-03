import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

import {
  Box,
  Stack,
  Slider,
  Select,
  Popover,
  MenuItem,
  Accordion,
  TextField,
  Typography,
  InputLabel,
  FormControl,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';

import { useFormStore } from 'src/store/demoFormStore';

import { Iconify } from 'src/components/iconify';
import SvgStyles from 'src/components/svg/Styles';

const StylesConfiguration: React.FC = () => {
  const { setFieldValue, estilos } = useFormStore();
  const [selectedElement, setSelectedElement] = useState('Input');
  const [colorPickerAnchor, setColorPickerAnchor] = useState<HTMLElement | null>(null);
  const [activeColorPicker, setActiveColorPicker] = useState<string | null>(null);
  const [fontUrl, setFontUrl] = useState('');

  const handleColorClick = (colorType: string) => (event: React.MouseEvent<HTMLElement>) => {
    setColorPickerAnchor(event.currentTarget);
    setActiveColorPicker(colorType);
  };

  const handleColorClose = () => {
    setColorPickerAnchor(null);
    setActiveColorPicker(null);
  };

  const handleColorChange = (color: any) => {
    const colorHex = color.hex;
    const updatedStyles = { ...estilos };

    switch (activeColorPicker) {
      case 'button':
        updatedStyles.botton = {
          ...updatedStyles.botton,
          backgroundColor: colorHex,
          color: colorHex,
        };
        break;
      case 'border':
        updatedStyles.input = {
          ...updatedStyles.input,
          borderColor: colorHex,
        };
        break;
      case 'background':
        updatedStyles.input = {
          ...updatedStyles.input,
          backgroundColor: colorHex,
        };
        break;
      case 'text':
        updatedStyles.input = {
          ...updatedStyles.input,
          color: colorHex,
        };
        break;
      default:
        break;
    }

    setFieldValue('estilos', updatedStyles);
  };

  const handleSliderChange = (type: string) => (_: any, newValue: number | number[]) => {
    const value = newValue as number;
    const updatedStyles = { ...estilos };

    switch (type) {
      case 'radius':
        updatedStyles.input = {
          ...updatedStyles.input,
          radio: value,
        };
        break;
      case 'weight':
        updatedStyles.input = {
          ...updatedStyles.input,
          weight: value,
        };
        break;
      case 'fontSize':
        updatedStyles.input = {
          ...updatedStyles.input,
          fontSize: value,
        };
        break;
      case 'height':
        updatedStyles.input = {
          ...updatedStyles.input,
          height: value,
        };
        break;
      case 'buttonHeight':
        updatedStyles.botton = {
          ...updatedStyles.botton,
          height: value,
        };
        break;
      default:
        break;
    }

    setFieldValue('estilos', updatedStyles);
  };

  const handleTextFieldChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const updatedStyles = { ...estilos };

    if (field === 'fontFamily') {
      updatedStyles.fontFamily = value;
    }

    if (field === 'fontUrl') {
      setFontUrl(value);
    }

    setFieldValue('estilos', updatedStyles);
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<Iconify icon="fluent:chevron-down-12-regular" width={17} height={17} />}
      >
        <SvgStyles
          style={{
            width: 24,
            height: 24,
            marginRight: 8,
          }}
        />
        <Typography>Styles</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack spacing={2}>
          <FormControl variant="standard" sx={{ minWidth: 120 }}>
            <InputLabel>Select element to edit</InputLabel>
            <Select
              value={selectedElement}
              onChange={(e) => setSelectedElement(e.target.value as string)}
            >
              <MenuItem value="Input">Input</MenuItem>
              <MenuItem value="Font">Font</MenuItem>
              <MenuItem value="Button">Button</MenuItem>
            </Select>
          </FormControl>

          {selectedElement === 'Button' && (
            <>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Typography variant="subtitle2" sx={{ mr: 2 }}>
                  Button Color
                </Typography>
                <Box
                  sx={{
                    width: 24,
                    height: 24,
                    bgcolor: estilos.botton?.backgroundColor || '#d3d3d3',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    border: '1px solid #000',
                  }}
                  onClick={handleColorClick('button')}
                />

                <Typography variant="subtitle2" sx={{ ml: 4 }}>
                  Text
                </Typography>
                <Box
                  sx={{
                    width: 24,
                    height: 24,
                    bgcolor: estilos.input?.color || '#d3d3d3',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    border: '1px solid #000',
                    ml: 2,
                  }}
                  onClick={handleColorClick('text')}
                />
              </Box>
              <Typography variant="subtitle2">Radius</Typography>
              <Slider
                value={estilos.input?.radio || 0}
                onChange={handleSliderChange('radius')}
                aria-labelledby="radius-slider"
                valueLabelDisplay="auto"
                min={0}
                max={20}
              />
              <Typography variant="subtitle2">Size</Typography>
              <Slider
                value={estilos.input?.fontSize || 0}
                onChange={handleSliderChange('fontSize')}
                aria-labelledby="size-slider"
                valueLabelDisplay="auto"
                min={0}
                max={30}
              />
              <Typography variant="subtitle2">Height</Typography>
              <Slider
                value={estilos.botton?.height || 0}
                onChange={handleSliderChange('buttonHeight')}
                aria-labelledby="height-slider"
                valueLabelDisplay="auto"
                min={0}
                max={30}
              />
            </>
          )}

          {selectedElement === 'Input' && (
            <>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Typography variant="subtitle2" sx={{ mr: 2 }}>
                  Border
                </Typography>
                <Box
                  sx={{
                    width: 24,
                    height: 24,
                    bgcolor: estilos.input?.borderColor || '#d3d3d3',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    border: '1px solid #000',
                  }}
                  onClick={handleColorClick('border')}
                />
                <Typography variant="subtitle2" sx={{ mx: 2 }}>
                  Background
                </Typography>
                <Box
                  sx={{
                    width: 24,
                    height: 24,
                    bgcolor: estilos.input?.backgroundColor || '#d3d3d3',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    border: '1px solid #000',
                  }}
                  onClick={handleColorClick('background')}
                />
                <Typography variant="subtitle2" sx={{ mx: 2 }}>
                  Text
                </Typography>
                <Box
                  sx={{
                    width: 24,
                    height: 24,
                    bgcolor: estilos.input?.color || '#d3d3d3',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    border: '1px solid #000',
                  }}
                  onClick={handleColorClick('text')}
                />
              </Box>
              <Typography variant="subtitle2">Radius</Typography>
              <Slider
                value={estilos.input?.radio || 0}
                onChange={handleSliderChange('radius')}
                aria-labelledby="radius-slider"
                valueLabelDisplay="auto"
                min={0}
                max={20}
              />
              <Typography variant="subtitle2">Weight</Typography>
              <Slider
                value={estilos.input?.weight || 0}
                onChange={handleSliderChange('weight')}
                aria-labelledby="weight-slider"
                valueLabelDisplay="auto"
                min={0}
                max={10}
              />
              <Typography variant="subtitle2">Text</Typography>
              <Slider
                value={estilos.input?.fontSize || 0}
                onChange={handleSliderChange('fontSize')}
                aria-labelledby="font-size-slider"
                valueLabelDisplay="auto"
                min={0}
                max={30}
              />
            </>
          )}

          {selectedElement === 'Font' && (
            <>
              <TextField
                fullWidth
                margin="normal"
                label="Font URL"
                value={fontUrl}
                onChange={handleTextFieldChange('fontUrl')}
                variant="standard"
              />
              <TextField
                fullWidth
                margin="normal"
                label="Font Family"
                value={estilos.fontFamily || ''}
                onChange={handleTextFieldChange('fontFamily')}
                variant="standard"
              />
            </>
          )}
        </Stack>
      </AccordionDetails>

      {/* Color Picker Popover */}
      <Popover
        open={Boolean(colorPickerAnchor)}
        anchorEl={colorPickerAnchor}
        onClose={handleColorClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <SketchPicker
          color={
            activeColorPicker === 'button'
              ? estilos.botton?.backgroundColor || '#d3d3d3'
              : activeColorPicker === 'border'
                ? estilos.input?.borderColor || '#d3d3d3'
                : activeColorPicker === 'background'
                  ? estilos.input?.backgroundColor || '#d3d3d3'
                  : estilos.input?.color || '#d3d3d3'
          }
          onChangeComplete={handleColorChange}
        />
      </Popover>
    </Accordion>
  );
};

export default StylesConfiguration;
