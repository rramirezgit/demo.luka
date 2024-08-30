import { create } from 'zustand';

interface CuotasConfig {
  fechaFinal: string | null;
  tipoPagoCuota: string;
  frecuencia: string;
  cantidadCuota: string;
  idConfig: string;
}

interface FormState {
  lukaInitialized: boolean;
  strMonto: string;
  idioma: 'esp' | 'eng' | 'jpn';
  strDecimales: string;
  color: string;
  terminos: string;
  metodos: string;
  sepDecimal: string;
  sepMiles: string | null;
  seleccion: string;
  guardarTarjeta: boolean;
  email: string;
  trazaId: string;
  lukapayId: string;
  referencia: string;
  checkCuotas: boolean;
  fechaCuotas: string | null;
  tipoPagoCuota: string;
  frecuenciaCuotas: string;
  cantidadCuotas: string;
  idConfigCuotas: string;
  objCuotasConfig: CuotasConfig | null;
  moneda: string; // Nueva variable
  horizontal: boolean; // Nueva variable
  setFieldValue: (field: keyof FormState, value: any) => void;
  validateAndSetMonto: () => boolean;
  setLukaInitialized: (value: boolean) => void;
}

export const useFormStore = create<FormState>((set, get) => ({
  lukaInitialized: false,
  strMonto: '18.03',
  idioma: 'eng',
  strDecimales: '',
  color: '',
  terminos: '',
  metodos: '',
  sepDecimal: '',
  sepMiles: null,
  seleccion: '',
  guardarTarjeta: false,
  email: '',
  trazaId: '1234567890',
  lukapayId: '',
  referencia: '',
  checkCuotas: false,
  fechaCuotas: null,
  tipoPagoCuota: '',
  frecuenciaCuotas: '',
  cantidadCuotas: '',
  idConfigCuotas: '',
  objCuotasConfig: null,
  moneda: 'USD', // Valor predeterminado para la moneda
  horizontal: false, // Valor predeterminado para la disposición horizontal

  setFieldValue: (field, value) => set({ [field]: value }),

  validateAndSetMonto: () => {
    const { strMonto, guardarTarjeta } = get();
    if (!strMonto) {
      alert('Monto inválido');
      return false;
    }
    const monto = parseFloat(strMonto);
    if (!monto && !guardarTarjeta) {
      alert('Monto inválido');
      return false;
    }
    set({ strMonto: monto.toString() });
    return true;
  },

  setLukaInitialized: (value: boolean) => set({ lukaInitialized: value }),
}));
