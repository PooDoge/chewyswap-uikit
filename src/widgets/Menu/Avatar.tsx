import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import { Profile } from "./types";
import { useNetworkModal } from "../WalletModal";
import NoProfileAvatar from "./icons/NoProfileAvatar";

interface AvatarProps {
  profile: Profile;
}

const StyledAvatar = styled.div`
  margin-left: 8px;
  position: relative;

  img {
    border-radius: 50%;
  }
`;

const Pip = styled.div`
  background-color: ${({ theme }) => theme.colors.failure};
  border-radius: 50%;
  pointer-events: none;
  height: 8px;
  position: absolute;
  right: 0;
  top: 0;
  width: 8px;
`;

function chainText(chain: string) {
  let returnText = 'Woof! Wen Shibarium? Wen Dogechain? Wrong Network!'
  if (chain === 'Dogechain') {
    returnText = 'Woof! Connected to Dogechain Network'
  } else if (chain === 'Shibarium') {
    returnText = 'Woof! Connected to Shibarium Network'
  }
  return returnText
}

const Avatar: React.FC<AvatarProps> = ({ profile }) => {
  const { username = "Network Doggy", image, showPip = false, chain } = profile;
  const { onPresentNetworkModal } = useNetworkModal(chainText(chain));
  const icon = image ? (
    <img src={image} alt="profile avatar" height="32px" width="32px" />
  ) : (
    <NoProfileAvatar width="32px" height="32px" />
  );

  return (
    <StyledAvatar title={username} onClick={() => {
      onPresentNetworkModal();
    }} >
        {icon}
      {showPip && <Pip />}
    </StyledAvatar>
  );
};

export default Avatar;
