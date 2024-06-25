export function getMetamask(){
    const loginButton = document.getElementById('js-connect-metamask')
    const userWallet = document.getElementById('js-metamask-value')

    loginButton.addEventListener('click', loginWithMetaMask)

    async function loginWithMetaMask() {
        if (!window.ethereum) {
            userWallet.innerText = 'MetaMask is not installed'
            userWallet.classList.add('error')
            return false
        }
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
            .catch((e) => {
                console.error(e.message)
                return false
            })
        if (!accounts) { return }

        window.userWalletAddress = accounts[0]
        userWallet.innerText = window.userWalletAddress
        loginButton.innerText = 'Sign out of MetaMask'

        loginButton.removeEventListener('click', loginWithMetaMask)
        setTimeout(() => {
            loginButton.addEventListener('click', signOutOfMetaMask)
        }, 200)
    }

    function signOutOfMetaMask() {
        window.userWalletAddress = null
        userWallet.innerText = ''
        loginButton.innerText = 'Sign in with MetaMask'

        loginButton.removeEventListener('click', signOutOfMetaMask)
        setTimeout(() => {
            loginButton.addEventListener('click', loginWithMetaMask)
        }, 200)
    }

}