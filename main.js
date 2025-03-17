document.addEventListener('DOMContentLoaded', () => {
    const codeElement = document.querySelector('.code h2');
    const inputElement = document.getElementById('input');
    const submitButton = document.getElementById('submit');

    Number(inputElement.value);

    const secretCode = Math.floor(1000 + Math.random() * 9000).toString(); // Generate a 4-digit random code
    // console.log(secretCode);

    submitButton.addEventListener('click', () => {
        const userGuess = inputElement.value;
    
        let updatedCode = '';
        let correctGuess = false;
        for (let i = 0; i < secretCode.length; i++) {
            if (userGuess[i] === secretCode[i]) {
            updatedCode += userGuess[i];
            correctGuess = true;
            } else {
            updatedCode += '_ ';
            }
        }

        codeElement.textContent = updatedCode;

        if (isNaN(userGuess) || userGuess.length !== 4) {
            codeElement.textContent = 'Please enter only numbers and 4 digits long!';
        } else if (userGuess === secretCode) {
            codeElement.textContent = 'You got it!' + ' ' + secretCode;
        } else if (!correctGuess) {
            codeElement.textContent = 'Oops, try again!';
        } else if (!updatedCode.includes('_')) {
            codeElement.textContent = 'Incorrect, try again!';
        }
        inputElement.value = '';
    });
});