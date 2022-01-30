function calculate(amount, timeInMonths) {
    let element = document.getElementsByClassName('output');
    console.log(element);
    if (amount > 9999) element[0].innerHTML = amount;
}
function getInputs() {
    const amount = 10000;
    const time = 10;
    const timeInMonths = time * 12;
    calculate(amount, timeInMonths);
}
function sendOutputs() {
}
getInputs();

//# sourceMappingURL=index.c36f364e.js.map
