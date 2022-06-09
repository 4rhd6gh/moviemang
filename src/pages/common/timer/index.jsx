import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const padNumber = (num) => {
  return String(num).padStart(2, "0");
};

function Timer(props) {
  const tempMin = props.min ? parseInt(props.min) : 0;

  const { emailAuthCounter } = props;

  let userInputMin = props.min;

  const initialTime = useRef(tempMin * 60);
  const interval = useRef(null);

  const [min, setMin] = useState(padNumber(tempMin));
  const [sec, setSec] = useState("00");

  useEffect(() => {
    interval.current = setInterval(() => {
      initialTime.current -= 1;
      setSec(padNumber(initialTime.current % 60));
      setMin(padNumber(parseInt(initialTime.current / 60)));
    }, 1000);

    return () => clearInterval(interval.current);
  }, []);

  useEffect(() => {
    if (initialTime.current <= 0) {
      clearInterval(interval.current);
    }
  }, [sec]);

  useEffect(() => {
    if (emailAuthCounter >= 1) {
      if (initialTime.current <= 0) {
        initialTime.current = userInputMin * 60;
        interval.current = setInterval(() => {
          initialTime.current -= 1;
          setSec(padNumber(initialTime.current % 60));
          setMin(padNumber(parseInt(initialTime.current / 60)));
        }, 1000);
      } else {
        initialTime.current = userInputMin * 60;
      }
    }
  }, [emailAuthCounter, userInputMin]);

  return (
    <div className="absolute ml-2 top-[28px] right-[100px] text-xl text-black mt-[-15px]">
      {min} : {sec}
    </div>
  );
}

export default Timer;

Timer.propTypes = {
  min: PropTypes.number,
  emailAuthCounter: PropTypes.number,
};
