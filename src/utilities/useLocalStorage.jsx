import { useEffect, useState } from "react";

const storageEvent = new Event('localStorageUpdate');

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === key || event.type === 'localStorageUpdate') {
        const newValue = localStorage.getItem(key);
        setValue(newValue ? JSON.parse(newValue) : initialValue);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('localStorageUpdate', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('localStorageUpdate', handleStorageChange);
    };
  }, [key, initialValue]);

  useEffect(() => {
    if (value !== undefined) {
      localStorage.setItem(key, JSON.stringify(value));
      window.dispatchEvent(storageEvent);
    }
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;