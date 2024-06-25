export function getSha() {
    const textarea = document.getElementById('js-sha-textarea')
    const shaValue = document.getElementById('js-sha-value')
    const shaInitialValue = document.getElementById('js-sha-initial-value')
    const shaButton = document.getElementById('js-get-sha')
    const encriptButton = document.getElementById('js-get-initial')

    function onButtonClick() {
        shaValue.textContent = CryptoJS.AES.encrypt(textarea.value, 'secret key 123').toString();
    }

    function onInput() {
        shaButton.disabled = !textarea.value
    }

    function onEncript() {
        const bytes = CryptoJS.AES.decrypt(shaValue.textContent, 'secret key 123');
        shaInitialValue.textContent = bytes.toString(CryptoJS.enc.Utf8)
    }

    shaButton.addEventListener('click', onButtonClick)
    textarea.addEventListener('input', onInput)
    encriptButton.addEventListener('click', onEncript)
}