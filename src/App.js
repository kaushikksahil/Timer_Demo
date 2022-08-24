import { useEffect, useState } from "react";
import Input from "./component/input";
import Button from "./component/Button";

function App() {
  const [timerValue, setTimerValue] = useState(3);
  const [timerValueInSec, setTimerInSecValue] = useState(0);
  const [isPausedButtonClicked, setPausedButtonClicked] = useState(false);

  useEffect(() => {
    if (timerValueInSec === timerValue * 60) return;
    if (isPausedButtonClicked) return;

    const intervalId = setInterval(() => {
      setTimerInSecValue((timerValueInSec) => timerValueInSec + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timerValueInSec, timerValue, isPausedButtonClicked]);

  const timerValueHandler = (event) => {
    setTimerInSecValue(0);
    setTimerValue(event.target.value);
    setPausedButtonClicked(false);
  };

  const onButtonClickHandler = (event) => {
    const buttonName = event.target.name;
    if (buttonName === "Start") {
      setTimerInSecValue(0);
    }
    if (buttonName === "Reset") {
      setTimerInSecValue(0);
      setTimerValue(0);
    }
    if (buttonName === "Pause") {
      setPausedButtonClicked(true);
    }
    if (buttonName === "Continue") {
      setPausedButtonClicked(false);
    }
  };
  return (
    <div style={{ margin: "10px" }}>
      <Input
        label="Timer"
        input={{
          id: "timer",
          type: "text",
          value: timerValue,
        }}
        onChange={timerValueHandler}
      />
      <h3>
        {timerValueInSec} seconds Elapsed and{" "}
        {timerValue * 60 - timerValueInSec} seconds remainings
      </h3>
      <Button value="Start" color="#6fb71b" onClick={onButtonClickHandler} />
      <Button value="Pause" color="#9e9e9e" onClick={onButtonClickHandler} />
      <Button value="Continue" color="#48bf82" onClick={onButtonClickHandler} />
      <Button value="Reset" color="#105dbd" onClick={onButtonClickHandler} />
    </div>
  );
}

export default App;
