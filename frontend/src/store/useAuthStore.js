import { create } from 'zustand';
import { axiosInstance } from '../lib/axios.js';
import toast from 'react-hot-toast';

export const useAuthStore = create(set => ({
  authUser: null,
  isCheckingAuth: true,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfileImg: false,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get('/auth/check');
      set({ authUser: res.data });
    } catch (error) {
      console.log('Error checking auth:', error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async data => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post('/auth/signup', data);
      set({ authUser: res.data });

      toast.success('Account created successfully!');
    } catch (error) {
      console.log('Error during signup:', error);
      toast.error(
        error.response?.data?.message || 'Signup failed. Please try again.'
      );
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async data => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post('/auth/login', data);
      set({ authUser: res.data });

      toast.success('Logged in successfully!');
    } catch (error) {
      console.log('Error during login:', error);
      toast.error(
        error.response?.data?.message || 'Login failed. Please try again.'
      );
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post('/auth/logout');
      set({ authUser: null });
      toast.success('Logged out successfully!');
    } catch (error) {
      console.log('Error during logout:', error);
      toast.error('Logout failed. Please try again.');
    }
  },

  updateProfile: async data => {
    set({ isUpdatingProfileImg: true });
    try {
      const res = await axiosInstance.put('/auth/update-profile', data);
      set({ authUser: res.data });
      toast.success('Profile updated successfully!');
    } catch (error) {
      console.log('Error updating profile:', error);
      toast.error(
        error.response?.data?.message ||
          'Profile update failed. Please try again.'
      );
    } finally {
      set({ isUpdatingProfileImg: false });
    }
  },
}));
