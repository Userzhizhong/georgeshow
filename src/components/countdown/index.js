import React, {useState, useEffect} from 'react';
import useCountdown from '../../hooks/useCountdown';
export default function Countdown() {
  const [btnText, setBtnText] = useState('purchase');
  const  {seconds, startTimer, stopTimer} = useCountdown(10);
  useEffect(()=> {
    startTimer();
    if(seconds > 0) {
      setBtnText(seconds + 's');
    }else {
      setBtnText('purchase');
      stopTimer();
    }
  })
  return (
    <div>
      {btnText}
    </div>
  )
}