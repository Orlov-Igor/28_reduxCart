import { useState, useEffect } from 'react';

export function useLocalStorage(key, initValue) {
  const [data, setData] = useState(() => {
    try {
      const dataItem = localStorage.getItem(key);
      return dataItem ? JSON.parse(dataItem) : initValue;
    } catch (error) {
      console.log(error);
      return initValue;
    }
  });

  const setNewData = value => {
    setData(value);
  };

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [key, data])

  return [data, setNewData];
}

export default useLocalStorage