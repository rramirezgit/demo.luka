import { create } from 'zustand';
import isEqual from 'lodash/isEqual'; // Importa lodash para comparar objetos

interface CuotasConfig {
  fechaFinal: string | null;
  tipoPagoCuota: string;
  frecuencia: string;
  cantidadCuota: string;
  idConfig: string;
}

export interface Estilos {
  color?: string;
  input?: {
    borderColor?: string;
    backgroundColor?: string;
    color?: string;
    fontSize?: number;
    radio?: number;
    height?: number;
    weight?: number;
  };
  botton?: {
    backgroundColor?: string;
    color?: string;
    radio?: number;
    fontSize?: number;
    height?: number;
  };
  fontFamily?: string;
  borderPadding?: string;
  formBorder?: string;
  carrusel?: {
    borderRadius?: number;
    border?: string;
    borderColor?: string;
    boxShadow?: string;
  };
}

export interface FormState {
  lukaInitialized: boolean;
  strMonto: string;
  horizontalLayout: boolean;
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
  moneda: string;
  horizontal: boolean;
  estilos: Estilos;
  isModified: boolean;
  setErrors: (field: keyof FormState, value: string) => void;
  setFieldValue: (field: keyof FormState, value: any) => void;
  resetStore: () => void;
  validateAndSetMonto: () => boolean;
  setLukaInitialized: (value: boolean) => void;
  checkIfModified: () => void; // Agrega checkIfModified a la interfaz
  errors: {
    strMonto?: string;
    strDecimales?: string;
    color?: string;
    terminos?: string;
    metodos?: string;
    sepDecimal?: string;
    sepMiles?: string;
    seleccion?: string;
    email?: string;
    trazaId?: string;
    lukapayId?: string;
    referencia?: string;
    fechaCuotas?: string;
    tipoPagoCuota?: string;
    frecuenciaCuotas?: string;
    cantidadCuotas?: string;
    idConfigCuotas?: string;
    moneda?: string;
  };
}

const initialState: Omit<
  FormState,
  | 'setFieldValue'
  | 'resetStore'
  | 'validateAndSetMonto'
  | 'setLukaInitialized'
  | 'isModified'
  | 'checkIfModified'
  | 'setErrors'
> = {
  errors: {},
  horizontalLayout: false,
  lukaInitialized: false,
  strMonto: '',
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
  moneda: 'USD',
  horizontal: false,
  estilos: {
    color: '#0516b1',
    input: {
      borderColor: '#ced4da',
      backgroundColor: 'white',
      color: 'black',
      fontSize: 12,
      radio: 10,
      height: 40,
      weight: 1,
    },
    botton: {
      backgroundColor: '#0516b1',
      color: 'white',
      radio: 10,
      fontSize: 16,
      height: 50,
    },
    fontFamily: 'Montserrat',
    borderPadding: '1.5rem',
    formBorder: 'solid 1px #dedddd',
    carrusel: {
      borderRadius: 10,
      border: '1px solid',
      borderColor: '#dedddd',
      boxShadow: 'none',
    },
  },
};

export const useFormStore = create<FormState>((set, get) => ({
  ...initialState,
  isModified: false,
  setErrors: (field, value) => {
    set((state) => ({ ...state, errors: { ...state.errors, [field]: value } }));
  },
  setFieldValue: (field, value) => {
    set((state) => ({ ...state, [field]: value }));
    get().checkIfModified(); // Llama a checkIfModified después de cambiar el estado
  },
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
    get().checkIfModified(); // Llama a checkIfModified después de cambiar el estado
    return true;
  },
  setLukaInitialized: (value: boolean) => {
    set({ lukaInitialized: value });
    get().checkIfModified(); // Llama a checkIfModified después de cambiar el estado
  },
  resetStore: () => {
    set(initialState);
    set({ isModified: false }); // Resetea isModified a false
  },
  checkIfModified: () => {
    const currentState = get();
    const isModified = !isEqual(currentState, {
      ...initialState,
      isModified: currentState.isModified,
    });
    set({ isModified });
  },
}));
