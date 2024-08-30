/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/button-has-type */

'use client';

import { useEffect } from 'react';

import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

import { useAuthStore } from 'src/store/loginStore';
import { useFormStore } from 'src/store/demoFormStore';

import SvgBot from 'src/components/svg/Bot';
import { SplashScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

type Props = {
  title?: string;
};

export function BlankView({ title = 'Blank' }: Props) {
  const { performLogin, loading } = useAuthStore();

  const { lukaInitialized, horizontal } = useFormStore();

  useEffect(() => {
    performLogin();
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <>
      {horizontal ? (
        <Box
          sx={{
            position: 'relative',
            width: 360, // Ajusta el ancho según tus necesidades
            height: 680, // Ajusta la altura según tus necesidades
            borderRadius: '44.06px',
            backgroundColor: '#F6F7FB',
            boxShadow: 'inset 0 0 8px rgba(0, 0, 0, 0.15), 0 10px 30px rgba(0, 0, 0, 0.1)',
            margin: 'auto', // Centrado en el contenedor padre
            mt: 5, // Margen superior
            overflow: 'hidden', // Ocultar desbordamientos
          }}
        >
          {/* Botones laterales simulados */}
          <Box
            sx={{
              position: 'absolute',
              left: -3,
              top: '20%',
              width: 6,
              height: 50,
              borderRadius: 3,
              backgroundColor: '#E0E0E0',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              left: -3,
              top: '35%',
              width: 6,
              height: 35,
              borderRadius: 3,
              backgroundColor: '#E0E0E0',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              right: -3,
              top: '30%',
              width: 6,
              height: 70,
              borderRadius: 3,
              backgroundColor: '#E0E0E0',
            }}
          />

          {/* Contenido principal */}
          <Box
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 2,
            }}
          >
            {/* Puedes colocar cualquier contenido dentro de este contenedor */}
            <Box
              sx={{
                width: '100%',
                height: '100%',
                backgroundColor: 'white',
                borderRadius: '30.06px',
                paddingTop: 9,
                paddingX: 1,
                overflow: 'scroll',
                /// ocultar barra de desplazamiento
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
              }}
            >
              {!lukaInitialized && (
                <Box
                  sx={{
                    height: '450px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <SvgBot style={{ width: 100, height: 100, color: '#ACB9C9' }} />
                  <Typography variant="h6" sx={{ mt: 2, color: '#ACB9C9' }}>
                    Start setting up your gateway
                  </Typography>
                </Box>
              )}
              <div style={{ width: '100%', height: '10%', padding: 2 }}>
                <div id="container-luka-demo" style={{ width: '100%', height: '100%' }} />
              </div>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            width: '100%',
            minHeight: 'calc(100% - 35px)',
            height: 'max-content',
            maxWidth: 886,
            borderRadius: 2,
            bgcolor: 'white',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            position: 'relative',
            mb: 5,
            mx: 'auto', // Center horizontally
          }}
        >
          {/* Barra superior */}
          <Box
            sx={{
              height: 35,
              bgcolor: '#2F363E',
              display: 'flex',
              alignItems: 'center',
              pl: 2,
            }}
          >
            <Box
              sx={{
                width: 10,
                height: 10,
                bgcolor: '#CE3E42',
                borderRadius: '50%',
                mr: 2,
              }}
            />
            <Box
              sx={{
                width: 10,
                height: 10,
                bgcolor: '#F5BF60',
                borderRadius: '50%',
                mr: 2,
              }}
            />
            <Box
              sx={{
                width: 10,
                height: 10,
                bgcolor: '#408D8E',
                borderRadius: '50%',
              }}
            />
          </Box>

          {/* Contenido principal */}
          {!lukaInitialized && (
            <Box
              sx={{
                height: '450px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <SvgBot style={{ width: 100, height: 100, color: '#ACB9C9' }} />
              <Typography variant="h6" sx={{ mt: 2, color: '#ACB9C9' }}>
                Start setting up your gateway
              </Typography>
            </Box>
          )}
          <Box id="container-luka-demo" sx={{ padding: 5 }} />
        </Box>
      )}
    </>
  );
}
