import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { server } from '../server';

const ActivationPage = () => {
    const { activation_token } = useParams();
    const [error, setError] = useState(false);

    useEffect(() => {
        if (activation_token) {
            const sendRequest = async () => {
                    await axios.post(`${server}/user/activation`, {
                        activation_token,
                    })
                   
                    .then((res) => {
                        console.log(resizeBy);
                    })
                    .catch((err)=>{
                        setError(true)
                    })
            }
            sendRequest();
        }
    }, [])
    return (
        <div style={ {
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

        } }>
            { error ? (
                <p>Your Token is Expired!❌</p>
            ) : (
                <p>Your Account has been created successfully🎉</p>
            ) }

        </div>
    )
}

export default ActivationPage
