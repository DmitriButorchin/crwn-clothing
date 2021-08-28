export const addItemToCart = (items, newItem) => {
  const existingItemIndex = items.findIndex((item) => item.id === newItem.id);

  if (existingItemIndex !== -1) {
    const existingItem = items[existingItemIndex];
    return [
      ...items.slice(0, existingItemIndex),
      { ...existingItem, quantity: existingItem.quantity + 1 },
      ...items.slice(existingItemIndex + 1),
    ];
  } else {
    return [...items, { ...newItem, quantity: 1 }];
  }
};
