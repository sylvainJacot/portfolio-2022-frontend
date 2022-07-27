import React, { createContext, useState } from "react";

export const BodyContext = createContext({
  bodyColor: "",
  bodyColorChangeHandler: () => {},
});

const BodyContextProvider = (props) => {
  const [bodyColor, setBodyColor] = useState("");

  const bodyColorChangeHandler = (bodyColor) => {
    setBodyColor(bodyColor);
  };

  return (
    <BodyContext.Provider
      value={{
        bodyColor: bodyColor,
        bodyColorChangeHandler: bodyColorChangeHandler,
      }}
    >
      {props.children}
    </BodyContext.Provider>
  );
};

export default BodyContextProvider;
