"use client";

import React, { useState, useContext } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import { FavContext } from '../context/fav-context';

function IconSwitcher({ productId }) {
  // const [icon, setIcon] = useState('full');
  const [ isInFav, setIsInFav ] = useState(false);
  const { addToFav, removeFromFav, favItems } = useContext(FavContext);

  React.useEffect(() => {
    setIsInFav(!!favItems[productId]);
  }, [favItems, productId]);

  const toggleIcon = () => {
    if (isInFav) {
      removeFromFav(productId);
    } else {
      addToFav(productId);
    }
    setIsInFav(prevState => !prevState);
  };

  return (
    <IconButton onClick={toggleIcon}>
      {isInFav ? <FavoriteIcon color='red'/> : <FavoriteBorderIcon />}
    </IconButton>
  );
}

export default IconSwitcher
