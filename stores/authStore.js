import create from 'zustand';
import cookies from 'js-cookie';

const useAuthStore = create((set) => ({
  token: null,  // Initialize token in memory, but not persisted
  authorized: false,

  setToken: (newToken) => {
    set({ token: newToken, authorized: !!newToken });
    if (!newToken) {
      cookies.remove('refresh_token');
    }
  },

  clearToken: () => {
    set({ token: null, authorized: false });
    cookies.remove('refresh_token');
  },

  setAuthorized: (isAuthorized) => set({ authorized: isAuthorized }),
}));

export default useAuthStore;
