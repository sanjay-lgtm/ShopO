import React, { useEffect, useState } from 'react'

const CountDown = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)
        return () => clearTimeout(timer)
    })

    function calculateTimeLeft() {
        const differnce = +new Date('2024-07-21') - +new Date();
        let timeLeft = {};
        
        if (differnce > 0) {
            timeLeft = {
                days: Math.floor(differnce / (1000 * 60 * 60 *
                    24)),
                hours: Math.floor((differnce / (1000 * 60 * 60))
                    % 24),
                minutes: Math.floor((differnce / 1000 / 60) % 60
                ),
                seconds: Math.floor((differnce / 1000) % 60)
            };
        };
        return timeLeft;
    }

    const timerComponents = Object.keys(timeLeft).map((interval) => {
        if (!timeLeft[interval]) {
            return null
        }
        return (
            <span className='text-[25px] text-[#475ad2]'>
                { timeLeft[interval] }{ interval }{ " " }
            </span>
        )
    })

    return (
        <div>
            { timerComponents.length ? timerComponents : <span className='text-[red] text-[25px]'>Time's up!</span> }
        </div>
    )
}

export default CountDown
