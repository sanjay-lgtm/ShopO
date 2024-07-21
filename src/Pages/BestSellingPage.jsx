import React, { useEffect, useState } from 'react'
import Header from '../Components/Layout/Header'
import styles from '../styles/styles'
import { useSearchParams } from 'react-router-dom'
import { productData } from '../Static/data'
import ProductCart from '../Components/Route/ProductCart/ProductCart'

const BestSellingPage = () => {
   
    const [data, setData] = useState([])

    useEffect(() => {
       
            const d = productData && productData.sort((a,b)=> b.total_sell - a.total_sell);
            
            setData(d)
       
    }, [])

    return (
        <div>
            <Header activeHeading={ 2 } />
            <br />
            <br />
            <div className={ `${styles.section}` }>
                <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
                    {
                        data && data.map((i, index) => <ProductCart data={ i } key={ index } />)
                    }

                </div>
                
            </div>
        </div>
    )
}

export default BestSellingPage



