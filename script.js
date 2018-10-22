function calculate(a, b, c) {
    a = Number(a);
    b = Number(b);


    if (Number.isNaN(a) || Number.isNaN(b)) throw new Error('Можно только числа');
    switch (c) {
        case "+":
            return a + b;
            break;
        case "-":
            return a - b;
            break;
        case "*":
            return a * b;
            break;
        case "/":
            if (b === 0) throw new Error('Ну нельзя же делить на ноль');
            return a / b;
            break;
        default:
            throw new Error("Не задан оператор");
    }
}

function getArrElement(array, elem) {

    return array.reduce((res, el) => {
        if (el.includes(elem)) return ++res;
        else return res;
    }, 0)

}


