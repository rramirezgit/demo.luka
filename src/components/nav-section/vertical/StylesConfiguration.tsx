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

import { Styles } from 'src/components/svg';
import { Iconify } from 'src/components/iconify';

const StylesConfiguration: React.FC = () => {
  const [buttonColor, setButtonColor] = useState('#d3d3d3');
  const [selectedElement, setSelectedElement] = useState('Input');
  const [borderColor, setBorderColor] = useState('#d3d3d3');
  const [backgroundColor, setBackgroundColor] = useState('#d3d3d3');
  const [textColor, setTextColor] = useState('#d3d3d3');
  const [radius, setRadius] = useState(0);
  const [weight, setWeight] = useState(0);
  const [fontSize, setFontSize] = useState(0);
  const [buttonHeight, setButtonHeight] = useState(0);
  const [fontUrl, setFontUrl] = useState('font.google.com');
  const [fontFamily, setFontFamily] = useState('Font');
  const [colorPickerAnchor, setColorPickerAnchor] = useState<HTMLElement | null>(null);
  const [activeColorPicker, setActiveColorPicker] = useState<string | null>(null);

  const handleColorClick = (colorType: string) => (event: React.MouseEvent<HTMLElement>) => {
    setColorPickerAnchor(event.currentTarget);
    setActiveColorPicker(colorType);
  };

  const handleColorClose = () => {
    setColorPickerAnchor(null);
    setActiveColorPicker(null);
  };

  const handleColorChange = (color: any) => {
    switch (activeColorPicker) {
      case 'button':
        setButtonColor(color.hex);
        break;
      case 'border':
        setBorderColor(color.hex);
        break;
      case 'background':
        setBackgroundColor(color.hex);
        break;
      case 'text':
        setTextColor(color.hex);
        break;
      default:
        break;
    }
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<Iconify icon="fluent:chevron-down-12-regular" width={17} height={17} />}
      >
        <Styles
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
            <InputLabel>Selecciona que elemento editar</InputLabel>
            <Select
              value={selectedElement}
              onChange={(e) => setSelectedElement(e.target.value as string)}
            >
              <MenuItem value="Input">Input</MenuItem>
              <MenuItem value="Font">Font</MenuItem>
              <MenuItem value="Button">Botón</MenuItem>
            </Select>
          </FormControl>

          {selectedElement === 'Button' && (
            <>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Typography variant="subtitle2" sx={{ mr: 2 }}>
                  Color de botón
                </Typography>
                <Box
                  sx={{
                    width: 24,
                    height: 24,
                    bgcolor: buttonColor,
                    borderRadius: '50%',
                    cursor: 'pointer',
                    border: '1px solid #000',
                  }}
                  onClick={handleColorClick('button')}
                />
                <Typography variant="subtitle2" sx={{ ml: 4 }}>
                  Color
                </Typography>
                <Box
                  sx={{
                    width: 24,
                    height: 24,
                    bgcolor: buttonColor,
                    borderRadius: '50%',
                    cursor: 'pointer',
                    border: '1px solid #000',
                    ml: 2,
                  }}
                  onClick={handleColorClick('button')}
                />
                <Typography variant="subtitle2" sx={{ ml: 4 }}>
                  Texto
                </Typography>
                <Box
                  sx={{
                    width: 24,
                    height: 24,
                    bgcolor: textColor,
                    borderRadius: '50%',
                    cursor: 'pointer',
                    border: '1px solid #000',
                    ml: 2,
                  }}
                  onClick={handleColorClick('text')}
                />
              </Box>
              <Typography variant="subtitle2">Radio</Typography>
              <Slider
                value={radius}
                onChange={(_, newValue) => setRadius(newValue as number)}
                aria-labelledby="radius-slider"
                valueLabelDisplay="auto"
                min={0}
                max={20}
              />
              <Typography variant="subtitle2">Size</Typography>
              <Slider
                value={fontSize}
                onChange={(_, newValue) => setFontSize(newValue as number)}
                aria-labelledby="size-slider"
                valueLabelDisplay="auto"
                min={0}
                max={30}
              />
              <Typography variant="subtitle2">Alto</Typography>
              <Slider
                value={buttonHeight}
                onChange={(_, newValue) => setButtonHeight(newValue as number)}
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
                  Borde
                </Typography>
                <Box
                  sx={{
                    width: 24,
                    height: 24,
                    bgcolor: borderColor,
                    borderRadius: '50%',
                    cursor: 'pointer',
                    border: '1px solid #000',
                  }}
                  onClick={handleColorClick('border')}
                />
                <Typography variant="subtitle2" sx={{ mx: 2 }}>
                  Fondo
                </Typography>
                <Box
                  sx={{
                    width: 24,
                    height: 24,
                    bgcolor: backgroundColor,
                    borderRadius: '50%',
                    cursor: 'pointer',
                    border: '1px solid #000',
                  }}
                  onClick={handleColorClick('background')}
                />
                <Typography variant="subtitle2" sx={{ mx: 2 }}>
                  Texto
                </Typography>
                <Box
                  sx={{
                    width: 24,
                    height: 24,
                    bgcolor: textColor,
                    borderRadius: '50%',
                    cursor: 'pointer',
                    border: '1px solid #000',
                  }}
                  onClick={handleColorClick('text')}
                />
              </Box>
              <Typography variant="subtitle2">Radio</Typography>
              <Slider
                value={radius}
                onChange={(_, newValue) => setRadius(newValue as number)}
                aria-labelledby="radius-slider"
                valueLabelDisplay="auto"
                min={0}
                max={20}
              />
              <Typography variant="subtitle2">Weight</Typography>
              <Slider
                value={weight}
                onChange={(_, newValue) => setWeight(newValue as number)}
                aria-labelledby="weight-slider"
                valueLabelDisplay="auto"
                min={0}
                max={10}
              />
              <Typography variant="subtitle2">Texto</Typography>
              <Slider
                value={fontSize}
                onChange={(_, newValue) => setFontSize(newValue as number)}
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
                onChange={(e) => setFontUrl(e.target.value)}
                variant="standard"
              />
              <TextField
                fullWidth
                margin="normal"
                label="Font Family"
                value={fontFamily}
                onChange={(e) => setFontFamily(e.target.value)}
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
              ? buttonColor
              : activeColorPicker === 'border'
                ? borderColor
                : activeColorPicker === 'background'
                  ? backgroundColor
                  : textColor
          }
          onChangeComplete={handleColorChange}
        />
      </Popover>
    </Accordion>
  );
};

export default StylesConfiguration;
