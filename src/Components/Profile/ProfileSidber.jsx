import React, { act } from 'react'
import { AiOutlineCreditCard, AiOutlineLogout, AiOutlineMessage } from 'react-icons/ai';
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from 'react-icons/hi';
import { RxPerson } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom'
import { MdOutlineTrackChanges } from "react-icons/md";
import { TbAddressBook } from "react-icons/tb";
import axios from 'axios';
import { server } from '../../server';
import { toast } from 'react-toastify';

const ProfileSidber = ({ setActive, active }) => {
    const navigate = useNavigate();
    const logoutHandler = () => {
        axios.get(`${server}/user/logout`, { withCredentials: true })
            .then((res) => {
                toast.success(res.data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                window.location.reload(true);
                navigate('/login')
               
            })

            .catch((error) => {
                toast.error(error.response.data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

            })

    }
    return (
        <div className='w-full bg-white shadow-sm rounded-[10px] p-4 pt-8'>
            <div className='flex items-center cursor-pointer w-full mb-8'
                onClick={ () => setActive(1) }
            >
                <RxPerson size={ 20 } color={ active === 1 ? "red" : "" } />
                <span className={ `pl-3  ${active === 1 ? "text-[red]" : ""}` }>
                    Profile
                </span>

            </div>
            <div className='flex items-center cursor-pointer w-full mb-8'
                onClick={ () => setActive(2) }
            >
                <HiOutlineShoppingBag size={ 20 } color={ active === 2 ? "red" : "" } />
                <span className={ `pl-3  ${active === 2 ? "text-[red]" : ""}` }>
                    Orders
                </span>

            </div>
            <div className='flex items-center cursor-pointer w-full mb-8'
                onClick={ () => setActive(3) }
            >
                <HiOutlineReceiptRefund size={ 20 } color={ active === 3 ? "red" : "" } />
                <span className={ `pl-3  ${active === 3 ? "text-[red]" : ""}` }>
                    Refunds
                </span>

            </div>
            <div className='flex items-center cursor-pointer w-full mb-8'
                onClick={ () => setActive(4) || navigate('/inbox') }
            >
                <AiOutlineMessage size={ 20 } color={ active === 4 ? "red" : "" } />
                <span className={ `pl-3  ${active === 4 ? "text-[red]" : ""}` }>
                    Inbox
                </span>

            </div>

            <div className='flex items-center cursor-pointer w-full mb-8'
                onClick={ () => setActive(5) }
            >
                <MdOutlineTrackChanges size={ 20 } color={ active === 5 ? "red" : "" } />
                <span className={ `pl-3  ${active === 5 ? "text-[red]" : ""}` }>
                    Track Order
                </span>

            </div>

            <div className='flex items-center cursor-pointer w-full mb-8'
                onClick={ () => setActive(6) }
            >
                <AiOutlineCreditCard size={ 20 } color={ active === 6 ? "red" : "" } />
                <span className={ `pl-3  ${active === 6 ? "text-[red]" : ""}` }>
                    Payment Methods
                </span>

            </div>

            <div className='flex items-center cursor-pointer w-full mb-8'
                onClick={ () => setActive(7) }
            >
                <TbAddressBook size={ 20 } color={ active === 7 ? "red" : "" } />
                <span className={ `pl-3  ${active === 7 ? "text-[red]" : ""}` }>
                    Addresses
                </span>

            </div>

            <div className='flex items-center cursor-pointer w-full mb-8'
                onClick={ () => setActive(8) || logoutHandler() }
            >
                <AiOutlineLogout size={ 20 } color={ active === 8 ? "red" : "" } />
                <span className={ `pl-3  ${active === 8 ? "text-[red]" : ""}` }>
                    LogOut
                </span>

            </div>
        </div>
    )
}

export default ProfileSidber

ProfileSidber