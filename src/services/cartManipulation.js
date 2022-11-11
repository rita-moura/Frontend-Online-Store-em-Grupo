export const getCartFromLocal = () => {
  if (!localStorage.cartItems) {
    localStorage.setItem('cartItems', '[]');
  }
  return JSON.parse(localStorage.getItem('cartItems'));
};

export const addCartItem = (item) => {
  const savedCartItems = getCartFromLocal();
  const index = savedCartItems.findIndex((product) => product.id === item.id);
  if (index >= 0) {
    savedCartItems[index].quantity += 1;
  } else {
    savedCartItems.push({ ...item, quantity: 1 });
  }
  localStorage.setItem('cartItems', JSON.stringify(savedCartItems));
};
