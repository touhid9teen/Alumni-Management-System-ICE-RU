import { LOCAL_STORAGE_KEYS } from "../constants/Global";

export const setToStorage = (key: LOCAL_STORAGE_KEYS, token: string): void => {
  localStorage.setItem(key, token);
};
