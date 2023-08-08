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
    else if (buttonPressed.textContent === 'Clear')
    {
        numToCalc.splice(0, numToCalc.length);
        display.textContent = "";
    }
    else if (buttonPressed.textContent === 'Backspace' && buttonPressed.textContent != '')
    {
        display.textContent = display.textContent.slice(0, -1);
    }
    else if (buttonPressed.textContent === '.')
    {
        if (!(display.textContent).includes("."))
        {
            display.textContent.length === 0 ? display.textContent += 0 : display.textContent;
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
            display.textContent = eval(numToCalc);
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

function eval(expressionArray)
{
    let finalValue = expressionArray[0];
    console.log(expressionArray.length);

    for (let i = 1; i < expressionArray.length; i = i + 2)
    {
        console.log(expressionArray[i]);
        console.log(expressionArray[i + 1]);
        switch (expressionArray[i]) {
            case '÷':
                finalValue = finalValue / expressionArray[i + 1];
                break;
            case '+':
                finalValue = finalValue + expressionArray[i + 1];
                break;
            case '-':
                finalValue = finalValue - expressionArray[i + 1];
                break;
            case 'x':
                finalValue = finalValue * expressionArray[i + 1];
                break;
        };
    }
    return finalValue;
}

initialize();
