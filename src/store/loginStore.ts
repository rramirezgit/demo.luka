import { create } from 'zustand';

interface LoginData {
  token: string;
  trazaId: string;
}

interface AuthState {
  token: string;
  trazaId: string;
  loading: boolean;
  error: string | null;
  performLogin: () => Promise<void>;
  setToken: (token: string) => void;
  setTrazaId: (trazaId: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: '',
  trazaId: '',
  loading: false,
  error: null,
  setToken: (token) => set({ token }),
  setTrazaId: (trazaId) => set({ trazaId }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),

  performLogin: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data: LoginData = await response.json();
      set({ token: data.token, trazaId: data.trazaId });
    } catch (err) {
      set({ error: err instanceof Error ? err.message : 'An unknown error occurred' });
    } finally {
      set({ loading: false });
    }
  },
}));
