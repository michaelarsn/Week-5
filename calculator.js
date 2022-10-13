const number1 = prompt("Enter first number: ");

const operator = prompt("Choose an operation to perform. Type +, -, * , /,  sqr or pow (power)");

if (operator == "sqr") {
    if (number1  < 0) {
        alert("You can't get the square root of a negative number")
    } else {
        result = Math.sqrt(number1);
    alert("The square root is " + result);
    }

} else {
    const number2 = prompt("Enter second number: ");
    let result;

    switch(operator) {
        case '+':
            function sumFunction() {
                return (Number(number1) + Number(number2));
            }
            alert('The result is ' + sumFunction());
            break;
        case '-':
            result = number1 - number2;
            alert(`${number1} - ${number2} = ${result}`);
            break;

        case '*':
            result = number1 * number2;
            alert(`${number1} * ${number2} = ${result}`);
            break;

        case '/':
            result = number1 / number2;
            alert(`${number1} / ${number2} = ${result}`);
            break;
        
        case 'sqr':
            result = Math.sqrt(number1);
            alert(`${number1} * ${number1} = ${result}`);
            break;

        case 'pow':
            result = Math.pow(number1, number2);
            alert(`${number1} power ${number2} = ${result}`);
            break;

        default:
            console.log('Invalid operator');
            break;

    }
}