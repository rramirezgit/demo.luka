/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/button-has-type */

'use client';

import { useEffect } from 'react';

import Box from '@mui/material/Box';
import { Stack, Button, Typography } from '@mui/material';

import { useResponsive } from 'src/hooks/use-responsive';

import { useAuthStore } from 'src/store/loginStore';
import { useFormStore } from 'src/store/demoFormStore';

import SvgBot from 'src/components/svg/Bot';
import { IPhoneFrame } from 'src/components/demo/iphone';

// ----------------------------------------------------------------------

type Props = {
  title?: string;
  token?: string;
  trazaId?: string;
};

export function BlankView({ title = 'Blank', token = '', trazaId = '' }: Props) {
  const { setToken, setTrazaId } = useAuthStore();
  const { lukaInitialized, horizontalLayout, resetStore } = useFormStore();

  const smUp = useResponsive('up', 'sm');
  useEffect(() => {
    if (token.length > 0 && trazaId.length > 0) {
      setToken(token);
      setTrazaId(trazaId);
    }
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingLeft: { xs: '16px', sm: '40px' },
        paddingRight: { xs: '16px', sm: '40px' },
      }}
    >
      {horizontalLayout ? (
        <IPhoneFrame>
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
          <div style={{ width: '100%', padding: 2 }}>
            <div id="container-luka-demo" style={{ width: '100%', height: '100%' }} />
          </div>
        </IPhoneFrame>
      ) : (
        <Box
          sx={{
            width: '100%',
            height: 'calc(100vh - 25vh)',
            maxWidth: '100%',
            mt: 5,
            borderRadius: 1,
            bgcolor: 'white',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            position: 'relative',
            mx: 'auto',
            mb: 5,
          }}
        >
          {/* Barra superior con el nuevo SVG, los botones de colores y los iconos */}
          {smUp && (
            <Box
              component="svg"
              viewBox="0 0 1280 53"
              sx={{ width: '100%', height: 'auto', maxWidth: '100%' }}
              fill="none"
            >
              <g filter="url(#filter0_iiii_1037_167)">
                <path fill="#191C1F" d="M0 0H1280V53H0V0Z" />

                {/* Botones de colores */}
                <circle cx="27" cy="26" r="8" fill="#EE6A5F" />
                <circle cx="57" cy="26" r="8" fill="#F5BD4F" />
                <circle cx="87" cy="26" r="8" fill="#61C454" />

                <text
                  x="50%"
                  y="50%"
                  fill="#999C9F"
                  fontSize="1.5vw"
                  fontFamily="Arial"
                  dy=".3em"
                  textAnchor="middle"
                >
                  Luka
                </text>

                <g clipPath="url(#clip0_1037_167)">
                  <path
                    d="M1128.5 34.4736C1133.13 34.4736 1136.97 30.6304 1136.97 26.0068C1136.97 21.375 1133.12 17.54 1128.49 17.54C1123.87 17.54 1120.03 21.375 1120.03 26.0068C1120.03 30.6304 1123.88 34.4736 1128.5 34.4736ZM1128.5 33.0625C1124.58 33.0625 1121.45 29.9248 1121.45 26.0068C1121.45 22.0889 1124.57 18.9512 1128.49 18.9512C1132.41 18.9512 1135.55 22.0889 1135.56 26.0068C1135.56 29.9248 1132.42 33.0625 1128.5 33.0625ZM1128.5 21.7817C1128.14 21.7817 1127.88 22.0391 1127.88 22.4043V26.5547L1127.94 28.3062L1127.11 27.3101L1126.13 26.314C1126.01 26.2061 1125.86 26.1313 1125.69 26.1313C1125.35 26.1313 1125.09 26.397 1125.09 26.729C1125.09 26.9033 1125.14 27.0527 1125.25 27.1606L1128.02 29.9248C1128.18 30.0908 1128.33 30.1572 1128.5 30.1572C1128.68 30.1572 1128.83 30.0825 1128.99 29.9248L1131.75 27.1606C1131.86 27.0527 1131.93 26.9033 1131.93 26.729C1131.93 26.397 1131.66 26.1313 1131.32 26.1313C1131.14 26.1313 1130.99 26.1978 1130.88 26.314L1129.9 27.3101L1129.06 28.3145L1129.12 26.5547V22.4043C1129.12 22.0391 1128.87 21.7817 1128.5 21.7817Z"
                    fill="#999C9F"
                  />
                  <path
                    d="M1169.5 28.2646C1169.86 28.2646 1170.16 27.9658 1170.16 27.6172V19.0923L1170.11 17.8472L1170.67 18.4365L1171.92 19.7812C1172.04 19.9141 1172.21 19.9805 1172.37 19.9805C1172.72 19.9805 1172.98 19.7314 1172.98 19.3911C1172.98 19.2168 1172.91 19.084 1172.79 18.9595L1169.98 16.2534C1169.82 16.0874 1169.67 16.0293 1169.5 16.0293C1169.33 16.0293 1169.18 16.0874 1169.02 16.2534L1166.21 18.9595C1166.09 19.084 1166.01 19.2168 1166.01 19.3911C1166.01 19.7314 1166.27 19.9805 1166.61 19.9805C1166.78 19.9805 1166.95 19.9141 1167.07 19.7812L1168.33 18.4365L1168.89 17.8472L1168.84 19.0923V27.6172C1168.84 27.9658 1169.14 28.2646 1169.5 28.2646ZM1164.74 34.7642H1174.26C1175.99 34.7642 1176.86 33.9009 1176.86 32.1909V23.9067C1176.86 22.1968 1175.99 21.3335 1174.26 21.3335H1171.94V22.6699H1174.23C1175.05 22.6699 1175.53 23.1182 1175.53 23.9814V32.1162C1175.53 32.9795 1175.05 33.4277 1174.23 33.4277H1164.75C1163.92 33.4277 1163.47 32.9795 1163.47 32.1162V23.9814C1163.47 23.1182 1163.92 22.6699 1164.75 22.6699H1167.05V21.3335H1164.74C1163 21.3335 1162.13 22.1968 1162.13 23.9067V32.1909C1162.13 33.9009 1163 34.7642 1164.74 34.7642Z"
                    fill="#999C9F"
                  />
                  <path
                    d="M1210.5 33.0044C1210.91 33.0044 1211.25 32.6807 1211.25 32.2822V26.7622H1216.61C1217.01 26.7622 1217.35 26.4219 1217.35 26.0151C1217.35 25.6084 1217.01 25.2764 1216.61 25.2764H1211.25V19.748C1211.25 19.3496 1210.91 19.0259 1210.5 19.0259C1210.09 19.0259 1209.76 19.3496 1209.76 19.748V25.2764H1204.39C1203.99 25.2764 1203.65 25.6084 1203.65 26.0151C1203.65 26.4219 1203.99 26.7622 1204.39 26.7622H1209.76V32.2822C1209.76 32.6807 1210.09 33.0044 1210.5 33.0044Z"
                    fill="#999C9F"
                  />
                  <path
                    d="M1245.32 30.8711H1246.74V32.1411C1246.74 33.8511 1247.61 34.7144 1249.35 34.7144H1257.68C1259.41 34.7144 1260.28 33.8511 1260.28 32.1411V23.7407C1260.28 22.0308 1259.41 21.1675 1257.68 21.1675H1256.26V19.8975C1256.26 18.1875 1255.38 17.3242 1253.66 17.3242H1245.32C1243.58 17.3242 1242.72 18.1875 1242.72 19.8975V28.2979C1242.72 30.0078 1243.58 30.8711 1245.32 30.8711ZM1245.34 29.5347C1244.51 29.5347 1244.05 29.0864 1244.05 28.2231V19.9722C1244.05 19.1089 1244.51 18.6606 1245.34 18.6606H1253.63C1254.46 18.6606 1254.92 19.1089 1254.92 19.9722V21.1675H1249.35C1247.61 21.1675 1246.74 22.0225 1246.74 23.7407V29.5347H1245.34ZM1249.37 33.3779C1248.54 33.3779 1248.08 32.9297 1248.08 32.0664V23.8154C1248.08 22.9521 1248.54 22.5039 1249.37 22.5039H1257.66C1258.48 22.5039 1258.95 22.9521 1258.95 23.8154V32.0664C1258.95 32.9297 1258.48 33.3779 1257.66 33.3779H1249.37Z"
                    fill="#999C9F"
                  />
                </g>
              </g>
            </Box>
          )}

          {/* Contenido principal con desplazamiento */}
          <Box
            sx={{
              height: 'calc(100% - 53px)', // Resta la altura de la barra superior
              overflowY: 'auto', // Habilita el scroll vertical
              // Estilos de desplazamiento similar al de Apple
              scrollbarWidth: 'thin',
              scrollbarColor: '#C0C0C0 transparent', // Color del scroll
              '&::-webkit-scrollbar': {
                width: '8px', // Anchura de la barra de desplazamiento
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#C0C0C0', // Color del thumb
                borderRadius: '4px', // Bordes redondeados
              },
              '&::-webkit-scrollbar-thumb:hover': {
                backgroundColor: '#A0A0A0', // Color del thumb al pasar el ratón
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: 'transparent', // Color de la pista del scroll
              },
            }}
          >
            {!lukaInitialized && (
              <Box
                sx={{
                  height: '90%',
                  display: 'flex',
                  backgroundColor: 'white',
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
            <Box id="container-luka-demo" sx={{ padding: lukaInitialized ? 3 : 0 }} />
          </Box>
        </Box>
      )}
      <Stack
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Button
          variant="text"
          color="primary"
          onClick={() => {
            const lib = document.querySelector('#container-luka-demo');
            if (lib) {
              lib.innerHTML = '';
            }
            resetStore();
          }}
        >
          Clear All
        </Button>
      </Stack>
    </Box>
  );
}
