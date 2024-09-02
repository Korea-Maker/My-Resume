// /stores/authStore.js
import { create } from 'zustand';

// Define the store using the create hook
const useAuthStore = create((set) => ({
  token: null,  // JWT token
  authorized: false,  // Authorization state
  setToken: (token) => set({ token, authorized: !!token }),  // Function to set the token and update authorized state
  clearToken: () => set({ token: null, authorized: false }),  // Function to clear the token and reset authorized state
  setAuthorized: (authorized) => set({ authorized }),  // Explicitly set the authorization state
}));

export default useAuthStore;
