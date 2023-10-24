import React, { useState, useEffect } from 'react';
import './Clock.css';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formattedTime = time.toLocaleTimeString();

  return (
    <div class="main">
    <div className="clock">
      <h4>Digital Clock</h4>
      <p>{formattedTime}</p>
    </div>
    </div>
  );
}
export default Clock;
