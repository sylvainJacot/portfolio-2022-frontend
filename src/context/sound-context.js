import React, { createContext, useState } from "react";

export const OverallSoundContext = createContext({
  overallSound: true,
  overallSoundChangeHandler: () => {},
});

const OverallSoundContextProvider = (props) => {
  const [overallSound, setOverallSound] = useState(true);

  const overallSoundChangeHandler = (overallSound) => {
    setOverallSound(overallSound);
  };

  return (
    <OverallSoundContext.Provider
      value={{
        overallSound: overallSound,
        overallSoundChangeHandler: overallSoundChangeHandler,
      }}
    >
      {props.children}
    </OverallSoundContext.Provider>
  );
};

export default OverallSoundContextProvider;
