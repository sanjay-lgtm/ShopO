import React from 'react'
import styles from '../../../styles/styles'
import CountDown from '../../CountDown/CountDown'

const EventCard = () => {
    return (
        <div className={ `w-full block bg-white rounded-lg lg:flex p-2 mb-12` }>
            <div className='w-full lg:w-[50%] m-auto'>
                <img src='https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg' alt='' />
            </div>
            <div className='w-full lg:w-[50%] flex flex-col justify-center'>
                <h2 className={ `${styles.productTitle}` }>Iphone 14pro max 8/256gb</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae
                    vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam sit amet lacus a ante cursus
                    aliquam. Aliquam erat volutpat. Etiam vel dui et leo feugiat efficitur. Sed euismod, dui sit amet
                    ornare aliquet, libero odio.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae
                    vestibulum vestibulum. 
                </p>
                <div className='flex py-2 justify-between'>
                    <div className='flex'>
                        <h5 className='font-[500] text-[18px] text-[#d55b45] pr-3 line-through'>
                            10995
                        </h5>
                        <h5 className='font-bold text-[28px] text-[#333] font-Roboto'>
                            999$
                        </h5>
                    </div>
                    <span className='pr-3 font-[400] text-[17px] text-[#44a55e]'>
                        120 sold
                    </span>
                    
                </div>
                <div>
                    <CountDown/>
                </div>
            </div>
        </div>
    )
}

export default EventCard
