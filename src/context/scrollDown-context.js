import { createContext, useState } from "react";

const [scrollDownRef, setScrollDownRef] = useState(undefined);

ScrollDownContext = createContext({ scrollDownRef, setScrollDownRef });

const ScrollDownContextProvider = ({ children }) => {
  return (
    <ScrollDownContext.Provider value={{ scrollDownRef, setScrollDownRef }}>
      {...children}
    </ScrollDownContext.Provider>
  );
};

export { ReferenceDataContext, ScrollDownContextProvider };
