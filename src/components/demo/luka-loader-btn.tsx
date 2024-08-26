/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import { Button } from '@mui/material';

import useLukaInitialization from 'src/hooks/use-luka-init';

import { useAuthStore } from 'src/store/loginStore';
import { useFormStore } from 'src/store/demoFormStore';

export function LukaLoaderButton() {
  const { performLogin, token, trazaId, loading } = useAuthStore();

  const {
    setLukaInitialized,
    strMonto,
    strDecimales,
    color,
    email,
    moneda,
    seleccion,
    terminos,
    idioma,
    metodos,
    sepDecimal,
    sepMiles,
    guardarTarjeta,
    checkCuotas,
    horizontal,
    fechaCuotas,
    frecuenciaCuotas,
    cantidadCuotas,
    idConfigCuotas,
    lukapayId,
    referencia,
  } = useFormStore();

  useEffect(() => {
    performLogin();
  }, []);

  const initializeLuka = useLukaInitialization(token, {
    montoConfig: {
      monto: parseFloat(strMonto),
      numeroDecimales: strDecimales || null,
      separadorMiles: sepMiles,
      separadorDecimal: sepDecimal,
    },
    email,
    trazaId,
    otherOptions: {
      formBorde: false,
      moneda,
      terminos: {},
      idioma,
      color,
      metodos,
      paypal: {
        color: 'gold',
      },
      fuente: 'Montserrat',
      seleccion: seleccion === 'imagen' ? 1 : 2,
      showSkeletonLoading: true,
      fnValidacionEsAsync: true,
      guardarEnBoveda: guardarTarjeta,
      horizontal,
      estilos: {
        color: '#0516B1',
      },
    },
    additionalData: {
      nombrePagador: 'Juan Leung',
      referenciaPago: referencia,
      lukapayId,
      cuotasConfig: checkCuotas
        ? {
            fechaFinal: fechaCuotas,
            frecuencia: frecuenciaCuotas,
            cantidadCuota: cantidadCuotas,
            idConfig: idConfigCuotas,
          }
        : null,
    },
  });

  const handleLoadClick = (e: React.MouseEvent) => {
    setLukaInitialized(false);
    initializeLuka({
      montoConfig: {
        monto: parseFloat(strMonto),
        numeroDecimales: strDecimales || null,
        separadorMiles: sepMiles,
        separadorDecimal: sepDecimal,
      },
      email,
      trazaId,
      otherOptions: {
        formBorde: false,
        moneda,
        terminos: {},
        idioma,
        color,
        metodos,
        paypal: {
          color: 'gold',
        },
        fuente: 'Montserrat',
        seleccion: seleccion === 'imagen' ? 1 : 2,
        showSkeletonLoading: true,
        fnValidacionEsAsync: true,
        guardarEnBoveda: guardarTarjeta,
        horizontal,
        estilos: {
          color: '#0516B1',
        },
      },
      additionalData: {
        nombrePagador: 'Juan Leung',
        referenciaPago: referencia,
        lukapayId,
        cuotasConfig: checkCuotas
          ? {
              fechaFinal: fechaCuotas,
              frecuencia: frecuenciaCuotas,
              cantidadCuota: cantidadCuotas,
              idConfig: idConfigCuotas,
            }
          : null,
      },
    });
  };

  return (
    <Button
      fullWidth
      color="primary"
      sx={{
        height: 50,
      }}
      variant="contained"
      onClick={handleLoadClick}
    >
      Cargar Luka
    </Button>
  );
}
