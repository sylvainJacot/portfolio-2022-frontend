import avatarDefault from "../../public/img/avatar-01.png";
import React, { createContext, useState } from "react";

export const AvatarContext = createContext({
  Avatar: avatarDefault,
  avatarChangeHandler: () => {},
});

const AvatarContextProvider = (props) => {
  const [avatar, setAvatar] = useState(avatarDefault);

  const avatarChangeHandler = (avatar) => {
    setAvatar(avatar);
  };

  return (
    <AvatarContext.Provider
      value={{
        avatar: avatar,
        avatarChangeHandler: avatarChangeHandler,
      }}
    >
      {props.children}
    </AvatarContext.Provider>
  );
};

export default AvatarContextProvider;
