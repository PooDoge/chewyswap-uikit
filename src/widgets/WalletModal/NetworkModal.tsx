import React from "react";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import LinkExternal from "../../components/Link/LinkExternal";
import Flex from "../../components/Flex/Flex";
import { Modal } from "../Modal";

interface Props {
  chain: string;
  onDismiss?: () => void;
}


const NetworkModal: React.FC<Props> = ({ chain, onDismiss = () => null }) => (
  <Modal title="Current Network" onDismiss={onDismiss}>
    <Text
      fontSize="20px"
      bold
      style={{ marginBottom: "8px" }}
    >
      {chain}
    </Text>
    <Flex mt="24px" mb="32px" justifyContent="center">
      <LinkExternal small href="https://docs.chewyswap.com/connect-to-shibarium" mr="16px">
        How to Add Shibarium
      </LinkExternal>
      <LinkExternal small href="https://docs.chewyswap.com/connect-to-dogechain" mr="16px">
        How to Add Dogechain
      </LinkExternal>
    </Flex>
    <Flex justifyContent="center">
      <Button
        size="sm"
        variant="secondary"
        onClick={() => {
          onDismiss();
        }}
      >
        Dismiss
      </Button>
    </Flex>
  </Modal>
);

export default NetworkModal;