import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/styles';
import { categoriesData, productData } from '../../Static/data';
import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import DropDown from './DropDown';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';
import { backend_url } from '../../server';
import Cart from '../Cart/Cart';
import WishList from '../WishList/WishList';
import { RxCross1 } from 'react-icons/rx';

const Header = ({ activeHeading }) => {
    const { isAuthenticated, user } = useSelector((state) => state.user || {});

    const [searchTerm, setSearchTerm] = useState('');
    const [searchData, setSearchData] = useState(null);
    const [active, setActive] = useState(false);
    const [dropdown, setDropDown] = useState(false);

    const [openCart, setOpenCart] = useState(false);
    const [openwishList, setOpenWishList] = useState(false);
    const [open, setOpen] = useState(false)
    const handleSearchChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);

        const filteredProducts = productData.filter((product) =>
            product.name.toLowerCase().includes(term.toLowerCase())
        );
        setSearchData(filteredProducts);
    };

    const generateSlug = (name) => {
        return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    };


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 70) {
                setActive(true);
            } else {
                setActive(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className={ `${styles.section}` }>
                <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
                    <div>
                        <Link to="/">
                            <img src="https://shopo.quomodothemes.website/assets/images/logo.svg" alt="logo" />
                        </Link>
                    </div>

                    <div className="w-[50%] relative">
                        <input
                            type="text"
                            placeholder="Search Product..."
                            value={ searchTerm }
                            onChange={ handleSearchChange }
                            className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
                        />
                        <AiOutlineSearch
                            size={ 30 }
                            className="absolute right-2 top-1.5 cursor-pointer"
                        />
                        { searchData && searchData.length !== 0 && (
                            <div className='absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4'>
                                { searchData.map((i, index) => {
                                    const Product_name = generateSlug(i.name);
                                    return (
                                        <Link to={ `/products/${Product_name}` } key={ index }>
                                            <div className='w-full flex items-start py-3'>
                                                <img src={ i.image_Url[0].url } alt="" className='w-[40px] h-[40px] mr-[10px]' />
                                                <h1>{ i.name }</h1>
                                            </div>
                                        </Link>
                                    );
                                }) }
                            </div>
                        ) }
                    </div>
                    <div className={ `${styles.button}` }>
                        <Link to="/seller">
                            <h1 className='text-[#fff] flex items-center'>
                                Become Seller <IoIosArrowForward className='ml-1' />
                            </h1>
                        </Link>
                    </div>
                </div>
            </div>


            <div className={ `${active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
                } transition hidden 800px:flex items-center justify-between w-full bg-[#3321c8] h-[70px]` }
            >
                <div
                    className={ `${styles.section} relative ${styles.noramlFlex} justify-between` }
                >
                    {/* categories */ }
                    <div onClick={ () => setDropDown(!dropdown) }>
                        <div className='relative h-[60px] mt-[10px] w-[270px] ms-8 hidden 1000px:block'>
                            <BiMenuAltLeft size={ 30 } className='absolute top-3 left-2' />
                            <button className={ `h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md` }>
                                All Categories
                            </button>
                            <IoIosArrowDown
                                size={ 20 }
                                className="absolute right-2 top-4 cursor-pointer"
                                onClick={ () => setDropDown(!dropdown) }
                            />
                            {
                                dropdown ? (
                                    <DropDown
                                        categoriesData={ categoriesData }
                                        setDropDown={ setDropDown }
                                    />
                                ) : null
                            }
                        </div>
                    </div>
                    {/* navigation */ }
                    <div className={ `${styles.noramlFlex}` }>
                        <Navbar active={ activeHeading } />
                    </div>
                    <div className='flex'>
                        <div className={ `${styles.noramlFlex}` }>
                            <div
                                className="relative cursor-pointer mr-[15px]"
                                onClick={ () => setOpenWishList(true) }
                            >
                                <AiOutlineHeart size={ 30 } color="rgb(255 255 255 / 83%)" />
                                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                                    0
                                </span>
                            </div>
                        </div>
                        <div className={ `${styles.noramlFlex}` }>
                            <div
                                className="relative cursor-pointer mr-[15px]"
                                onClick={ () => setOpenCart(true) }
                            >
                                <AiOutlineShoppingCart
                                    size={ 30 }
                                    color="rgb(255 255 255 / 83%)"
                                />
                                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                                    1
                                </span>
                            </div>
                        </div>
                        <div className={ `${styles.noramlFlex}` }>
                            <div className='relative cursor-pointer mr-[15px]'>
                                {
                                    isAuthenticated ? (
                                        <Link to="/profile">
                                            <img src={ `${backend_url}${user.avatar}` } alt="" className="rounded-full w-[35px] h-[35px]" />
                                        </Link>
                                    ) : (
                                        <Link to="/login">
                                            <CgProfile size={ 30 } color="rgb(255 255 255 / 83%)" />
                                        </Link>
                                    )
                                }
                            </div>

                        </div>
                        {/* cart popup */ }
                        {
                            openCart ? (
                                <Cart setOpenCart={ setOpenCart } />
                            ) : null
                        }
                        {/* wishlist opou */ }
                        {
                            openwishList ? (
                                <WishList setOpenWishList={ setOpenWishList } />
                            ) : null
                        }
                    </div>
                </div>
            </div>
            {/* mobile screen header */ }

            <div
                className={ `${active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
                    }
      w-full h-[60px] bg-[#fff] z-50 top-0 left-0 shadow-sm 800px:hidden`}
            >
                <div className='flex justify-between  items-center w-full'>
                    <div>
                        <BiMenuAltLeft
                            size={ 40 }
                            className='ml-4'
                            onClick={ () => setOpen(true) }
                        />
                    </div>
                    <div>
                        <Link to="/">
                            <img src="https://shopo.quomodothemes.website/assets/images/logo.svg" alt="logo"
                                className='mt-3 cursor-pointer'
                            />
                        </Link>
                    </div>
                    <div>
                        <div className='relative mr-[20px]'>
                            <AiOutlineShoppingCart size={ 30 } />
                            <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                                0
                            </span>
                        </div>
                    </div>
                    {/* cart popup */ }
                    { openCart ? <Cart setOpenCart={ setOpenCart } /> : null }

                    {/* wishlist popup */ }
                    { openwishList ? <WishList setOpenWishList={ setOpenWishList } /> : null }
                </div>

                {/* header sidebar */ }
                {
                    open && (
                        <div className={ `fixed w-full bg-[#0000005f] z-20 h-full top-0 left-0` }>
                            <div className="fixed w-[70%] bg-[#fff] h-screen top-0 left-0 z-10 overflow-y-scroll">

                                <div className='w-full justify-between  flex pr-3'>
                                    <div>
                                        <div className='relative mr-[15px]'>
                                            <AiOutlineHeart size={ 30 } className='mt-5 ml-3' />
                                            <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                                                0
                                            </span>
                                        </div>
                                    </div>
                                    <RxCross1 size={ 30 }
                                        className='ml-4 mt-5'
                                        onClick={ () => setOpen(false) }
                                    />
                                </div>

                                <div className='my-8 w-[92%] m-auto h-[40x relative]'>
                                    <input
                                        type='search'
                                        placeholder='Search Products...'
                                        className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
                                        value={ searchTerm }
                                        onChange={ handleSearchChange }
                                    />
                                    { searchData && searchData.length !== 0 && (
                                        <div className='absolute  bg-slate-50 shadow z-10 left-0 p-3 w-full'>
                                            { searchData.map((i, index) => {
                                                const Product_name = generateSlug(i.name);
                                                return (
                                                    <Link to={ `/products/${Product_name}` } key={ index }>
                                                        <div className='w-full flex items-start py-3'>
                                                            <img src={ i.image_Url[0].url } alt="" className='w-[40px] h-[40px] mr-[10px]' />
                                                            <h1>{ i.name }</h1>
                                                        </div>
                                                    </Link>
                                                );
                                            }) }
                                        </div>
                                    ) }
                                </div>

                                <Navbar active={ activeHeading } />

                                <div className={ `${styles.button} ml-4 !rounded-[4px]` }>
                                    <Link to="/seller">
                                        <h1 className='text-[#fff] flex items-center'>
                                            Become Seller <IoIosArrowForward className='ml-1' />
                                        </h1>
                                    </Link>
                                    <br />
                                    <br />
                                    <br />
                                </div>
                                <div className='flex w-full justify-center'>
                                    { isAuthenticated ? (
                                        <div>
                                            <Link to={ '/profile' }>
                                                <img src={ `${backend_url}${user.avatar}` } alt={ user.name }
                                                    className='rounded-full w-[60px] h-[60px] border-[3px] border-[#0eae88]'
                                                />
                                            </Link>
                                        </div>
                                    ) : (
                                        <>
                                            <Link to={ 'login' } className='text-[18px] pr-[10px] text-[#eb0303]'>Login <span className='text-[#d61cae]'>/</span></Link>
                                            <Link to={ 'sign-up' } className='text-[18px]   text-[#4070f5]'>SignUp</Link>

                                        </>
                                    )
                                    }
                                </div>
                            </div>
                        </div>
                    )
                }


            </div>
        </>
    );
};

export default Header;
