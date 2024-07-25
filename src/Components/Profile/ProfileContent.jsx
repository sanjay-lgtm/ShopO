import React, { useEffect, useState } from 'react';
import { backend_url } from '../../server';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineArrowRight, AiOutlineCamera, AiOutlineDelete } from 'react-icons/ai';
import styles from '../../styles/styles';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { MdOutlineTrackChanges } from 'react-icons/md';

const ProfileContent = ({ active }) => {
    const { user } = useSelector((state) => state.user || {});
    const [name, setName] = useState(user && user.name);
    const [email, setEmail] = useState(user && user.email);
    const [phoneNumber, setPhoneNumber] = useState();
    const [zipcode, setZipCode] = useState();
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");

    if (!user) {
        return <div>Loading...</div>;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className='w-full'>
            { active === 1 && (
                <>
                    <div className='flex w-full justify-center'>
                        <div className='relative'>
                            <img
                                src={ `${backend_url}${user?.avatar}` }
                                alt={ `${user.name}'s avatar` }
                                className="rounded-full w-[150px] h-[150px] object-cover border-[3px] border-[#3ad132]"
                            />
                            <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
                                <input
                                    type="file"
                                    id="image"
                                    className="hidden"
                                // onChange={ handleImage }
                                />
                                <label htmlFor="image">
                                    <AiOutlineCamera />
                                </label>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className='w-full px-5'>
                        <form onSubmit={ handleSubmit } aria-required={ true }>
                            <div className='w-full 800px:flex block pb-3'>
                                <div className='w-full 800px:w-[50%]'>
                                    <label className='block pb-2'>Full Name</label>
                                    <input
                                        type='text'
                                        className={ `${styles.input} w-[95%] mb-4 800px:mb-0` }
                                        required
                                        value={ name }
                                        onChange={ (e) => setName(e.target.value) }
                                    />
                                </div>
                                <div className='w-full 800px:w-[50%]'>
                                    <label className='block pb-2'>Email Address</label>
                                    <input
                                        type='text'
                                        className={ `${styles.input} w-[95%] mb-4 800px:mb-0` }
                                        required
                                        value={ email }
                                        onChange={ (e) => setEmail(e.target.value) }
                                    />
                                </div>
                            </div>
                            <div className='w-full 800px:flex block pb-3'>
                                <div className='w-full 800px:w-[50%]'>
                                    <label className='block pb-2'>Phone Number</label>
                                    <input
                                        type='number'
                                        className={ `${styles.input} w-[95%] mb-4 800px:mb-0` }
                                        required
                                        value={ phoneNumber }
                                        onChange={ (e) => setPhoneNumber(e.target.value) }
                                    />
                                </div>
                                <div className='w-full 800px:w-[50%]'>
                                    <label className='block pb-2'>Zip Code</label>
                                    <input
                                        type='number'
                                        className={ `${styles.input} w-[95%] mb-4 800px:mb-0` }
                                        required
                                        value={ zipcode }
                                        onChange={ (e) => setZipCode(e.target.value) }
                                    />
                                </div>
                            </div>
                            <div className='w-full 800px:flex block pb-3'>
                                <div className='w-full 800px:w-[50%]'>
                                    <label className='block pb-2'>Address 1</label>
                                    <input
                                        type='text'
                                        className={ `${styles.input} w-[95%] mb-4 800px:mb-0` }
                                        required
                                        value={ address1 }
                                        onChange={ (e) => setAddress1(e.target.value) }
                                    />
                                </div>
                                <div className='w-full 800px:w-[50%]'>
                                    <label className='block pb-2'>Address 2</label>
                                    <input
                                        type='text'
                                        className={ `${styles.input} w-[95%%] mb-4 800px:mb-0` }
                                        required
                                        value={ address2 }
                                        onChange={ (e) => setAddress2(e.target.value) }
                                    />
                                </div>
                            </div>
                            <input
                                className={ `w-[250px] h-[40px] border border-[#3a24db] text-center text-[#3a24db] rounded-[3px] mt-8 cursor-pointer` }
                                required
                                value="Update"
                                type='submit'
                            />
                        </form>
                    </div>
                </>
            ) }
            {/* order  */ }
            { active === 2 && (
                <div>
                    <AllOrders />
                </div>
            ) }

            {/* refund  */ }
            { active === 3 && (
                <div>
                    <AllRefundOrders />
                </div>
            ) }

            {/* track order  */ }
            { active === 5 && (
                <div>
                    <TrackOrder />
                </div>
            ) }

            {/* payment method  */ }
            { active === 6 && (
                <div>
                    <PaymentMehod />
                </div>
            ) }

            {/* address   */ }
            { active === 7 && (
                <div>
                    <Address />
                </div>
            ) }

        </div>
    );
};

const AllOrders = () => {
    const { user } = useSelector((state) => state.user || {});
    const { orders = [] } = useSelector((state) => state.order || {});
    const dispatch = useDispatch();

    useEffect(() => {
        // Uncomment the following lines to fetch orders for the user from the backend
        // if (user && user._id) {
        //     dispatch(getAllOrdersOfUser(user._id));
        // }
    }, [dispatch, user]);

    const staticOrders = [
        {
            _id: "434325d3r32ee32e3r4",
            orderItems: [
                {
                    name: "Iphone 14 pro max",
                },
            ],
            totalPrice: 120,
            orderStatus: "Processing"
        }
    ];

    const orderData = orders.length ? orders : staticOrders;

    const columns = [
        {
            field: "id",
            headerName: "Order ID",
            minWidth: 150,
            flex: 0.7
        },
        {
            field: "status",
            headerName: "Status",
            minWidth: 130,
            flex: 0.7,
            cellClassName: (params) => {
                return params.row.status === "Delivered" ? "greenColor" : "redColor";
            },
        },
        {
            field: "itemsQty",
            headerName: "Items Qty",
            type: "number",
            minWidth: 130,
            flex: 0.7,
        },
        {
            field: "total",
            headerName: "Total",
            type: "number",
            minWidth: 130,
            flex: 0.8,
        },
        {
            field: " ",
            flex: 1,
            minWidth: 150,
            headerName: "",
            type: "number",
            sortable: false,
            renderCell: (params) => {
                return (
                    <Link to={ `/user/order/${params.id}` }>
                        <Button>
                            <AiOutlineArrowRight size={ 20 } />
                        </Button>
                    </Link>
                );
            },
        },
    ];

    const rows = orderData.map((item) => ({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: "US$ " + item.totalPrice,
        status: item.orderStatus,
    }));

    return (
        <div className="pl-8 pt-1">
            <DataGrid
                rows={ rows }
                columns={ columns }
                pageSize={ 10 }
                disableSelectionOnClick
                autoHeight
            />
        </div>
    );
};

const AllRefundOrders = () => {
    const { user } = useSelector((state) => state.user || {});
    const { orders = [] } = useSelector((state) => state.order || {});
    const dispatch = useDispatch();

    useEffect(() => {
        // Uncomment the following lines to fetch orders for the user from the backend
        // if (user && user._id) {
        //     dispatch(getAllOrdersOfUser(user._id));
        // }
    }, [dispatch, user]);
    const staticOrders = [
        {
            _id: "434325d3r32ee32e3r4",
            orderItems: [
                {
                    name: "Iphone 14 pro max",
                },
            ],
            totalPrice: 120,
            orderStatus: "Processing"
        }
    ];

    const orderData = orders.length ? orders : staticOrders;

    const columns = [
        {
            field: "id",
            headerName: "Order ID",
            minWidth: 150,
            flex: 0.7
        },
        {
            field: "status",
            headerName: "Status",
            minWidth: 130,
            flex: 0.7,
            cellClassName: (params) => {
                return params.row.status === "Delivered" ? "greenColor" : "redColor";
            },
        },
        {
            field: "itemsQty",
            headerName: "Items Qty",
            type: "number",
            minWidth: 130,
            flex: 0.7,
        },
        {
            field: "total",
            headerName: "Total",
            type: "number",
            minWidth: 130,
            flex: 0.8,
        },
        {
            field: " ",
            flex: 1,
            minWidth: 150,
            headerName: "",
            type: "number",
            sortable: false,
            renderCell: (params) => {
                return (
                    <Link to={ `/user/order/${params.id}` }>
                        <Button>
                            <AiOutlineArrowRight size={ 20 } />
                        </Button>
                    </Link>
                );
            },
        },
    ];

    const row = orderData.map((item) => ({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: "US$ " + item.totalPrice,
        status: item.orderStatus,
    }));


    return (
        <div className="pl-8 pt-1">
            <DataGrid
                rows={ row }
                columns={ columns }
                pageSize={ 10 }
                disableSelectionOnClick
                autoHeight
            />
        </div>
    )
}


const TrackOrder = () => {
    const { user } = useSelector((state) => state.user || {});
    const { orders = [] } = useSelector((state) => state.order || {});
    const dispatch = useDispatch();

    useEffect(() => {
        // Uncomment the following lines to fetch orders for the user from the backend
        // if (user && user._id) {
        //     dispatch(getAllOrdersOfUser(user._id));
        // }
    }, [dispatch, user]);
    const staticOrders = [
        {
            _id: "434325d3r32ee32e3r4",
            orderItems: [
                {
                    name: "Iphone 14 pro max",
                },
            ],
            totalPrice: 120,
            orderStatus: "Processing"
        }
    ];

    const orderData = orders.length ? orders : staticOrders;

    const columns = [
        {
            field: "id",
            headerName: "Order ID",
            minWidth: 150,
            flex: 0.7
        },
        {
            field: "status",
            headerName: "Status",
            minWidth: 130,
            flex: 0.7,
            cellClassName: (params) => {
                return params.row.status === "Delivered" ? "greenColor" : "redColor";
            },
        },
        {
            field: "itemsQty",
            headerName: "Items Qty",
            type: "number",
            minWidth: 130,
            flex: 0.7,
        },
        {
            field: "total",
            headerName: "Total",
            type: "number",
            minWidth: 130,
            flex: 0.8,
        },
        {
            field: " ",
            flex: 1,
            minWidth: 150,
            headerName: "",
            type: "number",
            sortable: false,
            renderCell: (params) => {
                return (
                    <Link to={ `/user/order/${params.id}` }>
                        <Button>
                            <MdOutlineTrackChanges size={ 20 } />
                        </Button>
                    </Link>
                );
            },
        },
    ];

    const row = orderData.map((item) => ({
        id: item._id,
        itemsQty: item.orderItems.length,
        total: "US$ " + item.totalPrice,
        status: item.orderStatus,
    }));


    return (
        <div className="pl-8 pt-1">
            <DataGrid
                rows={ row }
                columns={ columns }
                pageSize={ 10 }
                disableSelectionOnClick
                autoHeight
            />
        </div>
    )
}

const PaymentMehod = () => {
    return (
        <div className='w-full px-5'>
            <div className='flex w-full items-center justify-between'>
                <h1 className='text-[25px] font-[600] text-[#000000ba] pb-2'>
                    payment Methods
                </h1>
                <div className={ `${styles.button} !rounded-md` }>
                    <span className='text-[#fff] '>Add New</span>
                </div>
            </div>
            <br />
            <div className='w-full bg-white h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between pr-10'>
                <div className='flex items-center'>
                    <img src=''
                        alt='visacard'
                    />
                    <h5 className='pl-5 font-[600]'>
                        Sanjay Sharma
                    </h5>
                </div>
                <div className='pl-8 flex items-center'>
                    <h6>1234 **** *** ****</h6>
                    <h5 className='pl-6'>08/2024</h5>
                </div>
                <div className='min-w-[10%] flex items-center justify-between pl-8'>
                    <AiOutlineDelete size={ 25 } className='cursor-pointer' />
                </div>
            </div>
        </div>
    )
}


const Address = () => {
    return (
        <div className='w-full px-5'>
            <div className='flex w-full items-center justify-between'>
                <h1 className='text-[25px] font-[600] text-[#000000ba] pb-2'>
                    My Addresses
                </h1>
                <div className={ `${styles.button} !rounded-md` }>
                    <span className='text-[#fff] '>Add New</span>
                </div>
            </div>
            <br />
            <div className='w-full bg-white h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between pr-10'>
                <div className='flex items-center'>

                    <h5 className='pl-5 font-[600]'>
                        Default Address
                    </h5>
                </div>
                <div className='pl-8 flex items-center'>
                    <h6>494 Erudsdsndbsa,djdsad,bdjsadjks</h6>
                </div>
                <div className='pl-8 flex items-center'>
                    <h6>(2131) 77721-676-898</h6>
                </div>
                <div className='min-w-[10%] flex items-center justify-between pl-8'>
                    <AiOutlineDelete size={ 25 } className='cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default ProfileContent;
