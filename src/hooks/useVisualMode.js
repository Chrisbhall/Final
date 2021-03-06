import { useState} from "react";

export default function useVisualMode(initial) {
  /*
manages transitions of the display from errors/shows/empty....
  */
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition (Value, replace = false) {
    if (replace) {
      setHistory(Value);
      setMode(Value);
    } else {
      setMode(Value);
    }
  };
  function back (){
    setMode(history[history.length - 1]);
  }

  return { mode, transition, back };
}