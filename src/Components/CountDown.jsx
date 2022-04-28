import React, { useState, useEffect } from 'react';

const CountDown = (props) => {
  const calculateTimeLeft = () => {
    let difference = +props.date - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };

    }
    return timeLeft;
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());


  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div className='body'>
        <div className='divInterval'>
          <div className={`intervaNumbers-`}>

            {timeLeft[interval]}

          </div>

        </div>
        <span className={`interval-`}>{interval}</span>

      </div>

    );
  });

  return (
    <div className="count">
      {timerComponents.length ? timerComponents : <span className='timesUp'>Time's up!</span>}
    </div>
  )
};

export default CountDown;