import { useState, useEffect, useCallback } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const parseValue = (value: string | null): T => {
    if (value === null) return initialValue;
    try {
      return JSON.parse(value);
    } catch {
      return value as unknown as T;
    }
  };

  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return parseValue(item);
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = useCallback((value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      
      setStoredValue(valueToStore);

      if (valueToStore === null || valueToStore === undefined) {
        window.localStorage.removeItem(key);
      } else {
        const stringified = typeof valueToStore === "string" 
          ? valueToStore 
          : JSON.stringify(valueToStore);
          
        window.localStorage.setItem(key, stringified);
      }
      
      window.dispatchEvent(new Event("local-storage-update"));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  useEffect(() => {
    const handleStorageChange = () => {
      const item = window.localStorage.getItem(key);
      setStoredValue(parseValue(item));
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("local-storage-update", handleStorageChange);
    
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("local-storage-update", handleStorageChange);
    };
  }, [key]);

  return [storedValue, setValue] as const;
}