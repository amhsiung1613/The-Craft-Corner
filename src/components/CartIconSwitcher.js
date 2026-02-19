import React, { useState, useContext } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import { ShopContext } from '../context/shop-context';

function IconSwitcher({ productId }) {
  const [isInCart, setIsInCart] = useState(false);
  const { addToCart, removeFromCart, cartItems } = useContext(ShopContext);

  // Check if the product is in the cart initially
  React.useEffect(() => {
    setIsInCart(!!cartItems[productId]);
  }, [cartItems, productId]);

  const toggleIcon = () => {
    if (isInCart) {
      removeFromCart(productId);
    } else {
      addToCart(productId);
    }
    setIsInCart(prevState => !prevState);
  };

  return (
    <IconButton onClick={toggleIcon}>
      {isInCart ? <ShoppingCartIcon /> : <AddShoppingCartIcon />}
    </IconButton>
  );
  }

export default IconSwitcher;
