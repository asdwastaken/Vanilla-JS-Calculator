
let numbers = document.querySelectorAll('.number');
let initialInputArea = document.querySelector('.initial-input');
let currentInputArea = document.querySelector('.current-input');
let arithmeticOperations = document.querySelectorAll('.arithmetic');
let equalsButton = document.querySelector('#equals-button');
let allClearButton = document.getElementById('all-clear-button');
let absoluteValueButton = document.getElementById('abs-value-button');
let percentButton = document.getElementById('percent-button');





numbers.forEach(num => {
    num.addEventListener('click', () => {
        if (num.textContent == '.' && currentInputArea.textContent.includes('.')) return;

        if (currentInputArea.textContent.startsWith('0') && !currentInputArea.textContent.includes('.')) {
            currentInputArea.textContent += '.';

            if (currentInputArea.textContent.includes('.'))
                return;
        }

        currentInputArea.textContent += num.textContent;

    })
})


allClearButton.addEventListener('click', () => {
    currentInputArea.textContent = '';
    initialInputArea.textContent = '';
    arithmeticOperations.forEach(operation => operation.style.backgroundColor = 'rgb(255, 188, 63)');
})


absoluteValueButton.addEventListener('click', () => {
    if (Number(currentInputArea.textContent) != 0) {
        currentInputArea.textContent = Number(currentInputArea.textContent) * -1;
    }
})

percentButton.addEventListener('click', () => {
    if (initialInputArea.textContent) {
        currentInputArea.textContent = Number(currentInputArea.textContent) * Number(initialInputArea.textContent) / 100;

    } else {
        currentInputArea.textContent = Number(currentInputArea.textContent) / 100;

    }

})




let activeButton = null;
let result = '';

arithmeticOperations.forEach(operation => {

    operation.addEventListener('click', () => {

        if (activeButton) {
            activeButton.style.backgroundColor = 'rgb(255, 188, 63)';
        }

        operation.style.backgroundColor = 'lightblue';
        activeButton = operation;


        if (!initialInputArea.textContent) {

            initialInputArea.textContent = currentInputArea.textContent;
            currentInputArea.textContent = '';
        }

        if (operation.textContent == '+' && operation.style.backgroundColor == 'lightblue') {
            add();
            equalsButton.addEventListener('click', () => {

                if (operation.style.backgroundColor == 'lightblue' && operation.textContent == '+') {
                    add();

                }
            })

        } else if (operation.textContent == '-' && operation.style.backgroundColor == 'lightblue') {
            subtract();
            equalsButton.addEventListener('click', () => {
                if (operation.style.backgroundColor == 'lightblue' && operation.textContent == '-') {
                    subtract();

                }
            })

        } else if (operation.textContent == 'x' && operation.style.backgroundColor == 'lightblue') {
            multiply();
            equalsButton.addEventListener('click', () => {
                if (operation.style.backgroundColor == 'lightblue' && operation.textContent == 'x') {
                    multiply();

                }
            })

        } else if (operation.textContent == '÷' && operation.style.backgroundColor == 'lightblue') {
            divide();
            equalsButton.addEventListener('click', () => {
                if (operation.style.backgroundColor == 'lightblue' && operation.textContent == '÷') {
                    divide();
                }
            })
        }
    })

})






function add() {
    if (!currentInputArea.textContent == '') {

        result = Number(currentInputArea.textContent) + Number(initialInputArea.textContent);
        initialInputArea.textContent = result;
        currentInputArea.textContent = '';

    }
}

function subtract() {
    if (!currentInputArea.textContent == '') {

        result = Number(initialInputArea.textContent) - Number(currentInputArea.textContent);
        initialInputArea.textContent = result;
        currentInputArea.textContent = '';

    }
}



function divide() {
    if (!currentInputArea.textContent == '') {

        if (Number(currentInputArea.textContent) == 0) return;
        result = Number(initialInputArea.textContent) / Number(currentInputArea.textContent);
        initialInputArea.textContent = result;
        currentInputArea.textContent = '';

    }
}



function multiply() {
    if (!currentInputArea.textContent == '') {

        result = Number(initialInputArea.textContent) * Number(currentInputArea.textContent);
        initialInputArea.textContent = result;
        currentInputArea.textContent = '';

    }
}



