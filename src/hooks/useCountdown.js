import React, {useState, useEffect} from 'react';
/**
 * 
 * @param {number} initSeconds seconds，倒计时
 */
 export default function useCountdown(initSeconds) {
  const [seconds, setSeconds] = useState(initSeconds); 
  const [intervalID, setIntervalID] = useState(null); // interval
  const hasCountdownEnd = seconds <= 0;
  const intervalExist = intervalID !== null
  const countdown = () => {
    setSeconds(seconds => seconds - 1);
  }

  const startTimer = () => {
    if(!hasCountdownEnd && !intervalExist){
    setIntervalID(setInterval(countdown,1000));
    }
  };
  const stopTimer = () => {
    clearInterval(intervalID);
    setIntervalID(null); // 解除引用
  };

  useEffect(() => {
    if(hasCountdownEnd) {
      stopTimer();
    }
  },[hasCountdownEnd]);

  useEffect(() => {
    return () => {
      clearInterval(intervalID);
    }
  },[]);

  return {
    seconds,
    startTimer,
    stopTimer,
  }
}