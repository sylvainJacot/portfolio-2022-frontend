import MouseContextProvider from "./mouse-context";
import BodyContextProvider from "./body-context";
import OverallSoundContextProvider from "./sound-context";
import AvatarContextProvider from "./avatar-context";

export const OverallContext = ({ children }) => {
  return (
    <MouseContextProvider>
      <OverallSoundContextProvider>
        <BodyContextProvider>
          <AvatarContextProvider>{children}</AvatarContextProvider>
        </BodyContextProvider>
      </OverallSoundContextProvider>
    </MouseContextProvider>
  );
};
