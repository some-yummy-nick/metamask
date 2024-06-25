export function balance() {
    const getButton = document.getElementById('js-get-balance')
    const setButton = document.getElementById('js-set-contract')
    const ethValue = document.getElementById('js-eth-value')
    const contractValue = document.getElementById('js-contract-value')
    const web3 = new Web3("https://rpc.sepolia.org")

    function getBalance() {
        web3.eth.getBalance("0xF8561Dc64E577B0CF53dd3FC11329e80B1A8343e").then((data)=>ethValue.textContent=data)
    }

    function setContract(){
        const abi = [
            {
                outputs: [
                    {
                        internalType: "uint256",
                        name: "randomNo",
                        type: "uint256",
                    },
                ],
                name: "generateRandomNumber",
                stateMutability: "nonpayable",
                type: "function",
            },
        ] ;

        const address = "0xA36432F7B12f160F685717c4Ab12EB883a682810";

        // create a new contract object, providing the ABI and address
        const contract = new web3.eth.Contract(abi, address);

        // using contract.methods to get value
        contract.methods
            .generateRandomNumber()
            .call()
            .then((data)=>{
                contractValue.textContent = data
            });
    }

    getButton.addEventListener('click', getBalance)
    setButton.addEventListener('click', setContract)
}