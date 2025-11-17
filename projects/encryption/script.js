document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const shiftValueInput = document.getElementById('shiftValue');
    const encryptButton = document.getElementById('encryptButton');
    const outputText = document.getElementById('outputText');

    encryptButton.addEventListener('click', () => {
        const text = inputText.value;
        const shift = parseInt(shiftValueInput.value); // Get the shift value as an integer

        if (isNaN(shift) || shift < 0 || shift > 25) {
            alert('Please enter a valid shift value between 0 and 25.');
            return;
        }

        const encryptedText = caesarCipher(text, shift);
        outputText.textContent = encryptedText;
    });

    function caesarCipher(str, shift) {
        return str.split('').map(char => {
            const charCode = char.charCodeAt(0);

            // Handle uppercase letters
            if (charCode >= 65 && charCode <= 90) { // ASCII for A-Z
                return String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
            }
            // Handle lowercase letters
            else if (charCode >= 97 && charCode <= 122) { // ASCII for a-z
                return String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
            }
            // Return non-alphabetic characters as they are
            else {
                return char;
            }
        }).join('');
    }
});