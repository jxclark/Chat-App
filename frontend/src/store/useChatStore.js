import { create } from 'zustand';
import { axiosInstance } from '../lib/axios.js';
import { toast } from 'react-hot-toast';
import { useAuthStore } from './useAuthStore.js';

export const useChatStore = create((set, get) => ({
  allContacts: [],
  chats: [],
  messages: [],
  activeTab: 'chats',
  selectedUser: null,
  isUsersLoading: false,
  isMessagesLoading: false,
  isSoundEnabled: localStorage.getItem('isSoundEnabled') === 'true',

  toggleSound: async () => {
    localStorage.setItem('isSoundEnabled', !get().isSoundEnabled);
    set({ isSoundEnabled: !get().isSoundEnabled });
  },

  setActiveTab: tab => set({ activeTab: tab }),
  setSelectedUser: selectedUser => set({ selectedUser }),

  getAllContacts: async () => {
    set({ isUsersLoading: true });
    try {
      const res = await axiosInstance.get('/messages/contacts');
      set({ allContacts: res.data });
    } catch (error) {
      toast.error('Failed to fetch contacts. Please try again.');
      console.error('Failed to fetch contacts:', error);
    } finally {
      set({ isUsersLoading: false });
    }
  },

  getMyChatPartners: async () => {
    set({ isUsersLoading: true });
    try {
      const res = await axiosInstance.get('/messages/chats');
      set({ chats: res.data });
    } catch (error) {
      toast.error('Failed to fetch chat partners. Please try again.');
      console.error('Failed to fetch chat partners:', error);
    } finally {
      set({ isUsersLoading: false });
    }
  },

  getMessagesByUserId: async userId => {
    set({ isMessagesLoading: true });
    try {
      const res = await axiosInstance.get(`/messages/${userId}`);
      set({ messages: res.data });
    } catch (error) {
      toast.error('Failed to fetch messages. Please try again.');
      console.error('Failed to fetch messages:', error);
    } finally {
      set({ isMessagesLoading: false });
    }
  },

  sendMessage: async messageData => {
    const { selectedUser } = get();
    const { authUser } = useAuthStore.getState();

    const tempId = `twemp-${Date.now()}`;

    const optimisticMessage = {
      _id: tempId,
      senderId: authUser._id,
      receiverId: selectedUser._id,
      text: messageData.text,
      image: messageData.image || null,
      createdAt: new Date().toISOString(),
      isOptimistic: true,
    };
    // immediately update the ui by adding the message
    set(state => ({ messages: [...state.messages, optimisticMessage] }));

    try {
      const res = await axiosInstance.post(
        `/messages/send/${selectedUser._id}`,
        messageData
      );
      set(state => {
        const idx = state.messages.findIndex(msg => msg._id === tempId);
        if (idx === -1) return { messages: [...state.messages, res.data] };
        const next = state.messages.slice();
        next[idx] = res.data;
        return { messages: next };
      });
    } catch (error) {
      // remove the optimistic message on failure
      set(state => ({
        messages: state.messages.filter(msg => msg._id !== tempId),
      }));
      toast.error('Failed to send message. Please try again.');
      console.error(error.response?.data?.message);
    }
  },
}));
