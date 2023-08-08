function initialize() {
    const buttonRowArray = (document.querySelectorAll('.buttonRow > button'));
    
    
    buttonRowArray.forEach((element) =>
    {
        element.addEventListener('click', (event) => {
            buttonInterpreter(event.target);
        });
    });
}

function buttonInterpreter(buttonPressed) {
    const display = document.querySelector('.calculatorDisplay p');
    if (parseInt(buttonPressed.textContent) >= 0 && parseInt(buttonPressed.textContent) <= 9)
    {
        console.log(parseInt(buttonPressed.textContent));
        display.textContent += parseInt(buttonPressed.textContent);

    }
}


initialize();
