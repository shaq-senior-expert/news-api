// Accepts item (string) and data (JSON)
export const setLocalStorageItem = (item: string, data: any) => {
  if (localStorage)
    localStorage.setItem(
      item,
      typeof data === 'object' ? JSON.stringify(data) : data
    );
};

// Accepts item (string) and returns JSON data
export const getLocalStorageItem = (item: string) => {
  const receivedItem =
    !(typeof window === 'undefined') && localStorage && item in localStorage
      ? localStorage.getItem(item)
      : '';

  try {
    return receivedItem ? JSON.parse(receivedItem) : '';
  } catch (e) {
    return receivedItem;
  }
};
