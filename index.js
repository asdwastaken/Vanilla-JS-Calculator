
let numbers = document.querySelectorAll('.number');
let initialInputArea = document.querySelector('.initial-input');
let currentInputArea = document.querySelector('.current-input');
let arithmeticOperations = document.querySelectorAll('.arithmetic');
let equalsButton = document.querySelector('#equals-button');
let allClearButton = document.getElementById('all-clear-button');




console.log('hi there');




numbers.forEach(num => {
    num.addEventListener('click', () => {
        if (num.textContent == '.' && currentInputArea.textContent.includes('.')) return;

        currentInputArea.textContent += num.textContent;

    })
})

let activeButton = null;

arithmeticOperations.forEach(operation => {


    operation.addEventListener('click', (e) => {

        if (activeButton) {
            activeButton.style.backgroundColor = 'rgb(255, 188, 63)';
        }
        operation.style.backgroundColor = 'lightblue';

        activeButton = operation;


        if (operation.style.backgroundColor == 'lightblue') {

            if (!initialInputArea.textContent) {

                initialInputArea.textContent = currentInputArea.textContent;
                currentInputArea.textContent = '';

            } else if (initialInputArea.textContent && operation.textContent == '+') {
                if (currentInputArea.textContent) {

                    equalsButton.addEventListener('click', () => {
                        if (operation.style.backgroundColor == 'lightblue' && operation.textContent == '+') {
                            initialInputArea.textContent = Number(currentInputArea.textContent) + Number(initialInputArea.textContent);
                            currentInputArea.textContent = '';
                        }

                    })

                }
            } else if (initialInputArea.textContent && operation.textContent == '-') {
                if (currentInputArea.textContent) {

                    equalsButton.addEventListener('click', () => {
                        if (operation.style.backgroundColor == 'lightblue' && operation.textContent == '-') {
                            initialInputArea.textContent = Number(initialInputArea.textContent) - Number(currentInputArea.textContent);
                            currentInputArea.textContent = '';
                        }
                    })
                }

            } else if (initialInputArea.textContent && operation.textContent == 'x') {
                if (currentInputArea.textContent) {

                    equalsButton.addEventListener('click', () => {
                        if (operation.style.backgroundColor == 'lightblue' && operation.textContent == 'x') {
                            initialInputArea.textContent = Number(currentInputArea.textContent) * Number(initialInputArea.textContent);
                            currentInputArea.textContent = '';
                        }
                    })

                }
            } else if (initialInputArea.textContent && operation.textContent == '÷') {
                if (currentInputArea.textContent) {

                    equalsButton.addEventListener('click', () => {
                        if (operation.style.backgroundColor == 'lightblue' && operation.textContent == '÷') {
                            initialInputArea.textContent = Number(initialInputArea.textContent) / Number(currentInputArea.textContent);
                            currentInputArea.textContent = '';
                        }
                    })

                }
            }

        }




    })




})







allClearButton.addEventListener('click', () => {
    currentInputArea.textContent = '';
    initialInputArea.textContent = '';
    arithmeticOperations.forEach(operation => operation.style.backgroundColor = 'rgb(255, 188, 63)');
})








