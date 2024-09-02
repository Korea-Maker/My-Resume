import { createStore } from 'zustand';

const authStore = (set) => ({
  token: null,
  authorized: false,
  setToken: (token) => set({ token, authorized: !!token }),
  clearToken: () => set({ token: null, authorized: false }),
  setAuthorized: (authorized) => set({ authorized }),
});

const useAuthStore = createStore(authStore);

export default useAuthStore;
