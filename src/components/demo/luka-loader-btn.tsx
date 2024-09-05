/* eslint-disable react-hooks/exhaustive-deps */

import { LoadingButton } from '@mui/lab';

import useLukaInitialization from 'src/hooks/use-luka-init';

import { useAuthStore } from 'src/store/loginStore';
import { useFormStore } from 'src/store/demoFormStore';

export function LukaLoaderButton() {
  const { token, trazaId } = useAuthStore();

  const {
    setLukaInitialized,
    strMonto,
    strDecimales,
    color,
    email,
    moneda,
    seleccion,
    terminos,
    estilos,
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
        ...estilos,
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
    console.log('horizontal', horizontal);
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
          ...estilos,
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
    <LoadingButton
      fullWidth
      id="luka-loader-btn"
      color="primary"
      sx={{
        height: 50,
      }}
      variant="contained"
      onClick={handleLoadClick}
    >
      Load Demo
    </LoadingButton>
  );
}
