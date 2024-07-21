import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProductDetails = () => {
    const { wishlist } = useSelector((state) => state.wishlist);
    const { cart } = useSelector((state) => state.cart);
    const { user, isAuthenticated } = useSelector((state) => state.user);
    const { products } = useSelector((state) => state.products);
    const [count, setCount] = useState(1);
    const [click, setClick] = useState(false);
    const [select, setSelect] = useState(0);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllProductsShop(data && data?.shop._id));
      if (wishlist && wishlist.find((i) => i._id === data?._id)) {
        setClick(true);
      } else {
        setClick(false);
      }
    }, [data, wishlist]);
  return (
    <div>
      
    </div>
  )
}

export default ProductDetails
