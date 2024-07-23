import React, { useEffect, useState } from 'react'
import Header from '../Components/Layout/Header'
import Footer from '../Components/Layout/Footer'
import ProductDetails from '../Components/Products/ProductDetails'
import { useParams } from 'react-router-dom'
import { productData } from '../Static/data'
import SuggestedProduct from '../Components/Products/SuggestedProduct'

const ProductDetailsPage = () => {
    const { name } = useParams();

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const productName = name.replace(/-/g, " ");

    useEffect(() => {
        // Find the product data by name
        const product = productData.find((i) => i.name.toLowerCase() === productName.toLowerCase());

        // Set state based on the found product
        if (product) {
            setData(product);
        } else {
            setError('Product not found');
        }
        setLoading(false);
    }, [productName]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{ error }</div>;
    }

    return (
        <div>
            <Header />
            { data ? <ProductDetails data={ data } /> : <div>Product not found</div> }
            { data && <SuggestedProduct data={data}/>}
            <Footer />
        </div>
    )
}

export default ProductDetailsPage
