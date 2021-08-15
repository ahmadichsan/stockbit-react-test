import { useState, useEffect } from 'react';

export function useLocalStorageByKey(key: string) {
  const [localValueByKey, setValueByKey] = useState('');

  const updateKeyStatus = () => {
    const valueByKey = localStorage.getItem(key);
    setValueByKey(valueByKey || '');
  };

  useEffect(() => {
    window.addEventListener("storage", updateKeyStatus);

    return () => {
      window.removeEventListener("storage", updateKeyStatus);
    };
  });

  return { localValueByKey };
}
