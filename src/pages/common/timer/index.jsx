import { useState, useEffect, useRef } from "react";

const padNumber = (num, length) => {
  return String(num).padStart(length, "0");
};

function Timer(props) {
  const tempMin = props.min ? parseInt(props.min) : 0;
  const tempSec = props.sec ? parseInt(props.sec) : 0;

  const initialTime = useRef(tempMin * 60 + tempSec);
  const interval = useRef(null);

  const [min, setMin] = useState(padNumber(tempMin, 2));
  const [sec, setSec] = useState(padNumber(tempSec, 2));

  useEffect(() => {
    interval.current = setInterval(() => {
      initialTime.current -= 1;
      setSec(padNumber(initialTime.current % 60, 2));
      setMin(padNumber(parseInt(initialTime.current / 60), 2));
    }, 1000);
    return () => clearInterval(interval.current);
  }, []);

  useEffect(() => {
    if (initialTime.current <= 0) {
      clearInterval(interval.current);
    }
  }, [sec]);

  return (
    <div className="absolute ml-2 top-[28px] right-[100px] text-xl text-black mt-[-15px]">
      {min} : {sec}
    </div>
  );
}

export default Timer;
