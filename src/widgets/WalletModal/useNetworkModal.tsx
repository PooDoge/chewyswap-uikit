import React from "react";
import { useModal } from "../Modal";
import NetworkModal from "./NetworkModal";

interface ReturnType {
  onPresentNetworkModal: () => void;
}

const useNetworkModal = (chain: string): ReturnType => {
  const [onPresentNetworkModal] = useModal(<NetworkModal chain={chain || "Wrong Network"} />);
  return { onPresentNetworkModal };
};

export default useNetworkModal;