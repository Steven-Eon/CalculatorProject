const numToCalc = [];

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
    else if (buttonPressed.textContent === '.')
    {
        if (!(display.textContent).includes("."))
        {
            if (display.textContent.length === 0)
            {
                display.textContent += 0;
            }
            display.textContent += '.';
        }
    }
    else if (buttonPressed.textContent === '=')
    {
        if (display.textContent != "")
        {
            numToCalc.push(parseFloat(display.textContent));
            display.textContent = "";
            console.table(numToCalc);
            numToCalc.splice(0, numToCalc.length);
        }
    }
    else
    {
        if (display.textContent != "")
        {
            numToCalc.push(parseFloat(display.textContent));
            numToCalc.push(buttonPressed.textContent);
            display.textContent = "";
            console.table(numToCalc);
        }
    }
}


initialize();
