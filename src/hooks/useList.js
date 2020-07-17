import { useState } from 'react';

export const useList = (initialItems) => {

  const [ items, setItems ] = useState(initialItems);

  const addItem = (item) => {
    setItems(items.concat({
      ...item,
    }));
  };

  const deleteItem = (itemId) => {
    setItems(items.filter(c => c.id !== itemId));
  };

  const clearForm = () => {
      setItems([]);
  }

  return [ items, addItem, deleteItem, clearForm ];

};