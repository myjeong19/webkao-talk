import { create } from 'zustand';
import { useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

interface AuthState {
  session: string | null;
  isLoading: boolean;
  signIn: (value: string) => void;
  signOut: () => void;
  loadSession: () => void;
}

const useAuthStore = create<AuthState>(set => ({
  session: null,
  isLoading: true,
  signIn: (value: string) => {
    set({ session: value });
    setStorageItemAsync('session', value);
  },
  signOut: () => {
    set({ session: null });
    setStorageItemAsync('session', null);
  },
  loadSession: async () => {
    set({ isLoading: true });
    const storedSession = await getStorageItemAsync('session');
    set({ session: storedSession, isLoading: false });
  },
}));

async function setStorageItemAsync(key: string, value: string | null): Promise<void> {
  if (Platform.OS === 'web') {
    try {
      if (value === null) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, value);
      }
    } catch (e) {
      console.error('Local storage is unavailable:', e);
    }
  } else {
    if (value === null) {
      await SecureStore.deleteItemAsync(key);
    } else {
      await SecureStore.setItemAsync(key, value);
    }
  }
}

async function getStorageItemAsync(key: string): Promise<string | null> {
  if (Platform.OS === 'web') {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      console.error('Local storage is unavailable:', e);
      return null;
    }
  } else {
    return await SecureStore.getItemAsync(key);
  }
}

// Zustand 상태 사용을 위한 커스텀 Hook
export function useSession() {
  const { session, isLoading, signIn, signOut, loadSession } = useAuthStore();

  useEffect(() => {
    loadSession();
  }, [loadSession]);

  return { session, isLoading, signIn, signOut };
}
