import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../../../styles/styles';
import { AiFillHeart, AiFillStar, AiOutlineEye, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineStar } from 'react-icons/ai';

const ProductCart = ({ data }) => {
    const [click, setClick] = useState(false);
    const [open, setOpen] = useState(false);

    const d = data.name;
    const product_name = d.replace(/\s+/g, "-");
    return (
        <>
            <div className='w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer'>
                <div className='flex justify-end'>

                </div>
                <Link to={ `/products/${product_name}` }>
                    <img
                        src={ `${data.image_Url[0]?.url}` }
                        alt=""
                        className="w-full h-[170px] object-contain"
                    />

                </Link>
                <Link to={ '/' }>
                    <h5 className={ `${styles.shop_name}` }>{ data.shop.name }</h5>
                </Link>
                <Link to={ `/products/${product_name}` }>
                    <h4 className='p-3 font-[300]'>
                        {
                            data.name.length > 40 ? data.name.slice(0, 40) + '...' : data.name
                        }
                    </h4>
                    <div className='flex'>
                        <AiFillStar className='mr-2 cursor-pointer' color='#f6BA00' size={ 20 } />
                        <AiFillStar className='mr-2 cursor-pointer' color='#f6BA00' size={ 20 } />
                        <AiFillStar className='mr-2 cursor-pointer' color='#f6BA00' size={ 20 } />
                        <AiFillStar className='mr-2 cursor-pointer' color='#f6BA00' size={ 20 } />
                        <AiOutlineStar className='mr-2 cursor-pointer' color='#f6BA00' size={ 20 } />
                    </div>

                    <div className='py-2 flex items-center justify-between'>
                        <div className='flex'>
                            <h5 className={ `${styles.productDiscountPrice}` }>
                                { data.price === 0 ? data.price : data.discount_price }
                                $
                            </h5>
                            <h4 className={ `${styles.price}` }>
                                { data.price ? data.price + " $" : null }
                            </h4>
                        </div>
                        <span className='font-[400] text-[17px] text-[#68d284]'>
                            { data.total_sell } sold
                        </span>
                    </div>


                </Link>
                {/* side options */ }
                <div>
                    { click ? (
                        <AiFillHeart
                            size={ 22 }
                            className='cursor-pointer absolute right-2 top-5'
                            color={ click ? 'red' : '#000000' }
                            onClick={ () => setClick(!click) }
                            title='Remove from wishlist'
                        />
                    ) : (
                        <AiOutlineHeart
                            size={ 22 }
                            className='cursor-pointer absolute right-2 top-5'
                            color={ click ? 'red' : '#000000' }
                            onClick={ () => setClick(!click) }
                            title='Add to wishlist'
                        />
                    ) }
                    <AiOutlineEye
                        size={ 22 }
                        className='cursor-pointer absolute right-2 top-14'
                        color='#333'
                        onClick={ () => setOpen(!open) }
                        title='Quick view'
                    />
                    <AiOutlineShoppingCart
                        size={ 25 }
                        className='cursor-pointer absolute right-2 top-24'
                        color='#444'
                        onClick={ () => setOpen(!open) }
                        title='Add to cart  '
                    />
                </div>
                <div>
                    <h1>
                        5:43:09
                    </h1>
                </div>

            </div>
        </>
    )
}

export default ProductCart
