interface ReturnType {
    onPresentNetworkModal: () => void;
}
declare const useNetworkModal: (chain: string) => ReturnType;
export default useNetworkModal;
