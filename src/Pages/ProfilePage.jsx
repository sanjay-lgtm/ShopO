import React, { act, useState } from 'react'
import Header from '../Components/Layout/Header'
import styles from '../styles/styles'
import ProfileSidber from '../Components/Profile/ProfileSidber'
import ProfileContent from '../Components/Profile/ProfileContent'

const ProfilePage = () => {
    const [active, setActive] = useState(1);
    return (
        <div>
            <Header />
            <div className={ `${styles.section} flex bg-[#f5f5f5] py-10` }>
                <div className='w-[50px] 800px:w-[335px] sticky 800px:mt-0 mt-[10%]'>
                    <ProfileSidber active={ active } setActive={ setActive } />
                </div>
                <ProfileContent active={ active } setActive={ setActive } />
            </div>
        </div>
    )
}

export default ProfilePage
