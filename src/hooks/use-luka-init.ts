import { useFormStore } from 'src/store/demoFormStore';

const useLukaInitialization = (token: string, initialState: any) => {
  const { setLukaInitialized, horizontal } = useFormStore();

  const initializeLuka = (config: any) => {
    if (horizontal) {
      config.otherOptions.estilos.formBorder = 'none';
      config.otherOptions.estilos.borderPadding = '0px';
    }

    if (token) {
      window.luka.init(
        token,
        'container-luka-demo',
        config.montoConfig,
        config.email,
        config.trazaId,
        config.otherOptions,
        (result: any, error: any) => {
          if (error && error.Error.length > 0) {
            console.error('Error:', error);
            //   notie.alert({
            //     type: 3,
            //     text: `Ocurrió un error: ${error.Error[0].Descripcion}`,
            //   });
            alert(`Ocurrió un error: ${error.Error[0].Descripcion}`);
          } else if (result.Exitoso) {
            //   notie.alert({
            //     type: 1,
            //     text: 'Transacción exitosa',
            //   });
            alert('Transacción exitosa');
          } else {
            //   notie.alert({
            //     type: 3,
            //     text: `Transacción fallida: ${result.Descripcion}`,
            //   });
            alert(`Transacción fallida: ${result.Descripcion}`);
          }
        },
        async () => {
          if (!config.email) {
            await window.luka.updateEmail('demo@payco.net.ve', token);
          }
          console.log('validado');
          return true;
        },
        () => {
          console.log('componente cargado');
        },
        config.additionalData
      );
      console.log('luka initialized');
      setLukaInitialized(true);
    }
  };

  return initializeLuka;
};

export default useLukaInitialization;
